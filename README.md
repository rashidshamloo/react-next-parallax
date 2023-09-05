<h1 align="center">
   <b>
        React Next Parallax<br>
    </b>
</h1>

<p align="center">A Performant Customizable React Component Providing the Parallax Effect</p>

<p align="center">
    <a href="https://rashidshamloo.github.io/react-next-parallax_demo"><b>Main Demo</b></a> •
    <a href="https://rashidshamloo.github.io/react-next-parallax_demo/attributes"><b>Attributes Demo</b></a> •
    <a href="https://rashidshamloo.github.io/react-next-parallax_demo/control-element"><b>Control Element Demo</b></a> •
    <a href="https://rashidshamloo.github.io/react-next-parallax/?path=/docs/parallax-react-next-parallax--docs"><b>Storybook</b></a>
</p>

<div align="center">

[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=react-next-parallax&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=react-next-parallax)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-next-parallax?style=flat-square)](https://bundlephobia.com/package/react-next-parallax@latest)
[![npm downloads](https://img.shields.io/npm/dm/react-next-parallax.svg?style=flat-square)](https://npm-stat.com/charts.html?package=react-next-parallax)
[![Known Vulnerabilities](https://snyk.io/test/npm/react-next-parallax/badge.svg)](https://snyk.io/test/npm/react-next-parallax)

</div>

<div align="center">
   <img src="./demo.webp" alt="React Next Parallax Demo Image" aria-hidden="true" />
</div>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Attributes](#attributes)
- [Props](#props)
- [Default Values](#default-values)
- [Events/Callbacks](#eventscallbacks)
- [Ref](#ref)
- [Credits](#credits)
- [Author](#author)
- [License](#license)

## Features

- Easy to use
- Highly customizable
- Built with performance in mind
- Built from the ground up using React Hooks/TypeScript (is not a port of another library)
- Minimum amount of component re-renders
- Typed props with JSDoc descriptions
- Tested extensively using Cypress/Storybook
- Plus all of the features of <a href="https://www.npmjs.com/package/react-next-tilt#features">react-next-tilt</a> like:
  - Touch and Gyroscope Support
  - Two customizable glare effects (spot/line)
  - Scale on Hover/Touch
  - Shadow on Hover/Touch
  - Disable Scroll on Touch
  - Full-Page Listening
  - Control Element
  - and more

## Installation

```bash
$ npm install react-next-parallax
```

Once the package is installed, you can `import` the component:

```js
import { Parallax } from 'react-next-parallax';
```

## Usage

### 1. Set up your scene (HTML/CSS)

For multi-layer images, separate each layer into an individual image and put them inside a container so that they are stacked on top of each other. (usually with a `position:relative` container and `position:absolute` images)

Simplified example using Tailwind:

```html
<div className="relative w-[800px] h-[600px] [&>img]:absolute [&>img]:inset-0">
  <img src="image1.jpg" />
  <img src="image2.jpg" />
  <img src="image3.jpg" />
</div>
```

### 2. Add the desired `data-parallax-...` attribute

Add the desired [attribute](#attributes) to the images or any other element you want the effect to be applied to. (You can check the [Attributes Demo](https://rashidshamloo.github.io/react-next-parallax_demo/attributes) to learn more about each attribute)

```js
<div className="relative w-[800px] h-[600px] [&>img]:absolute [&>img]:inset-0">
  <img src="image1.jpg" data-parallax-offset="-5" />
  <img src="image2.jpg" />
  <img src="image3.jpg" data-parallax-offset="5" />
</div>
```

### 3. Place your elements inside `<Parallax></Parallax>`

Place the elements/components you want to have the parallax effect inside `<Parallax></Parallax>`

Example:

```js
<Parallax>
  <div className="relative w-[800px] h-[600px] [&>img]:absolute [&>img]:inset-0">
    <img src="image1.jpg" data-parallax-offset="-5" />
    <img src="image2.jpg" />
    <img src="image3.jpg" data-parallax-offset="5" />
  </div>
</Parallax>
```

### 4. Make the required adjustments

- You may want to change the size of the images depending on the values chosen for the `data-parallax-offset` so the edges are not visible when tilted to extreme angles.
- You can also change the props like `animationMode` and `offsetMultiplier` to achieve the exact effect you want.

> You can use all of the props of [`react-next-tilt`](https://www.npmjs.com/package/react-next-tilt#props) for customization as well.

Example:

```js
<Parallax offsetMultiplier={2} scale={1.2}>
  <div className="relative w-[800px] h-[600px] [&>img]:absolute [&>img]:inset-0">
    <img src="image1.jpg" data-parallax-offset="-5" />
    <img src="image2.jpg" />
    <img src="image3.jpg" data-parallax-offset="5" />
  </div>
</Parallax>
```

## Attributes

> - All attributes are optional
> - You can use multiple attributes at the same time.
> - You can use transform functions at the same time as using an attribute. each attribute only overwrites its own transform function not the whole transform.
> - If you want to apply animations to an element and the properties you want to animate overlap with the transform function used by the attribute, you can:
>   - Use the separate properties for animation instead. (e.g. [`translate`](https://developer.mozilla.org/en-US/docs/Web/CSS/translate) property instead of [`transform: translate()`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate) function)
>   - Put the element inside a container/parent element and animate it instead.
> - To reverse the animation direction of attributes that take two numbers as input, you can either swap the start and end numbers (`"start;end"` → `"end;start"`) or use the `animationReverse` prop.
> - You can change the animation mode for `data-parallax-...="x;y"` attributes using the animationMode prop.
> - You can use the specific multiplier prop for each attribute to easily adjust the values after setting them up.
> - You can check the [Attributes Demo](https://rashidshamloo.github.io/react-next-parallax_demo/attributes) to learn more about each attribute.

<table aria-hidden="false"><thead><tr><th><span>Name</span></th><th><span>Description</span></th><th><span>Value Represents</span></th><th><span>Transform functions overwritten</span></th><th><span>Demo</span></th></tr></thead><tbody><tr><td><span>data-parallax-offset="±number"</span></td><td><div><span>Moves (translates) the element based on the tilt angle.</span></div><div><span>Elements with positive numbers will appear to be in the front and elements with negative numbers will appear to be in the back.</span></div><div><span>Higher numbers increase the amount of movement.</span></div></td><td><span>Percentage of the element's size</span></td><td><code>translate()</code> <code>translateX()</code> <code>translateY()</code> <code>translate3d()</code></td><td><span><a href="https://rashidshamloo.github.io/react-next-parallax_demo/attributes/offset" target="_blank">Offset Demo</a></span></td></tr><tr><td><span>data-parallax-opacity="start;end"</span></td><td><div><span>Changes the opacity of the element based on the tilt angle.</span></div></td><td><span>Opacity of the element</span></td><td><code>none (opacity property)</code></td><td><span><a href="https://rashidshamloo.github.io/react-next-parallax_demo/attributes/opacity" target="_blank">Opacity Demo</a></span></td></tr><tr><td><span>data-parallax-scale="start;end"</span></td><td><div><span>Changes the scale of the element based on the tilt angle.</span></div></td><td><span>Scale of the element</span></td><td><code>scale()</code> <code>scaleX()</code> <code>scaleY()</code> <code>scale3d()</code></td><td><span><a href="https://rashidshamloo.github.io/react-next-parallax_demo/attributes/scale" target="_blank">Scale Demo</a></span></td></tr><tr><td><span>data-parallax-rotation="start;end"</span></td><td><div><span>Changes the rotation of the element based on the tilt angle.</span></div></td><td><span>Rotation angle of the element in degrees</span></td><td><code>rotate()</code> <code>rotateZ()</code> <code>rotate3d()</code></td><td><span><a href="https://rashidshamloo.github.io/react-next-parallax_demo/attributes/rotation" target="_blank">Rotation Demo</a></span></td></tr><tr><td><span>data-parallax-skew="start;end"</span></td><td><div><span>Changes the skew angle of the element based on the tilt angle.</span></div></td><td><span>Skew angle of the element in degrees</span></td><td><code>skew()</code> <code>skewX()</code> <code>skewY()</code> <code>skew3d()</code></td><td><span><a href="https://rashidshamloo.github.io/react-next-parallax_demo/attributes/skew" target="_blank">Skew Demo</a></span></td></tr></tbody></table>

## Props

> All props are optional

> In addition to these props, you can use:
>
> - Any of the [`react-next-tilt`](https://www.npmjs.com/package/react-next-tilt#props) props like `scale`, `disableScrollOnTouch`, `controlElement`, etc.
> - Any valid `HTMLDivElement` props like `className=''`, `data-...='...'`, `onMouseMove={...}` etc. they will be applied to the container element.

<table><thead><tr><th><span>Name</span></th><th><span>Description</span></th><th><span>Default</span></th></tr></thead><tbody><tr><td><span>animationMode</span></td><td><div><div><p>Determines the animation mode when animating <code>data-parallax-...="x;y"</code> attributes</p><p><code>center-to-edge</code>: the value will be <code>x</code> at the center and change towards <code>y</code> relative to the distance from the center on all sides. | initial value = <code>x</code></p><p><code>edge-to-edge-x</code>: the value will be <code>x</code> at the left edge and <code>y</code> at the right edge. | initial value = <code>x + (x - y / 2)</code>
</p><p><code>edge-to-edge-y</code>: the value will be <code>x</code> at the top edge and <code>y</code> at the bottom edge. | initial value = <code>x + (x - y / 2)</code></p><p><code>edge-to-edge-both</code>: the value will be <code>x</code> at the top left corner and <code>y</code> at the bottom right corner. | initial value = <code>x + (x - y / 2)</code></p></div></div><div><div><code><span>"center-to-edge"</span> | <span>"edge-to-edge-x"</span> | <span>"edge-to-edge-y"</span> | <span>"edge-to-edge-both"</span></code></div></div></td><td><div><span>"center-to-edge"</span></div></td></tr><tr><td><span>animationReverse</span></td><td><div><div><p>Reverses the animation direction for the specified attribute</p><p><code>'none'</code> : doesn't modify the direction</p><p><code>'all'</code> : reverses direction for all attributes
</p><p><code>'all-except-offset'</code> : reverses direction for all attributes except <code>data-parallax-offset</code>
</p><p><code>'offset'</code> : reverses direction for the <code>data-parallax-offset</code> attribute
</p><p><code>'opacity'</code> : reverses direction for the <code>data-parallax-opacity</code> attribute
</p><p><code>'scale'</code> : reverses direction for the <code>data-parallax-scale</code> attribute
</p><p><code>'rotation'</code> : reverses direction for the <code>data-parallax-rotation</code> attribute
</p><p><code>'skew'</code> : reverses direction for the <code>data-parallax-skew</code> attribute</p></div></div><div><div><code><span>"all"</span> | <span>"all-except-offset"</span> | <span>"offset"</span> | <span>"opacity"</span> | <span>"scale"</span> | <span>"rotation"</span> | <span>"skew"</span> | <span>"none"</span></div></div></td><td><div><span>"none"</span></code></div></td></tr><tr><td><span>offsetMultiplier</span></td><td><div><span>Multiplier applied to all offset values</span></div><div><div><code><span>number</span></code></div></div></td><td><div><span>1</span></div></td></tr><tr><td><span>opacityMultiplier</span></td><td><div><span>Multiplier applied to all opacity values</span></div><div><div><code><span>number</span></code></div></div></td><td><div><span>1</span></div></td></tr><tr><td><span>scaleMultiplier</span></td><td><div><span>Multiplier applied to all scale values</span></div><div><div><code><span>number</span></code></div></div></td><td><div><span>1</span></div></td></tr><tr><td><span>rotationMultiplier</span></td><td><div><span>Multiplier applied to all rotation values</span></div><div><div><code><span>number</span></code></div></div></td><td><div><span>1</span></div></td></tr><tr><td><span>skewMultiplier</span></td><td><div><span>Multiplier applied to all skew values</span></div><div><div><code><span>number</span></code></div></div></td><td><div><span>1</span></div></td></tr><tr><td><span>overflowHiddenEnable</span></td><td><div><span>Enables/Disables <code>overflow: hidden</code> on the tilt element</span></div><div><span>Note: Disable if you want to set up your own composition with some elements being outside the frame.</span></div><div><div><code><span>boolean</span></code></div></div></td><td><div><span>true</span></div></td></tr></tbody></table>

## Default Values

This component modifies the default values of some of [`react-next-tilt`](https://www.npmjs.com/package/react-next-tilt#props) props to better match the provided effect. The list of the modified props and their default values are as follows:

<table><thead><tr><th><span>Name</span></th><th><span>Default</span></th></tr></thead><tbody><tr><td><span>perspective</span></td><td><span>"1200px"</span></td></tr><tr><td><span>scale</span></td><td><span>1.05</span></td></tr><tr><td><span>shadowEnable</span></td><td><span>true</span></td></tr><tr><td><span>shadow</span></td><td><span>"0 0 1.5rem rgba(0, 0, 0, 0.5)"</span></td></tr><tr><td><span>CSSTransition</span></td><td><span>"all 0.3s ease-out"</span></td></tr><tr><td><span>spotGlarePosition</span></td><td><span>"all"</span></td></tr><tr><td><span>spotGlareSizePercent</span></td><td><span>100</span></td></tr></tbody></table>

## Events/Callbacks

This component has the same events/callbacks as [`react-next-tilt`](https://www.npmjs.com/package/react-next-tilt#eventscallbacks).

## Ref

This component's ref object contains the same properties and works the same way as [`react-next-tilt`](https://www.npmjs.com/package/react-next-tilt#ref)'s ref.

## Credits

Images used in demos are by [Yuliya Pauliukevich](https://www.vecteezy.com/members/klyaksun) on [vecteezy.com](https://www.vecteezy.com/)

Inspired by [atropos.js](https://atroposjs.com/)

## Author

Rashid Shamloo (<a href="https://github.com/rashidshamloo/">github.com/rashidshamloo</a>)

## License

[MIT](LICENSE)
