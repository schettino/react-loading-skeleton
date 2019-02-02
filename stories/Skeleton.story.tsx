import * as React from 'react';
import { storiesOf } from '@storybook/react';
import SideBySide from './SideBySide';
import Skeleton, { SkeletonTheme } from '../src';

const Box: React.FC = ({ children }) => (
  <a
    style={{
      border: '1px solid #ccc',
      display: 'block',
      fontSize: 16,
      lineHeight: 2,
      padding: 20,
      marginBottom: 10,
      width: 100,
    }}
  >
    {children}
  </a>
);

storiesOf('Skeleton', module)
  .add('with wrapper', () => (
    <SideBySide>
      <Skeleton count={5} wrapper={Box} />
      <div>
        <Box key={1}>A</Box>
        <Box key={2}>B</Box>
        <Box key={3}>C</Box>
        <Box key={4}>D</Box>
      </div>
    </SideBySide>
  ))
  .add('with wrapper and theme', () => (
    <SideBySide>
      <SkeletonTheme color="#333" highlightColor="#666">
        <Skeleton count={5} wrapper={Box} />
      </SkeletonTheme>
      <div>
        <Box key={1}>A</Box>
        <Box key={2}>B</Box>
      </div>
    </SideBySide>
  ))
  .add('with different durations', () => (
    <div>
      <Skeleton count={1} duration={1} />
      <Skeleton count={1} duration={2} />
      <Skeleton count={1} duration={3} />
      <Skeleton count={1} duration={4} />
    </div>
  ))
  .add('with different widths', () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Skeleton count={1} />
      <Skeleton count={1} width={50} />
      <Skeleton count={1} width={100} />
      <Skeleton count={1} width={200} />
    </div>
  ))
  .add('with different heights', () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Skeleton count={1} />
      <Skeleton count={1} height={200} />
      <Skeleton count={1} height={400} />
      <Skeleton count={1} height={600} />
    </div>
  ))
  .add('Skeleton displayed as circle', () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Skeleton count={1} height={50} width={50} circle={true} />
    </div>
  ));
