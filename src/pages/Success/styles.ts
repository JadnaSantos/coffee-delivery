import styled from 'styled-components';

const pxToRem = (px: number, base = 16) => `${px / base}rem`;

export const SuccessContainer = styled.div`
  margin-top: ${pxToRem(80)};

  h2 {
    color: ${props => props.theme['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
  }

  > p {
    color: ${props => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 130%;
  }

  @media (max-width: 768px) {
    h2,
    > p {
      text-align: center;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    margin-top: ${pxToRem(40)};
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    @media (max-width: 425px) {
      img {
        width: 80%;
        height: 80%;
        margin-top: 2rem;
      }
    }

    > div {
      padding: ${pxToRem(40)};
      border-radius: 6px 36px;
      background-color: ${props => props.theme.background};
      position: relative;
      min-width: ${pxToRem(526)};
      display: flex;
      flex-direction: column;
      gap: 2rem;

      @media (max-width: 425px) {
        min-width: 100%;
      }

      &::before {
        content: '';
        position: absolute;
        inset: -1px;
        border-radius: 7px 37px;
        z-index: -1;
        background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
      }

      > div {
        display: flex;
        align-items: center;
        column-gap: 0.75rem;

        div {
          p {
            color: ${props => props.theme['base-text']};
            line-height: 130%;
          }
        }

        .bold {
          font-weight: 700;
        }
      }
    }
  }
`;

interface SuccessColors {
  color: 'purple' | 'yellow' | 'yellow-dark';
}

export const SuccessDetails = styled.div<SuccessColors>`
  display: flex;
  align-items: center;
  height: fit-content;
  padding: 0.5rem;
  border-radius: 100px;
  background-color: ${props => props.theme[props.color]};
`;
