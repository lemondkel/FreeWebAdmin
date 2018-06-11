/*
 * Created by dkel on 2018-06-09.
 */
import React, {Component} from "react";
import {DataTable} from "react-data-components";
import ColumnList from "../../columnList.json";

class Contents extends Component {

	constructor(props) {
		super(props);

	/*	this.renderMapUrl = this.renderMapUrl.bind(this);
		this.clickItem = this.clickItem.bind(this);*/
	}

	/** @namespace ColumnList.Cleanings */
	render() {
		const columns = ColumnList.Cleanings;

		const data = [
			{
				id: "gkwkdlawoh",
				name: "Lee",
				customer_id: "gkwkdlawoh",
				city: "Suwon",
				district: "Gyeonggi-do",
				detailed_address: "321-32",
				contact: "010-3227-4617",
				date: "2016-02-17",
				home_type: "APT",
				size: 70,
				customer_type: "B2B",
				cleaning_type: "정기",
				status_of_subscription: "2/17",
				tool: "with tool",
				rank_of_cleaning: 3,
				bathroom_cleaning: "O",
				kitchen_cleaning: "X",
				msc_cleaning: "X",
				window_cleaning: "X",
				balcony_cleaning: "X",
				refrigerator_cleaning: "X",
				ironing_cleaning: "X",
				ceiling_cleaning: "X",
				cleaning_status: "Not yet",
				payment_status: "paid",
				transaction_id: "01237468",
				consultant_status: "matched",
				payment: 280000,
				price: 320000,
				discount: 40000,
				used_point: 20000,
				discounted_promotion: 20000,
				promo_content: "10-Subscription(10%)",
				status_of_start: 'late',
				total_expected_duration: 6,
				expected_duration: 3,
				total_real_duration: 0,
				real_duration: 0,
				each_consultant_salary: 100000,
				total_consultant_salary: 200000,
				payment_type: 'VA',
				using_app: 'App',
				tip_for_each: 10000,
				total_tip: 20000,
				request_detail: 'Focus on bathroom',
				number_of_consultants: 2,
				consultants_name: 'Sri, Ira',
				cleaning_rate_done: 'Y',
				cleaning_rate: 4,
				cleaning_feedback1: '청소도구가 불만이에요',
				cleaning_feedback2: '진공청소기 상태가 좋아보이지 않았어요',
				insert_date: '2052018',
				bed_rooms: 1,
				bath_rooms: 1
			}, {
				id: "gkwkdlawoa",
				name: "Lee",
				customer_id: "gkwkdlawoh",
				city: "Suwon",
				district: "Gyeonggi-do",
				detailed_address: "321-32",
				contact: "010-3227-4617",
				date: "2016-02-17",
				home_type: "APT",
				size: 70,
				customer_type: "B2B",
				cleaning_type: "정기",
				status_of_subscription: "2/17",
				tool: "with tool",
				rank_of_cleaning: 3,
				bathroom_cleaning: "O",
				kitchen_cleaning: "X",
				msc_cleaning: "X",
				window_cleaning: "X",
				balcony_cleaning: "X",
				refrigerator_cleaning: "X",
				ironing_cleaning: "X",
				ceiling_cleaning: "X",
				cleaning_status: "Not yet",
				payment_status: "paid",
				transaction_id: "01237468",
				consultant_status: "matched",
				payment: 280000,
				price: 320000,
				discount: 40000,
				used_point: 20000,
				discounted_promotion: 20000,
				promo_content: "10-Subscription(10%)",
				status_of_start: 'late',
				total_expected_duration: 6,
				expected_duration: 3,
				total_real_duration: 0,
				real_duration: 0,
				each_consultant_salary: 100000,
				total_consultant_salary: 200000,
				payment_type: 'VA',
				using_app: 'App',
				tip_for_each: 10000,
				total_tip: 20000,
				request_detail: 'Focus on bathroom',
				number_of_consultants: 2,
				consultants_name: 'Sri, Ira',
				cleaning_rate_done: 'Y',
				cleaning_rate: 4,
				cleaning_feedback1: '청소도구가 불만이에요',
				cleaning_feedback2: '진공청소기 상태가 좋아보이지 않았어요',
				insert_date: '2052018',
				bed_rooms: 1,
				bath_rooms: 1
			}, {
				id: "gkwkdlawod",
				name: "Lee",
				customer_id: "gkwkdlawoh",
				city: "Suwon",
				district: "Gyeonggi-do",
				detailed_address: "321-32",
				contact: "010-3227-4617",
				date: "2016-02-17",
				home_type: "APT",
				size: 70,
				customer_type: "B2B",
				cleaning_type: "정기",
				status_of_subscription: "2/17",
				tool: "with tool",
				rank_of_cleaning: 3,
				bathroom_cleaning: "O",
				kitchen_cleaning: "X",
				msc_cleaning: "X",
				window_cleaning: "X",
				balcony_cleaning: "X",
				refrigerator_cleaning: "X",
				ironing_cleaning: "X",
				ceiling_cleaning: "X",
				cleaning_status: "Not yet",
				payment_status: "paid",
				transaction_id: "01237468",
				consultant_status: "matched",
				payment: 280000,
				price: 320000,
				discount: 40000,
				used_point: 20000,
				discounted_promotion: 20000,
				promo_content: "10-Subscription(10%)",
				status_of_start: 'late',
				total_expected_duration: 6,
				expected_duration: 3,
				total_real_duration: 0,
				real_duration: 0,
				each_consultant_salary: 100000,
				total_consultant_salary: 200000,
				payment_type: 'VA',
				using_app: 'App',
				tip_for_each: 10000,
				total_tip: 20000,
				request_detail: 'Focus on bathroom',
				number_of_consultants: 2,
				consultants_name: 'Sri, Ira',
				cleaning_rate_done: 'Y',
				cleaning_rate: 4,
				cleaning_feedback1: '청소도구가 불만이에요',
				cleaning_feedback2: '진공청소기 상태가 좋아보이지 않았어요',
				insert_date: '2052018',
				bed_rooms: 1,
				bath_rooms: 1
			}, {
				id: "l2jong",
				name: "Lee",
				customer_id: "gkwkdlawoh",
				city: "Suwon",
				district: "Gyeonggi-do",
				detailed_address: "321-32",
				contact: "010-3227-4617",
				date: "2016-02-17",
				home_type: "APT",
				size: 70,
				customer_type: "B2B",
				cleaning_type: "정기",
				status_of_subscription: "2/17",
				tool: "with tool",
				rank_of_cleaning: 3,
				bathroom_cleaning: "O",
				kitchen_cleaning: "X",
				msc_cleaning: "X",
				window_cleaning: "X",
				balcony_cleaning: "X",
				refrigerator_cleaning: "X",
				ironing_cleaning: "X",
				ceiling_cleaning: "X",
				cleaning_status: "Not yet",
				payment_status: "paid",
				transaction_id: "01237468",
				consultant_status: "matched",
				payment: 280000,
				price: 320000,
				discount: 40000,
				used_point: 20000,
				discounted_promotion: 20000,
				promo_content: "10-Subscription(10%)",
				status_of_start: 'late',
				total_expected_duration: 6,
				expected_duration: 3,
				total_real_duration: 0,
				real_duration: 0,
				each_consultant_salary: 100000,
				total_consultant_salary: 200000,
				payment_type: 'VA',
				using_app: 'App',
				tip_for_each: 10000,
				total_tip: 20000,
				request_detail: 'Focus on bathroom',
				number_of_consultants: 2,
				consultants_name: 'Sri, Ira',
				cleaning_rate_done: 'Y',
				cleaning_rate: 4,
				cleaning_feedback1: '청소도구가 불만이에요',
				cleaning_feedback2: '진공청소기 상태가 좋아보이지 않았어요',
				insert_date: '2052018',
				bed_rooms: 1,
				bath_rooms: 1
			},

			// It also supports arrays
			// [ 'name value', 'city value', 'address value', 'phone value' ]
		];

		columns[0].render = this.renderMapUrl;

		return (
			<section className="right">
				<h3 className="title">{this.props.defaultMenu}</h3>
				<DataTable
					keys={columns[0].prop}
					columns={columns}
					initialData={data}
					initialPageLength={5}
					initialSortBy={{prop: columns[0].prop, order: 'descending'}}
					table=""/>
			</section>
		)
	}
	renderMapUrl = (val, row) =>
	<a /*onClick={this.clickItem('gigigi')}*/>
		{val}
	</a>;

	/*clickItem = (value) => {
		alert(value);
	}*/
}

export default Contents