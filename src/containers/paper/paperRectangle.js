import React, { PureComponent } from 'react';
import { Rectangle, Point, Path, Size } from 'paper/dist/paper-full';

class ReactRectangle extends PureComponent {
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
    this.size = new Size(100, 100);
    this.rectangleBase = new Rectangle(new Point(0, 0), this.size);
    this.rectangle = new Path.Rectangle(this.rectangleBase);
    this.rectangle.fillColor = 'blue';
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.rectangle.set({ width: 200 }));


    this.rectangle.fillColor = 'green';

  }
  componentDidMount() {
    this.setState({
      test: 'test',
    });
  }
  componentWillUnmount() {
    this.rectangleBase.remove();
    this.rectangle.remove();
  }

  render() {
    return false;
  }
}

ReactRectangle.propTypes = {};

export default ReactRectangle;
