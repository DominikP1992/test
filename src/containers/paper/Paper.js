import React, { PureComponent } from 'react';
import PaperView from '../../components/paper/PaperView';
import PaperLogic from './PaperLogic';
// import paperScript from './paperScript';

class Paper extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <PaperView />
        <PaperLogic />
      </div>
    );
  }
}

Paper.propTypes = {};

export default Paper;
