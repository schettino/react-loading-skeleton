import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';

export const defaultBaseColor = '#eee';

export const defaultHighlightColor = '#f5f5f5';

export const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const skeletonClass = css`
  background-color: ${defaultBaseColor};
  background-image: linear-gradient(
    90deg,
    ${defaultBaseColor},
    ${defaultHighlightColor},
    ${defaultBaseColor}
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  display: inline-block;
  line-height: 1;
  width: 100%;
`;

interface SkeletonBaseProps {
  height: number;
  width: number;
  duration?: number;
  circle: boolean;
}

export const SkeletonBase = styled.span<SkeletonBaseProps>`
  ${skeletonClass};
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  ::before {
    content: ' ';
  }
  white-space: pre-wrap;
  animation: ${skeletonKeyframes} ease-in-out infinite
    ${props => props.duration}s;

  border-radius: ${props =>
    props.width !== null && props.height !== null && props.circle
      ? '50%'
      : '4px'};
`;

interface SkeletonProps extends SkeletonBaseProps {
  count: number;
  wrapper: React.ComponentType<any>;
}

export default function Skeleton(props: SkeletonProps) {
  const elements = [];
  for (let i = 0; i < props.count; i++) {
    elements.push(
      <SkeletonBase
        key={i}
        height={props.height}
        circle={props.circle}
        width={props.width}
        duration={props.duration}
      />,
    );
  }

  const Wrapper = props.wrapper;
  return (
    <span>
      {Wrapper
        ? elements.map((element, i) => <Wrapper key={i}>{element}</Wrapper>)
        : elements}
    </span>
  );
}

Skeleton.defaultProps = {
  count: 1,
  duration: 1.2,
  width: null,
  wrapper: null,
  height: null,
  circle: false,
};
