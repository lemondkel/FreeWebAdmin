/*
 * Created by dkel on 2018-06-09.
 */
import React, {Component} from "react";

class LeftMenuItem extends Component {

	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		let name = this.props.name;
		switch(name) {

		}
	}

	render() {
		return (
			<li className="left-menu-item" onClick={this.onClick}>{this.props.name}</li>
		)
	}
}

export default LeftMenuItem