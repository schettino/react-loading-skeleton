import React, { Component } from 'react';
import Skeleton from '../src';

interface PostProps {
  title?: string;
  size?: 'small' | 'large';
}

export default class Post extends Component<PostProps> {
  static defaultProps = {
    size: 'small',
  };

  getStyle() {
    const { size } = this.props;
    const baseStyle = {
      padding: 8,
      width: '20em',
    };
    return Object.assign(baseStyle, {
      fontSize: size === 'small' ? 16 : 25,
      lineHeight: size === 'small' ? 'normal' : 2,
    });
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <h1>{this.props.title || <Skeleton />}</h1>
        <p>{this.props.children || <Skeleton count={5} />}</p>
      </div>
    );
  }
}
