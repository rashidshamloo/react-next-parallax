import { forwardRef } from 'react';
import { Parallax } from '..';
import { ParallaxProps, ParallaxRef } from '../types/types';
import testImage from './img/test.webp';

interface Attributes {
  'data-parallax-offset'?: string;
  'data-parallax-opacity'?: string;
  'data-parallax-scale'?: string;
  'data-parallax-rotation'?: string;
  'data-parallax-skew'?: string;
}

const MockParallax = forwardRef<
  ParallaxRef,
  Partial<ParallaxProps & { attributes: Attributes }>
>((props, ref) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '484px',
      width: '100%',
    }}
  >
    <Parallax ref={ref} testIdEnable={true} {...props}>
      <div style={{ position: 'relative', width: '400px', height: '400px' }}>
        <img
          data-testid="test-image"
          src={testImage}
          alt="test image"
          style={{
            position: 'absolute',
            inset: '0',
          }}
        />
        <div
          data-testid="parallax-element"
          style={{
            position: 'absolute',
            width: '50%',
            aspectRatio: '1',
            backgroundColor: '#00ff01',
            top: '50%',
            left: '50%',
            translate: '-50% -50%',
          }}
          {...props.attributes}
        />
      </div>
    </Parallax>
  </div>
));

export default MockParallax;
