/*
 * Created by dkel on 2018-06-09.
 */
import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import DataTables from '../DataTables';

class Contents extends Component {

	constructor(props){
		super(props);
	}

	// 이곳이 라우터에 의해 바뀌는 곳
	render() {
		return (
			<Switch>
				<Route exact path="/" render={(props) => (
					<DataTables {...props} tableName='Cleanings' currentMenu={this.props.currentMenu}/>
				)}/>
				<Route exact path="/2" render={(props) => (
					<DataTables {...props} tableName='Need_To_Be_Approved' currentMenu={this.props.currentMenu}/>
				)}/>
			</Switch>
		);
	}
}

export default Contents;
