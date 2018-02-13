import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ExampleView from '../../components/example/Example';
import ExampleChild from '../../components/example/ExampleChild';

// redux actions
import * as exampleActions from '../../redux/actions/example/exampleActions';

// selectors
import {
  getStateData,
  getFilteredStateData,
} from '../../selectors/example/exampleSelector';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.exampleData,
      filteredData: this.props.exampleFilteredData,
    };
  }
  componentDidMount() {
    this.props.exampleActions.fetchExampleData();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.exampleData,
      filteredData: nextProps.exampleFilteredData,
    });
  }

  handleClick = () => {
    this.props.exampleActions.toggleExample();
  };

  render() {
    console.log(this.state.data, this.state.filteredData);
    return (
      <ExampleView>
        <ExampleChild className="example-btn" onClick={this.handleClick}>
          change global state
        </ExampleChild>
      </ExampleView>
    );
  }
}

Example.propTypes = {
  exampleData: PropTypes.arrayOf(PropTypes.string).isRequired,
  exampleFilteredData: PropTypes.arrayOf(PropTypes.string).isRequired,
  exampleActions: PropTypes.arrayOf(PropTypes.func).isRequired,
};

// connect with state, by using selectors

const mapStateToProps = state => {
  console.log(state);
  return {
    return: {
      exampleData: getStateData(state),
      exampleFilteredData: getFilteredStateData(state),
    },
  };
};

// connect with actions

const mapDispatchToProps = dispatch => ({
  exampleActions: bindActionCreators(exampleActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Example);
