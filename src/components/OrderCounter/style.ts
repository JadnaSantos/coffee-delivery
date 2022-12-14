import styled from 'styled-components';

const pxToRem = (px: number, base = 16) => `${px / base}rem`;

interface ProductCounterContainerProps {
  height: 'small' | 'medium';
}

export const ProductCounterContainer = styled.div<ProductCounterContainerProps>`
  position: relative;
  max-width: ${pxToRem(72)};

  button {
    background-color: transparent;
    border: none;
    line-height: 0;
    cursor: pointer;
    position: absolute;
    z-index: 1;
    top: ${props => (props.height === 'small' ? '0.55rem' : '0.75rem')};

    &:hover {
      > svg {
        line {
          transition: stroke 700ms;
          stroke: ${props => props.theme['purple-dark']};
        }
      }
    }

    &:disabled {
      cursor: not-allowed;
    }

    @media (max-width: 320px) {
      svg {
        width: 10px;
        height: 10px;
      }
    }
  }

  button:first-of-type {
    left: 0.5rem;
  }

  button:last-of-type {
    right: 0.5rem;
  }

  input {
    width: 4.5rem;
    padding: 0.5rem;
    background-color: ${props => props.theme['base-button']};
    border-radius: 6px;
    border: none;
    text-align: center;
    line-height: 130%;
    height: ${props => (props.height === 'small' ? '2rem' : '2.375rem')};

    &:focus {
      box-shadow: none;
    }
  }
`;
