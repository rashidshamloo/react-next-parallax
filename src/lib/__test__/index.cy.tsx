// mock parallax
import MockParallax from './MockParallax';

// types
const position: Record<string, { clientX: number; clientY: number }> = {
  topLeft: { clientX: 50, clientY: 50 },
  top: { clientX: 250, clientY: 50 },
  topRight: { clientX: 450, clientY: 50 },
  right: { clientX: 450, clientY: 250 },
  bottomRight: { clientX: 450, clientY: 450 },
  bottom: { clientX: 250, clientY: 450 },
  bottomLeft: { clientX: 50, clientY: 450 },
  left: { clientX: 50, clientY: 250 },
  center: { clientX: 250, clientY: 250 },
};

describe('<FlipTilt />', () => {
  it('Testing if component renders correctly', () => {
    cy.mount(<MockParallax />);
    cy.get('[data-testid="test-image"]').should('exist');
    cy.get('[data-testid="parallax-element"]').should('exist');
  });
  describe('Testing different attributes', () => {
    describe('Testing the "data-parallax-offset" attribute', () => {
      it('Testing with data-parallax-offset="5" and pointer at left, style should contain "translate(-5%, 0%)"', () => {
        cy.mount(<MockParallax attributes={{ 'data-parallax-offset': '5' }} />);
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.left)
          .trigger('mousemove', position.left);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'translate(-5%, 0%)');
      });
      it('Testing with data-parallax-offset="5" and pointer at right, style should contain "translate(5%, 0%)"', () => {
        cy.mount(<MockParallax attributes={{ 'data-parallax-offset': '5' }} />);
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.right)
          .trigger('mousemove', position.right);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'translate(5%, 0%)');
      });
      it('Testing with data-parallax-offset="5" and pointer at top, style should contain "translate(0%, -5%)"', () => {
        cy.mount(<MockParallax attributes={{ 'data-parallax-offset': '5' }} />);
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.top)
          .trigger('mousemove', position.top);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'translate(0%, -5%)');
      });
      it('Testing with data-parallax-offset="5" and pointer at bottom, style should contain "translate(0%, 5%)"', () => {
        cy.mount(<MockParallax attributes={{ 'data-parallax-offset': '5' }} />);
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.bottom)
          .trigger('mousemove', position.bottom);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'translate(0%, 5%)');
      });
    });

    describe('Testing the "data-parallax-opacity" attribute', () => {
      it('Testing with data-parallax-opacity="0;1" and pointer at left, style should contain "opacity: 0"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-opacity': '0;1' }}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.left)
          .trigger('mousemove', position.left);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'opacity: 0;');
      });
      it('Testing with data-parallax-opacity="0;1" and pointer at right, style should contain "opacity: 1"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-opacity': '0;1' }}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.right)
          .trigger('mousemove', position.right);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'opacity: 1;');
      });
      it('Testing with data-parallax-opacity="0;1" and pointer at top, style should contain "opacity: 0"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-opacity': '0;1' }}
            animationMode="edge-to-edge-y"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.top)
          .trigger('mousemove', position.top);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'opacity: 0;');
      });
      it('Testing with data-parallax-opacity="0;1" and pointer at bottom, style should contain "opacity: 1"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-opacity': '0;1' }}
            animationMode="edge-to-edge-y"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.bottom)
          .trigger('mousemove', position.bottom);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'opacity: 1;');
      });
    });

    describe('Testing the "data-parallax-scale" attribute', () => {
      it('Testing with data-parallax-scale="0;1" and pointer at left, style should contain "scale(0)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.left)
          .trigger('mousemove', position.left);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(0)');
      });
      it('Testing with data-parallax-scale="0;1" and pointer at right, style should contain "scale(1)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.right)
          .trigger('mousemove', position.right);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(1)');
      });
      it('Testing with data-parallax-scale="0;1" and pointer at top, style should contain "scale(0)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="edge-to-edge-y"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.top)
          .trigger('mousemove', position.top);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(0)');
      });
      it('Testing with data-parallax-scale="0;1" and pointer at bottom, style should contain "scale(1)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="edge-to-edge-y"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.bottom)
          .trigger('mousemove', position.bottom);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(1)');
      });
    });

    describe('Testing the "data-parallax-rotation" attribute', () => {
      it('Testing with data-parallax-rotation="0;45" and pointer at left, style should contain "rotate(0deg)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-rotation': '0;45' }}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.left)
          .trigger('mousemove', position.left);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'rotate(0deg)');
      });
      it('Testing with data-parallax-rotation="0;45" and pointer at right, style should contain "rotate(45deg)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-rotation': '0;45' }}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.right)
          .trigger('mousemove', position.right);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'rotate(45deg)');
      });
      it('Testing with data-parallax-rotation="0;45" and pointer at top, style should contain "rotate(0deg)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-rotation': '0;45' }}
            animationMode="edge-to-edge-y"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.top)
          .trigger('mousemove', position.top);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'rotate(0deg)');
      });
      it('Testing with data-parallax-rotation="0;45" and pointer at bottom, style should contain "rotate(45deg)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-rotation': '0;45' }}
            animationMode="edge-to-edge-y"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.bottom)
          .trigger('mousemove', position.bottom);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'rotate(45deg)');
      });
    });

    describe('Testing the "data-parallax-skew" attribute', () => {
      it('Testing with data-parallax-skew="0;15" and pointer at left, style should contain "skew(0deg, 0deg)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-skew': '0;15' }}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.left)
          .trigger('mousemove', position.left);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'skew(0deg, 0deg)');
      });
      it('Testing with data-parallax-skew="0;15" and pointer at right, style should contain "skew(15deg, 15deg)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-skew': '0;15' }}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.right)
          .trigger('mousemove', position.right);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'skew(15deg, 15deg)');
      });
      it('Testing with data-parallax-skew="0;15" and pointer at top, style should contain "skew(0deg, 0deg)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-skew': '0;15' }}
            animationMode="edge-to-edge-y"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.top)
          .trigger('mousemove', position.top);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'skew(0deg, 0deg)');
      });
      it('Testing with data-parallax-skew="0;15" and pointer at bottom, style should contain "skew(15deg, 15deg)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-skew': '0;15' }}
            animationMode="edge-to-edge-y"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.bottom)
          .trigger('mousemove', position.bottom);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'skew(15deg, 15deg)');
      });
    });
  });
});

