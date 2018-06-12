/*
 * Created by dkel on 2018-06-09.
 */
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class LeftMenu extends Component {
	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick = (val) => {
		const text = val.target.innerText;
		console.log(text);
	};

	// TODO: to에다가는 링크 URL 경로를 component에다가는 실제 들어갈 컴포넌트를 넣어주세요
	render() {
		return (
			<section className="left-layout">
				<ul className="left-menu">
					<li onClick={this.onClick}>
						<NavLink to="/" className="left-menu-item" component={''}>
							Cleanings
						</NavLink>
					</li>
					<li>
						<NavLink to="/2" className="left-menu-item" component={''}>
							Need To Be Approved
						</NavLink>
					</li>
					<li>
						<NavLink to="/" className="left-menu-item">
							Customer
						</NavLink>
					</li>
					<li>
						<NavLink to="/" className="left-menu-item">
							Consultant
						</NavLink>
					</li>
					<li>
						<NavLink to="/" className="left-menu-item">
							Trainee
						</NavLink>
					</li>
					<li>
						<NavLink to="/" className="left-menu-item">
							Transaction
						</NavLink>
					</li>
					<li>
						<NavLink to="/" className="left-menu-item">
							Point
						</NavLink>
					</li>
					<li>
						<NavLink to="/" className="left-menu-item">
							Incentive / Penalty
						</NavLink>
					</li>
					<li>
						<NavLink to="/" className="left-menu-item">
							Refund
						</NavLink>
					</li>
					<li>
						<NavLink to="/" className="left-menu-item">
							Statistics
						</NavLink>
					</li>
					<li>
						<NavLink to="/" className="left-menu-item">
							Chat
						</NavLink>
					</li>
					<li>
						<NavLink to="/" className="left-menu-item">
							Others
						</NavLink>
					</li>
					<li>
						<NavLink to="/" className="left-menu-item">
							Admin
						</NavLink>
					</li>
				</ul>
			</section>
		);
	}
}

export default LeftMenu;
