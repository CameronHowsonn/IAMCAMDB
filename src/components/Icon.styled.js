import styled from 'styled-components'

export const SVG = styled.svg`
  width: ${(props) => props.width || '25px'};
  height: ${(props) => props.height || '25px'};
  fill: ${(props) => props.fill || 'none'};
  stroke: ${(props) => props.stroke || '#FFF'};
  stroke-linecap: ${(props) => props.linecap || 'round'};
  stroke-linejoin: ${(props) => props.linejoin || 'round'};
  stroke-width: ${(props) => props.strokeWidth || 'default'};
`

export const StyledIcon = styled.div`
  .menu-btn {
    cursor: pointer;
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
`
