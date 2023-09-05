import type { Meta, StoryObj } from '@storybook/react';
import { Parallax } from '../lib/index';

const testImage = 'test.webp';

interface Attributes {
  'data-parallax-offset'?: string;
  'data-parallax-opacity'?: string;
  'data-parallax-scale'?: string;
  'data-parallax-rotation'?: string;
  'data-parallax-skew'?: string;
}

interface Layers {
  layer1: Attributes;
  layer2: Attributes;
  layer3: Attributes;
}

const Scene = ({
  layers = { layer1: {}, layer2: {}, layer3: {} },
}: {
  layers?: Layers;
}) => (
  <div style={{ position: 'relative', width: '400px', height: '400px' }}>
    <img
      src={testImage}
      alt="test image"
      style={{
        position: 'absolute',
        inset: '0',
      }}
    />
    <div
      style={{
        position: 'absolute',
        width: '75%',
        aspectRatio: '1',
        backgroundColor: 'red',
        opacity: '0.8',
        top: '50%',
        left: '50%',
        translate: '-50% -50%',
      }}
      {...layers.layer1}
    />
    <div
      style={{
        position: 'absolute',
        width: '50%',
        aspectRatio: '1',
        backgroundColor: 'green',
        opacity: '0.8',
        top: '50%',
        left: '50%',
        translate: '-50% -50%',
      }}
      {...layers.layer2}
    />
    <div
      style={{
        position: 'absolute',
        width: '25%',
        aspectRatio: '1',
        backgroundColor: 'blue',
        opacity: '0.8',
        top: '50%',
        left: '50%',
        translate: '-50% -50%',
      }}
      {...layers.layer3}
    />
  </div>
);

const meta: Meta<typeof Parallax> = {
  title: 'Parallax (react-next-parallax)',
  component: Parallax,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#333' }],
    },
    actions: { argTypesRegex: /^on(Tilt|Reset)$/ },
    docs: {
      source: { language: 'tsx' },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: { table: { disable: true } },
    onMouseEnter: { table: { disable: true } },
    onMouseMove: { table: { disable: true } },
    onMouseLeave: { table: { disable: true } },
    onTouchStart: { table: { disable: true } },
    onTouchMove: { table: { disable: true } },
    onTouchEnd: { table: { disable: true } },
    onBlur: { table: { disable: true } },
    onKeyDown: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Parallax>;

export const Default: Story = {
  args: {
    children: (
      <Scene
        layers={{
          layer1: { 'data-parallax-offset': '-10' },
          layer2: {},
          layer3: { 'data-parallax-offset': '10' },
        }}
      />
    ),
  },
};

export const Offset: Story = {
  parameters: {
    controls: {
      include: ['offsetMultiplier', 'animationReverse'],
    },
  },
  args: {
    children: (
      <Scene
        layers={{
          layer1: {
            'data-parallax-offset': '-10',
          },
          layer2: {},
          layer3: {
            'data-parallax-offset': '10',
          },
        }}
      />
    ),
    offsetMultiplier: 1,
    animationReverse: 'none',
  },
};

export const Opacity: Story = {
  parameters: {
    controls: {
      include: ['opacityMultiplier', 'animationMode', 'animationReverse'],
    },
  },
  args: {
    children: (
      <Scene
        layers={{
          layer1: { 'data-parallax-opacity': '0;1' },
          layer2: {},
          layer3: { 'data-parallax-opacity': '1;0' },
        }}
      />
    ),
    opacityMultiplier: 1,
    animationMode: 'center-to-edge',
    animationReverse: 'none',
  },
};

export const Scale: Story = {
  parameters: {
    controls: {
      include: ['scaleMultiplier', 'animationMode', 'animationReverse'],
    },
  },
  args: {
    children: (
      <Scene
        layers={{
          layer1: {},
          layer2: { 'data-parallax-scale': '0;1' },
          layer3: { 'data-parallax-scale': '1;0' },
        }}
      />
    ),
    scaleMultiplier: 1,
    animationMode: 'center-to-edge',
    animationReverse: 'none',
  },
};

export const Rotation: Story = {
  parameters: {
    controls: {
      include: ['rotationMultiplier', 'animationMode', 'animationReverse'],
    },
  },
  args: {
    children: (
      <Scene
        layers={{
          layer1: { 'data-parallax-rotation': '0;90' },
          layer2: {},
          layer3: { 'data-parallax-rotation': '90;0' },
        }}
      />
    ),
    rotationMultiplier: 1,
    animationMode: 'center-to-edge',
    animationReverse: 'none',
  },
};

export const Skew: Story = {
  parameters: {
    controls: {
      include: ['skewMultiplier', 'animationMode', 'animationReverse'],
    },
  },
  args: {
    children: (
      <Scene
        layers={{
          layer1: { 'data-parallax-skew': '0;15' },
          layer2: {},
          layer3: { 'data-parallax-skew': '15;0' },
        }}
      />
    ),
    skewMultiplier: 1,
    animationMode: 'center-to-edge',
    animationReverse: 'none',
  },
};

export const AnimationMode: Story = {
  parameters: {
    controls: {
      include: 'animationMode',
    },
  },
  args: {
    children: (
      <Scene
        layers={{
          layer1: {},
          layer2: { 'data-parallax-scale': '0;1' },
          layer3: { 'data-parallax-scale': '1;0' },
        }}
      />
    ),
    animationMode: 'center-to-edge',
  },
};

export const AnimationReverse: Story = {
  parameters: {
    controls: {
      include: ['animationReverse', 'animationMode'],
    },
  },
  args: {
    children: (
      <Scene
        layers={{
          layer1: {
            'data-parallax-offset': '-10',
            'data-parallax-skew': '0;15',
          },
          layer2: {
            'data-parallax-scale': '0;1',
          },
          layer3: {
            'data-parallax-offset': '10',
            'data-parallax-rotation': '0;90',
            'data-parallax-opacity': '0;1',
          },
        }}
      />
    ),
    animationReverse: 'all',
    animationMode: 'edge-to-edge-x',
  },
};

export const OverflowHidden: Story = {
  parameters: {
    controls: {
      include: 'overflowHidden',
    },
  },
  args: {
    children: (
      <Scene
        layers={{
          layer1: {
            'data-parallax-rotation': '0;90',
            'data-parallax-scale': '1.25;1.25',
          },
          layer2: {
            'data-parallax-rotation': '90;0',
            'data-parallax-scale': '1.5;2',
          },
          layer3: {
            'data-parallax-offset': '300',
          },
        }}
      />
    ),
    overflowHiddenEnable: true,
  },
};
