import React, { PureComponent, Fragment } from 'react';
import { Rectangle, Point, Size, Path } from 'paper/dist/paper-full';

import init from './paperInit';
import Rect from './paperRectangle';

class PaperLogic extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      x: 10,
      y: 100,
      width: 100,
      height: 100,
      color: 'blue',
      name: 'myRectangle',
    };
  }
  componentDidMount() {
    init();
    this.setState({
      inited: true,
    });
  }

  render() {
    return <Fragment>{this.state.inited ? <Rect /> : false}</Fragment>;
  }
}

PaperLogic.propTypes = {};

export default PaperLogic;