describe('Testing different attributes with animationReverse="all"', () => {
  describe('Testing the "data-parallax-offset" attribute', () => {
    it('Testing with data-parallax-offset="5" and pointer at left, style should contain "translate(5%, 0%)"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-offset': '5' }}
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.left)
        .trigger('mousemove', position.left);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'translate(5%, 0%)');
    });
    it('Testing with data-parallax-offset="5" and pointer at right, style should contain "translate(-5%, 0%)"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-offset': '5' }}
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.right)
        .trigger('mousemove', position.right);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'translate(-5%, 0%)');
    });
    it('Testing with data-parallax-offset="5" and pointer at top, style should contain "translate(0%, 5%)"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-offset': '5' }}
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.top)
        .trigger('mousemove', position.top);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'translate(0%, 5%)');
    });
    it('Testing with data-parallax-offset="5" and pointer at bottom, style should contain "translate(0%, -5%)"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-offset': '5' }}
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.bottom)
        .trigger('mousemove', position.bottom);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'translate(0%, -5%)');
    });
  });

  describe('Testing the "data-parallax-opacity" attribute', () => {
    it('Testing with data-parallax-opacity="0;1" and pointer at left, style should contain "opacity: 1"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-opacity': '0;1' }}
          animationMode="edge-to-edge-x"
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.left)
        .trigger('mousemove', position.left);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'opacity: 1;');
    });
    it('Testing with data-parallax-opacity="0;1" and pointer at right, style should contain "opacity: 0"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-opacity': '0;1' }}
          animationMode="edge-to-edge-x"
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.right)
        .trigger('mousemove', position.right);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'opacity: 0;');
    });
    it('Testing with data-parallax-opacity="0;1" and pointer at top, style should contain "opacity: 1"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-opacity': '0;1' }}
          animationMode="edge-to-edge-y"
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.top)
        .trigger('mousemove', position.top);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'opacity: 1;');
    });
    it('Testing with data-parallax-opacity="0;1" and pointer at bottom, style should contain "opacity: 0"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-opacity': '0;1' }}
          animationMode="edge-to-edge-y"
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.bottom)
        .trigger('mousemove', position.bottom);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'opacity: 0;');
    });
  });

  describe('Testing the "data-parallax-scale" attribute', () => {
    it('Testing with data-parallax-scale="0;1" and pointer at left, style should contain "scale(1)"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-scale': '0;1' }}
          animationMode="edge-to-edge-x"
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.left)
        .trigger('mousemove', position.left);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'scale(1)');
    });
    it('Testing with data-parallax-scale="0;1" and pointer at right, style should contain "scale(0)"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-scale': '0;1' }}
          animationMode="edge-to-edge-x"
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.right)
        .trigger('mousemove', position.right);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'scale(0)');
    });
    it('Testing with data-parallax-scale="0;1" and pointer at top, style should contain "scale(1)"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-scale': '0;1' }}
          animationMode="edge-to-edge-y"
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.top)
        .trigger('mousemove', position.top);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'scale(1)');
    });
    it('Testing with data-parallax-scale="0;1" and pointer at bottom, style should contain "scale(0)"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-scale': '0;1' }}
          animationMode="edge-to-edge-y"
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.bottom)
        .trigger('mousemove', position.bottom);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'scale(0)');
    });
  });

  describe('Testing the "data-parallax-rotation" attribute', () => {
    it('Testing with data-parallax-rotation="0;45" and pointer at left, style should contain "rotate(45deg)"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-rotation': '0;45' }}
          animationMode="edge-to-edge-x"
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.left)
        .trigger('mousemove', position.left);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'rotate(45deg)');
    });
    it('Testing with data-parallax-rotation="0;45" and pointer at right, style should contain "rotate(0deg)"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-rotation': '0;45' }}
          animationMode="edge-to-edge-x"
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.right)
        .trigger('mousemove', position.right);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'rotate(0deg)');
    });
    it('Testing with data-parallax-rotation="0;45" and pointer at top, style should contain "rotate(45deg)"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-rotation': '0;45' }}
          animationMode="edge-to-edge-y"
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.top)
        .trigger('mousemove', position.top);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'rotate(45deg)');
    });
    it('Testing with data-parallax-rotation="0;45" and pointer at bottom, style should contain "rotate(0deg)"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-rotation': '0;45' }}
          animationMode="edge-to-edge-y"
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.bottom)
        .trigger('mousemove', position.bottom);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'rotate(0deg)');
    });
  });

  describe('Testing the "data-parallax-skew" attribute', () => {
    it('Testing with data-parallax-skew="0;15" and pointer at left, style should contain "skew(15deg, 15deg)"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-skew': '0;15' }}
          animationMode="edge-to-edge-x"
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.left)
        .trigger('mousemove', position.left);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'skew(15deg, 15deg)');
    });
    it('Testing with data-parallax-skew="0;15" and pointer at right, style should contain "skew(0deg, 0deg)"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-skew': '0;15' }}
          animationMode="edge-to-edge-x"
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.right)
        .trigger('mousemove', position.right);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'skew(0deg, 0deg)');
    });
    it('Testing with data-parallax-skew="0;15" and pointer at top, style should contain "skew(15deg, 15deg)"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-skew': '0;15' }}
          animationMode="edge-to-edge-y"
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.top)
        .trigger('mousemove', position.top);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'skew(15deg, 15deg)');
    });
    it('Testing with data-parallax-skew="0;15" and pointer at bottom, style should contain "skew(0deg, 0deg)"', () => {
      cy.mount(
        <MockParallax
          animationReverse="all"
          attributes={{ 'data-parallax-skew': '0;15' }}
          animationMode="edge-to-edge-y"
        />
      );
      cy.get('[data-testid="container"]')
        .trigger('mouseenter', position.bottom)
        .trigger('mousemove', position.bottom);
      cy.get('[data-testid="parallax-element"]')
        .should('have.attr', 'style')
        .should('contain', 'skew(0deg, 0deg)');
    });
  });

  describe('Testing the "animationMode" prop"', () => {
    describe('Testing the animationMode="center-to-edge"', () => {
      it('Testing with data-parallax-scale="0;1" and pointer at left, style should contain "scale(1)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="center-to-edge"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.left)
          .trigger('mousemove', position.left);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(1)');
      });
      it('Testing with data-parallax-scale="0;1" and pointer at right, style should contain "scale(1)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="center-to-edge"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.right)
          .trigger('mousemove', position.right);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(1)');
      });
      it('Testing with data-parallax-scale="0;1" and pointer at top, style should contain "scale(1)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="center-to-edge"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.top)
          .trigger('mousemove', position.top);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(1)');
      });
      it('Testing with data-parallax-scale="0;1" and pointer at bottom, style should contain "scale(1)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="center-to-edge"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.bottom)
          .trigger('mousemove', position.bottom);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(1)');
      });
    });

    describe('Testing the animationMode="edge-to-edge-x"', () => {
      it('Testing with data-parallax-scale="0;1" and pointer at left, style should contain "scale(0)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.left)
          .trigger('mousemove', position.left);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(0)');
      });
      it('Testing with data-parallax-scale="0;1" and pointer at right, style should contain "scale(1)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.right)
          .trigger('mousemove', position.right);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(1)');
      });
      it('Testing with data-parallax-scale="0;1" and pointer at top, style should contain "scale(0.5)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.top)
          .trigger('mousemove', position.top);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(0.5)');
      });
      it('Testing with data-parallax-scale="0;1" and pointer at bottom, style should contain "scale(0.5)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.bottom)
          .trigger('mousemove', position.bottom);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(0.5)');
      });
    });

    describe('Testing the animationMode="edge-to-edge-y"', () => {
      it('Testing with data-parallax-scale="0;1" and pointer at left, style should contain "scale(0.5)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="edge-to-edge-y"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.left)
          .trigger('mousemove', position.left);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(0.5)');
      });
      it('Testing with data-parallax-scale="0;1" and pointer at right, style should contain "scale(0.5)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="edge-to-edge-y"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.right)
          .trigger('mousemove', position.right);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(0.5)');
      });
      it('Testing with data-parallax-scale="0;1" and pointer at top, style should contain "scale(0)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="edge-to-edge-y"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.top)
          .trigger('mousemove', position.top);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(0)');
      });
      it('Testing with data-parallax-scale="0;1" and pointer at bottom, style should contain "scale(1)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="edge-to-edge-y"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.bottom)
          .trigger('mousemove', position.bottom);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(1)');
      });
    });

    describe('Testing the animationMode="edge-to-edge-both"', () => {
      it('Testing with data-parallax-scale="0;1" and pointer at left, style should contain "scale(0.25)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="edge-to-edge-both"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.left)
          .trigger('mousemove', position.left);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(0.25)');
      });
      it('Testing with data-parallax-scale="0;1" and pointer at right, style should contain "scale(0.75)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="edge-to-edge-both"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.right)
          .trigger('mousemove', position.right);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(0.75)');
      });
      it('Testing with data-parallax-scale="0;1" and pointer at top, style should contain "scale(0.25)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="edge-to-edge-both"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.top)
          .trigger('mousemove', position.top);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(0.25)');
      });
      it('Testing with data-parallax-scale="0;1" and pointer at bottom, style should contain "scale(0.75)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="edge-to-edge-both"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.bottom)
          .trigger('mousemove', position.bottom);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(0.75)');
      });
      it('Testing with data-parallax-scale="0;1" and pointer at top left, style should contain "scale(0)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="edge-to-edge-both"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.topLeft)
          .trigger('mousemove', position.topLeft);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(0)');
      });
      it('Testing with data-parallax-scale="0;1" and pointer at bottom right, style should contain "scale(1)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0;1' }}
            animationMode="edge-to-edge-both"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.bottomRight)
          .trigger('mousemove', position.bottomRight);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(1)');
      });
    });
  });

  describe('Testing multipliers', () => {
    describe('Testing the "offsetMultiplier" prop', () => {
      it('Testing with offsetMultipliers=2 and data-parallax-offset="5" and pointer at left, style should contain "translate(-10%, 0%)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-offset': '5' }}
            offsetMultiplier={2}
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.left)
          .trigger('mousemove', position.left);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'translate(-10%, 0%)');
      });
      it('Testing with offsetMultipliers=2 and data-parallax-offset="5" and pointer at right, style should contain "translate(10%, 0%)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-offset': '5' }}
            offsetMultiplier={2}
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.right)
          .trigger('mousemove', position.right);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'translate(10%, 0%)');
      });
    });

    describe('Testing the "opacityMultiplier" prop', () => {
      it('Testing with opacityMultipliers=2 and data-parallax-opacity="0.25;0.5" and pointer at left, style should contain "opacity: 0.5;"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-opacity': '0.25;0.5' }}
            opacityMultiplier={2}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.left)
          .trigger('mousemove', position.left);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'opacity: 0.5;');
      });
      it('Testing with opacityMultipliers=2 and data-parallax-opacity="0.25;0.5" and pointer at right, style should contain "opacity: 1;"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-opacity': '0.25;0.5' }}
            opacityMultiplier={2}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.right)
          .trigger('mousemove', position.right);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'opacity: 1;');
      });
    });

    describe('Testing the "scaleMultiplier" prop', () => {
      it('Testing with scaleMultipliers=2 and data-parallax-scale="0.25;0.5" and pointer at left, style should contain "scale(0.5)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0.25;0.5' }}
            scaleMultiplier={2}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.left)
          .trigger('mousemove', position.left);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(0.5)');
      });
      it('Testing with scaleMultipliers=2 and data-parallax-scale="0.25;0.5" and pointer at right, style should contain "scale(1)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-scale': '0.25;0.5' }}
            scaleMultiplier={2}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.right)
          .trigger('mousemove', position.right);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'scale(1)');
      });
    });

    describe('Testing the "rotationMultiplier" prop', () => {
      it('Testing with rotationMultipliers=2 and data-parallax-rotation="5;10" and pointer at left, style should contain "rotate(10deg)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-rotation': '5;10' }}
            rotationMultiplier={2}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.left)
          .trigger('mousemove', position.left);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'rotate(10deg)');
      });
      it('Testing with rotationMultipliers=2 and data-parallax-rotation="5;10" and pointer at right, style should contain "rotate(20deg)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-rotation': '5;10' }}
            rotationMultiplier={2}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.right)
          .trigger('mousemove', position.right);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'rotate(20deg)');
      });
    });

    describe('Testing the "skewMultiplier" prop', () => {
      it('Testing with skewMultipliers=2 and data-parallax-skew="5;10" and pointer at left, style should contain "skew(10deg, 10deg)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-skew': '5;10' }}
            skewMultiplier={2}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.left)
          .trigger('mousemove', position.left);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'skew(10deg, 10deg)');
      });
      it('Testing with skewMultipliers=2 and data-parallax-skew="5;10" and pointer at right, style should contain "skew(20deg, 20deg)"', () => {
        cy.mount(
          <MockParallax
            attributes={{ 'data-parallax-skew': '5;10' }}
            skewMultiplier={2}
            animationMode="edge-to-edge-x"
          />
        );
        cy.get('[data-testid="container"]')
          .trigger('mouseenter', position.right)
          .trigger('mousemove', position.right);
        cy.get('[data-testid="parallax-element"]')
          .should('have.attr', 'style')
          .should('contain', 'skew(20deg, 20deg)');
      });
    });
  });

  describe('Testing the "overflowHiddenEnable" prop', () => {
    it('Testing with overflowHiddenEnable=true, style should contain "overflow: hidden"', () => {
      cy.mount(<MockParallax overflowHiddenEnable={true} />);
      cy.get('[data-testid="tilt"]')
        .should('have.attr', 'style')
        .should('contain', 'overflow: hidden');
    });
    it('Testing with overflowHiddenEnable=false, style should  not contain "overflow: hidden"', () => {
      cy.mount(<MockParallax overflowHiddenEnable={false} />);
      cy.get('[data-testid="tilt"]')
        .should('have.attr', 'style')
        .should('not.contain', 'overflow: hidden');
    });
  });
});
