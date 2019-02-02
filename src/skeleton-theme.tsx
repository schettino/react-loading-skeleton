import styled from 'styled-components';
import {
  defaultBaseColor,
  defaultHighlightColor,
  SkeletonBase,
} from './skeleton';

const SkeletonTheme = styled.div.attrs({
  color: defaultBaseColor,
  highlightColor: defaultHighlightColor,
})`
  ${SkeletonBase} {
    background-color: ${props => props.color};
    background-image: linear-gradient(
      90deg,
      ${props => props.color},
      ${props => props.highlightColor},
      ${props => props.color}
    );
  }
`;

export default SkeletonTheme;
