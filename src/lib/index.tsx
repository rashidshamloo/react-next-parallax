// react
import {
  useEffect,
  useRef,
  useCallback,
  forwardRef,
  memo,
  RefObject,
  useState,
  useImperativeHandle,
  useMemo,
  // useLayoutEffect,
} from 'react';

// tilt
import { Tilt, TiltRef, TiltRef as ParallaxRef, Angle } from 'react-next-tilt';

// utility
import {
  getHTMLElement,
  getParallaxElement,
  isDeepEqual,
  mapAngleToRange,
} from './utility/utility';

// types
import { ParallaxProps, ParallaxElement } from './types/types';

const NextParallax = forwardRef<ParallaxRef, ParallaxProps>(
  (
    {
      overflowHiddenEnable = true,
      animationMode = 'center-to-edge',
      animationReverse = 'none',
      offsetMultiplier = 1,
      opacityMultiplier = 1,
      scaleMultiplier = 1,
      rotationMultiplier = 1,
      skewMultiplier = 1,
      disabled = false,
      fullPageListening,
      controlElement,
      controlElementOnly,
      perspective = '1200px',
      scale = 1.05,
      shadowEnable = true,
      shadow = '0 0 1.5rem rgba(0, 0, 0, 0.5)',
      CSSTransition = 'all 0.3s ease-out',
      spotGlareSizePercent = 100,
      spotGlarePosition = 'all',
      children,
      tiltMaxAngleX = 20,
      tiltMaxAngleY = 20,
      gyroMaxAngleX = 0,
      gyroMaxAngleY = 0,
      tiltStyle = {},
      onMouseEnter,
      onMouseLeave,
      onTouchStart,
      onTouchEnd,
      onTilt,
      onReset,
      ...props
    }: ParallaxProps,
    ref
  ) => {
    // state
    const [parallaxElements, setParallaxElements] = useState<ParallaxElement[]>(
      []
    );

    // state variables (non-re-rendering)
    const attachEvents =
      !fullPageListening &&
      (!controlElement || (controlElement && !controlElementOnly));

    // ref
    const tiltRef = useRef<TiltRef | null>(null);

    // attributes
    const attributePrefix = 'data-parallax';
    const attributeSeparator = ';';
    const attributes = useMemo(
      () => ['offset', 'opacity', 'rotation', 'scale', 'skew'],
      []
    );
    const attributeSelector = attributes
      .map((attr) => `[${attributePrefix}-${attr}]`)
      .join(', ');

    // multiplier
    const multiplier = useMemo(
      () => ({
        offset: offsetMultiplier,
        opacity: opacityMultiplier,
        scale: scaleMultiplier,
        rotation: rotationMultiplier,
        skew: skewMultiplier,
      }),
      [
        offsetMultiplier,
        opacityMultiplier,
        rotationMultiplier,
        scaleMultiplier,
        skewMultiplier,
      ]
    );

    // functions

    // updates the "will-change" css property
    const updateWillChange = useCallback(
      (add = true) => {
        requestAnimationFrame(() => {
          for (const element of parallaxElements) {
            if (!add) element.element.style.willChange = '';
            else {
              const willChange: string[] = [];

              if (
                element.offset ||
                element.opacityInitial !== undefined ||
                element.scaleInitial !== undefined ||
                element.rotationInitial !== undefined ||
                element.skewInitial !== undefined
              )
                willChange.push('transform');

              if (element.opacityInitial !== undefined)
                willChange.push('opacity');

              element.element.style.willChange = willChange.join(', ');
            }
          }
        });
      },
      [parallaxElements]
    );

    // updates the translate, opacity, rotation, and scale values
    // of elements based on angle and attribute value
    const updateParallaxValues = useCallback(
      (angle: Angle, gyro = false): void => {
        for (const element of parallaxElements) {
          const maxAngleX = gyro ? gyroMaxAngleX : tiltMaxAngleX;
          const maxAngleY = gyro ? gyroMaxAngleY : tiltMaxAngleY;

          let transform = '';
          let opacity = element.opacityInitial;

          if (element.offset) {
            const translateX = !maxAngleY
              ? 0
              : (angle.angleY / maxAngleY) * element.offset;
            const translateY = !maxAngleX
              ? 0
              : (-angle.angleX / maxAngleX) * element.offset;
            transform += `translate(${translateX}%, ${translateY}%)`;
          }

          if (
            element.rotationStart !== undefined &&
            element.rotationEnd !== undefined
          ) {
            const rotate = mapAngleToRange(
              angle,
              maxAngleX,
              maxAngleY,
              element.rotationStart,
              element.rotationEnd,
              animationMode
            );
            transform += ` rotate(${rotate}deg)`;
          }

          if (
            element.scaleStart !== undefined &&
            element.scaleEnd !== undefined
          ) {
            const scale = mapAngleToRange(
              angle,
              maxAngleX,
              maxAngleY,
              element.scaleStart,
              element.scaleEnd,
              animationMode
            );
            transform += ` scale(${scale})`;
          }

          if (
            element.skewStart !== undefined &&
            element.skewEnd !== undefined
          ) {
            const skew = mapAngleToRange(
              angle,
              maxAngleX,
              maxAngleY,
              element.skewStart,
              element.skewEnd,
              animationMode
            );
            transform += ` skew(${skew}deg, ${skew}deg)`;
          }

          if (
            element.opacityStart !== undefined &&
            element.opacityEnd !== undefined
          ) {
            opacity = mapAngleToRange(
              angle,
              maxAngleX,
              maxAngleY,
              element.opacityStart,
              element.opacityEnd,
              animationMode
            );
          }

          // applying initial transform at the end so the included functions
          // get applied after translate functions
          if (element.transformInitial)
            transform += ' ' + element.transformInitial;

          requestAnimationFrame(() => {
            if (transform) element.element.style.transform = transform;

            if (
              element.opacityStart !== undefined &&
              element.opacityEnd !== undefined
            )
              element.element.style.opacity = String(opacity);
          });
        }
      },
      [
        parallaxElements,
        animationMode,
        tiltMaxAngleX,
        tiltMaxAngleY,
        gyroMaxAngleX,
        gyroMaxAngleY,
      ]
    );

    // adds css transition to elements
    const addTransition = useCallback((): void => {
      requestAnimationFrame(() => {
        for (const ele of parallaxElements)
          ele.element.style.transition = CSSTransition;
      });
    }, [CSSTransition, parallaxElements]);

    // resets the transform of elements
    const resetParallaxValues = useCallback((): void => {
      for (const element of parallaxElements) {
        let transform = '';

        if (element.offset) transform += `translate(0%, 0%)`;

        if (element.rotationInitial !== undefined)
          transform += ` rotate(${element.rotationInitial}deg)`;

        if (element.scaleInitial !== undefined)
          transform += ` scale(${element.scaleInitial})`;

        if (element.skewInitial !== undefined)
          transform += ` skew(${element.skewInitial}deg, ${element.skewInitial}deg)`;

        if (element.transformInitial)
          transform += ' ' + element.transformInitial;

        requestAnimationFrame(() => {
          if (transform) element.element.style.transform = transform;

          if (element.opacityInitial !== undefined)
            element.element.style.opacity = String(element.opacityInitial);
        });
      }
    }, [parallaxElements]);

    // ParallaxRef
    useImperativeHandle(
      ref,
      () => {
        if (tiltRef.current)
          return {
            ...tiltRef.current,
            updateWillChange: (add = true) => {
              tiltRef.current?.updateWillChange(add);
              updateWillChange(add);
            },
          };
        else
          return {
            element: null,
            angle: () => ({ angleX: 0, angleY: 0 }),
            reset: () => {
              return;
            },
            tilt: () => {
              return;
            },
            updateWillChange: () => {
              return;
            },
          };
      },
      // scale is needed because when it changes, the setTiltAngle function called by ref.tilt()
      // in react-next-tilt is updated but here it's still pointing to the old function
      [updateWillChange, scale]
    );

    // events

    const mouseEnterTouchStart = useCallback(() => {
      if (!disabled) updateWillChange();
    }, [disabled, updateWillChange]);

    const mouseLeaveTouchEnd = useCallback(() => {
      if (!disabled) updateWillChange(false);
    }, [disabled, updateWillChange]);

    const tilt = useCallback(
      (angle: Angle, gyro: boolean) => {
        updateParallaxValues(angle, gyro);
      },
      [updateParallaxValues]
    );

    const reset = useCallback(() => {
      resetParallaxValues();
    }, [resetParallaxValues]);

    // adding event listeners to controlElement(s)
    useEffect(() => {
      if (!controlElement && !fullPageListening) return;

      // if controlElement is not an array, convert it to one
      let controlElementArray: Array<
        HTMLElement | RefObject<unknown> | Document
      >;
      if (fullPageListening || !controlElement)
        controlElementArray = [document];
      else
        controlElementArray = Array.isArray(controlElement)
          ? controlElement
          : [controlElement];

      for (let el of controlElementArray) {
        const convertedEl = getHTMLElement(el);
        if (!convertedEl) continue;
        el = convertedEl;

        el.addEventListener('mouseenter', mouseEnterTouchStart);
        el.addEventListener('mouseleave', mouseLeaveTouchEnd);
        el.addEventListener('touchstart', mouseEnterTouchStart, {
          passive: true,
        });
        el.addEventListener('touchend', mouseLeaveTouchEnd);
      }

      return () => {
        for (let el of controlElementArray) {
          const convertedEl = getHTMLElement(el);
          if (!convertedEl) continue;
          el = convertedEl;

          el.removeEventListener('mouseenter', mouseEnterTouchStart);
          el.removeEventListener('mouseleave', mouseLeaveTouchEnd);
          el.removeEventListener('touchstart', mouseEnterTouchStart);
          el.removeEventListener('touchend', mouseLeaveTouchEnd);
        }
      };
    }, [
      controlElement,
      fullPageListening,
      mouseEnterTouchStart,
      mouseLeaveTouchEnd,
    ]);

    // adding parallax elements and updating their transition property
    useEffect(() => {
      if (!tiltRef.current?.element) return;

      const parallaxElements: ParallaxElement[] = [];

      tiltRef.current.element
        .querySelectorAll<HTMLElement>(attributeSelector)
        .forEach((ele) => {
          parallaxElements.push(
            getParallaxElement(
              ele,
              attributes,
              attributePrefix,
              attributeSeparator,
              animationMode,
              animationReverse,
              multiplier
            )
          );
          ele.style.transition = CSSTransition;
        });

      setParallaxElements(parallaxElements);
    }, [
      CSSTransition,
      animationMode,
      animationReverse,
      attributeSelector,
      attributes,
      multiplier,
    ]);

    // set initial values for parallaxElements
    useEffect(() => {
      if (parallaxElements.length === 0) return;
      resetParallaxValues();
      addTransition();
    }, [addTransition, parallaxElements, resetParallaxValues]);

    return (
      <Tilt
        ref={tiltRef}
        onMouseEnter={
          attachEvents
            ? onMouseEnter
              ? (e) => {
                  mouseEnterTouchStart();
                  onMouseEnter(e);
                }
              : mouseEnterTouchStart
            : onMouseEnter
        }
        onTouchStart={
          attachEvents
            ? onTouchStart
              ? (e) => {
                  mouseEnterTouchStart();
                  onTouchStart(e);
                }
              : mouseEnterTouchStart
            : onTouchStart
        }
        onMouseLeave={
          attachEvents
            ? onMouseLeave
              ? (e) => {
                  mouseLeaveTouchEnd();
                  onMouseLeave(e);
                }
              : mouseLeaveTouchEnd
            : onMouseLeave
        }
        onTouchEnd={
          attachEvents
            ? onTouchEnd
              ? (e) => {
                  mouseLeaveTouchEnd();
                  onTouchEnd(e);
                }
              : mouseLeaveTouchEnd
            : onTouchEnd
        }
        onTilt={
          onTilt
            ? (angle, gyro) => {
                tilt(angle, gyro);
                onTilt(angle, gyro);
              }
            : tilt
        }
        onReset={
          onReset
            ? () => {
                reset();
                onReset();
              }
            : reset
        }
        disabled={disabled}
        fullPageListening={fullPageListening}
        controlElement={controlElement}
        controlElementOnly={controlElementOnly}
        perspective={perspective}
        scale={scale}
        shadowEnable={shadowEnable}
        shadow={shadow}
        CSSTransition={CSSTransition}
        // preserve3dEnable={preserve3dEnable}
        spotGlareSizePercent={spotGlareSizePercent}
        spotGlarePosition={spotGlarePosition}
        tiltMaxAngleX={tiltMaxAngleX}
        tiltMaxAngleY={tiltMaxAngleY}
        tiltStyle={
          overflowHiddenEnable
            ? Object.assign({ overflow: 'hidden' }, tiltStyle)
            : tiltStyle
        }
        {...props}
      >
        {children}
      </Tilt>
    );
  }
);

export const Parallax = memo(NextParallax, (prevProps, nextProps) =>
  isDeepEqual(prevProps, nextProps)
);

Parallax.displayName = 'Parallax';

export default Parallax;
