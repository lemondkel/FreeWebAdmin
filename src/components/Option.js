/**
 * Created by dkel on 2018-06-09.
 */
import React, {Component} from 'react';
import {setDiff} from '../actions';

class Option extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		this.props.store.dispatch(setDiff(parseInt(event.target.value)));
	}

	render() {
		return (
			<div>
				<input type="text" value={this.props.store.getState().a.diff} onChange={this.onChange}/>
			</div>
		)
	}
}