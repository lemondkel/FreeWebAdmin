/*
 * Created by dkel on 2018-06-09.
 */
import React, {Component} from "react";
import LeftMenuItem from "./layout-components/LeftMenuItem";

class LeftMenu extends Component {
	render() {
		return (
			<section className="left">
				<ul className="left-menu">
					<LeftMenuItem name="Cleanings"/>
					<LeftMenuItem name="Need To Be Approved"/>
					<LeftMenuItem name="Customer"/>
					<LeftMenuItem name="Consultant"/>
					<LeftMenuItem name="Trainee"/>
					<LeftMenuItem name="Transaction"/>
					<LeftMenuItem name="Point"/>
					<LeftMenuItem name="Incentive / Penalty"/>
					<LeftMenuItem name="Refund"/>
					<LeftMenuItem name="Statistics"/>
					<LeftMenuItem name="Chat"/>
					<LeftMenuItem name="Others"/>
					<LeftMenuItem name="Admin"/>
				</ul>
			</section>
		)
	}
}

export default LeftMenu