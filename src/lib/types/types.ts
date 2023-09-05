export type {
  TiltRef as ParallaxRef,
  Angle,
  LineGlareDirection,
  LineGlareHoverPosition,
  SpotGlarePosition,
  ShadowType,
} from 'react-next-tilt';

import { TiltProps } from 'react-next-tilt';

export type AnimationMode =
  | 'center-to-edge'
  | 'edge-to-edge-x'
  | 'edge-to-edge-y'
  | 'edge-to-edge-both';

export type AnimationReverse =
  | 'all'
  | 'all-except-offset'
  | 'offset'
  | 'opacity'
  | 'scale'
  | 'rotation'
  | 'skew'
  | 'none';

export type Multiplier = {
  offset: number;
  opacity: number;
  scale: number;
  rotation: number;
  skew: number;
};

export interface ParallaxProps extends TiltProps {
  /**
   * Determines the animation mode when animating `data-parallax-...="x;y"` attributes
   *
   * `center-to-edge`: the value will be `x` at the center and change towards `y` relative to the distance from the center on all sides. | initial value = `x`
   *
   * `edge-to-edge-x`: the value will be `x` at the left edge and `y` at the right edge. | initial value = `x + (x - y / 2)`
   *
   * `edge-to-edge-y`: the value will be `x` at the top edge and `y` at the bottom edge. | initial value = `x + (x - y / 2)`
   *
   * `edge-to-edge-both`: the value will be `x` at the top left corner and `y` at the bottom right corner. | initial value = `x + (x - y / 2)`
   *
   * @note To reverse the direction, you can swap the start and end numbers: e.g. "-100;100" => "100:-100"
   *
   *  Not applicable for `data-attribute-offset`
   *
   * @default 'center-to-edge'
   *
   * @see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--animation-mode Storybook}
   */
  animationMode?: AnimationMode;
  /**
   * Reverses the animation direction for the specified attribute
   *
   * `'none'` : doesn't modify the direction
   *
   * `'all'` : reverses direction for all attributes
   *
   * `'all-except-offset'` : reverses direction for all attributes except `data-parallax-offset`
   *
   * `'offset'` : reverses direction for the `data-parallax-offset` attribute
   *
   * `'opacity'` : reverses direction for the `data-parallax-opacity` attribute
   *
   * `'scale'` : reverses direction for the `data-parallax-scale` attribute
   *
   * `'rotation'` : reverses direction for the `data-parallax-rotation` attribute
   *
   * `'skew'` : reverses direction for the `data-parallax-skew` attribute
   *
   * @default 'none'
   *
   * @see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--animation-reverse Storybook}
   */
  animationReverse?: AnimationReverse;
  /**
   * Multiplier applied to all offset values
   *
   * @note Allows for easy adjustment of translation amount/speed
   *
   * @default 1
   *
   * @see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--offset Storybook}
   */
  offsetMultiplier?: number;
  /**
   * Multiplier applied to all opacity values
   *
   * @default 1
   *
   * @see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--opacity Storybook}
   */
  opacityMultiplier?: number;
  /**
   * Multiplier applied to all scale values
   *
   * @default 1
   *
   * @see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--scale Storybook}
   */
  scaleMultiplier?: number;
  /**
   * Multiplier applied to all rotation values
   *
   * @default 1
   *
   * @see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--rotation Storybook}
   */
  rotationMultiplier?: number;
  /**
   * Multiplier applied to all skew values
   *
   * @default 1
   *
   * @see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--skew Storybook}
   */
  skewMultiplier?: number;
  /**
   * Enables/Disables `overflow: hidden` on the tilt element
   *
   * @note Disable if you want to set up your own composition with some elements being outside the frame
   *
   * @default true
   *
   * @see {@link https://rashidshamloo.github.io/react-next-parallax/?path=/story/tilt-react-next-parallax--overflow-hidden Storybook}
   */
  overflowHiddenEnable?: boolean;
}

export interface ParallaxElement {
  element: HTMLElement;
  transformInitial: string;
  offset?: number;
  opacityInitial?: number;
  opacityStart?: number;
  opacityEnd?: number;
  rotationInitial?: number;
  rotationStart?: number;
  rotationEnd?: number;
  scaleInitial?: number;
  scaleStart?: number;
  scaleEnd?: number;
  skewInitial?: number;
  skewStart?: number;
  skewEnd?: number;
}
