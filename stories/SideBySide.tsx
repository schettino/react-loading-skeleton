import * as React from 'react';

const style = {
  alignItems: 'flex-start',
  display: 'flex',
  justifyContent: 'center',
};

const arrowStyle = {
  alignSelf: 'center',
  fontSize: 20,
  padding: '0 20px',
};

interface SideBySideProps {
  children: React.ReactChild[];
}

export default function SideBySide(props: SideBySideProps) {
  const childrenWithArrows: React.ReactChild[] = [];
  React.Children.forEach(props.children, (child, index) => {
    if (index > 0) {
      childrenWithArrows.push(
        <div key={index} style={arrowStyle}>
          →
        </div>,
      );
    }
    childrenWithArrows.push(child);
  });
  return <div style={style}>{childrenWithArrows}</div>;
}
