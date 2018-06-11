/*
 * Created by dkel on 2018-06-09.
 */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import DataTables from '../DataTables';

class Contents extends Component {
  constructor(props) {
    super(props);
  }

  // 이곳이 라우터에 의해 바뀌는 곳
  render() {
    return (
      <Switch>
        <Route exact path="/" component={DataTables} />
      </Switch>
    );
  }
}

export default Contents;
