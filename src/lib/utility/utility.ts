// react
import { RefObject } from 'react';

// types
import { Angle } from 'react-next-tilt';
import {
  AnimationMode,
  AnimationReverse,
  Multiplier,
  ParallaxElement,
} from '../types/types';

// gets HTMLElement from the union
export const getHTMLElement = (
  el: HTMLElement | RefObject<unknown> | Document
): HTMLElement | undefined => {
  // if it's an HTMLElement, return it
  if (el instanceof HTMLElement) return el;

  // if it's the document, case it to HTMLElement and return it
  if (el instanceof Document) return document as unknown as HTMLElement;

  // if it's a "RefObject" and "ref.current.element" is an HTMLElement, return it
  // (for TiltRef, FlipTiltRef, and ParallaxRef)
  if (
    el.current &&
    el.current instanceof Object &&
    'element' in el.current &&
    el.current.element instanceof HTMLElement
  )
    return el.current.element;

  // if it's a "RefObject" and "ref.current" is an HTMLElement, return it
  if (el.current && el.current instanceof HTMLElement) return el.current;

  // otherwise, return undefined
  return undefined;
};

// gets start and end values from a string separated by a separator
export const getStartAndEndValues = (
  str: string,
  separator: string
): [number, number] | undefined => {
  const split = str.split(separator);

  // if values are not numbers, do nothing
  for (const value of split) if (isNaN(Number(value))) return undefined;

  // if only one number is provided, set start to 0 and end as the number
  const start = split.length > 1 ? Number(split[0]) : 0;
  const end = split.length > 1 ? Number(split[1]) : Number(split[0]);

  return [start, end];
};

// sets value of property of ParallaxElement
// source: https://stackoverflow.com/a/73033061/21092502
export const setParallaxElementValue = <T extends object, Key extends keyof T>(
  element: T,
  key: Key,
  value: T[Key]
) => {
  element[key] = value;
};

// gets ParallaxElement from HTMLElement
export const getParallaxElement = (
  ele: HTMLElement,
  attributes: string[],
  attributePrefix: string,
  attributeSeparator: string,
  animationMode: AnimationMode,
  animationReverse: AnimationReverse,
  multiplier: Multiplier
): ParallaxElement => {
  const parallaxElement: ParallaxElement = {
    element: ele,
    transformInitial: ele.style.transform,
  };

  for (const attr of attributes) {
    const attrValue = ele.getAttribute(`${attributePrefix}-${attr}`);
    if (!attrValue) continue;

    switch (attr) {
      case 'offset': {
        const reverse =
          animationReverse === 'all' || animationReverse === 'offset';

        parallaxElement.offset = Number(attrValue) * multiplier.offset;

        if (reverse) parallaxElement.offset *= -1;

        // remove all translate functions (except translateZ()) from initial transform
        parallaxElement.transformInitial =
          parallaxElement.transformInitial.replace(
            /translate[XY3d]*\([^)]*\)/g,
            ''
          );
        break;
      }
      case 'opacity':
      case 'scale':
      case 'rotation':
      case 'skew': {
        const result = getStartAndEndValues(attrValue, attributeSeparator);
        if (!result) continue;

        const reverse =
          animationReverse === 'all' ||
          animationReverse === 'all-except-offset' ||
          (animationReverse === 'opacity' && attr === 'opacity') ||
          (animationReverse === 'scale' && attr === 'scale') ||
          (animationReverse === 'rotation' && attr === 'rotation') ||
          (animationReverse === 'skew' && attr === 'skew');

        let start = !reverse ? result[0] : result[1];
        let end = !reverse ? result[1] : result[0];

        if (multiplier[attr] !== 1) {
          start *= multiplier[attr];
          end *= multiplier[attr];
        }

        setParallaxElementValue(
          parallaxElement,
          (attr + 'Initial') as keyof ParallaxElement,
          animationMode === 'center-to-edge' ? start : start + (end - start) / 2
        );
        setParallaxElementValue(
          parallaxElement,
          (attr + 'Start') as keyof ParallaxElement,
          start
        );
        setParallaxElementValue(
          parallaxElement,
          (attr + 'End') as keyof ParallaxElement,
          end
        );

        // if we don't remove previous functions, on re-renders
        // there will be multiples of the same functions
        if (attr === 'scale')
          // remove all scale functions from initial transform
          parallaxElement.transformInitial =
            parallaxElement.transformInitial.replace(
              /scale[XY3d]*\([^)]*\)/g,
              ''
            );
        else if (attr === 'rotation')
          // remove rotate(), rotateZ(), and rotate3d() functions from initial transform
          parallaxElement.transformInitial =
            parallaxElement.transformInitial.replace(
              /rotate[Z3d]*\([^)]*\)/g,
              ''
            );
        else if (attr === 'skew')
          // remove rotate(), rotateZ(), and rotate3d() functions from initial transform
          parallaxElement.transformInitial =
            parallaxElement.transformInitial.replace(
              /skew[XY3d]*\([^)]*\)/g,
              ''
            );

        break;
      }
    }
  }

  return parallaxElement;
};

// maps angle/maxangle = [-1 - 1] to a range of numbers
export const mapAngleToRange = (
  angle: Angle,
  maxAngleX: number,
  maxAngleY: number,
  start: number,
  end: number,
  animationMode: AnimationMode
): number => {
  // derived from this logic:
  // mapping angle/maxangle = [-1 - 1] to [rotationStart - rotationEnd]
  // + 1 = [0 - 2] => / 2 = [0 - 1] => * (rotationEnd - rotationStart) = [0 - (rotationEnd-rotationStart)] =>
  // + rotationStart = [rotationStart - rotationEnd]
  // (for center-to-edge (abs) we don't need the first two steps and start from [0 - 1])
  // see: https://math.stackexchange.com/a/377174
  if (animationMode === 'center-to-edge') {
    // calculate and select the bigger offset
    const x = !maxAngleX ? 0 : Math.abs(angle.angleX) / maxAngleX;
    const y = !maxAngleY ? 0 : Math.abs(angle.angleY) / maxAngleY;
    const offset = Math.max(x, y);
    // calculate and return the value based on offset
    return offset * (end - start) + start;
  } else {
    // prevent division by zero
    const angleXRatio = !maxAngleX ? 0 : angle.angleX / maxAngleX;
    const angleYRatio = !maxAngleY ? 0 : angle.angleY / maxAngleY;

    if (animationMode === 'edge-to-edge-x')
      return ((angleYRatio + 1) / 2) * (end - start) + start;
    else if (animationMode === 'edge-to-edge-y')
      return ((-angleXRatio + 1) / 2) * (end - start) + start;
    else {
      // animationMode === edge-to-edge-both
      return (
        (((-angleXRatio + angleYRatio) / 2 + 1) / 2) * (end - start) + start
      );
    }
  }
};
