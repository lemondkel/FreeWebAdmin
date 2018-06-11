/**
 * Created by dkel on 2018-06-09.
 */

import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Value : {this.props.store.getState().a.value}</h1>
      </div>
    );
  }
}

export default Counter;
