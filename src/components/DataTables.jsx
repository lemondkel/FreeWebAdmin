/*
 * Created by dkel on 2018-06-09.
 */
import React, {Component} from "react";
import axios from "axios";
// import Handsontable from 'handsontable';
// import 'handsontable/dist/handsontable.min.css'
import HotTable from "react-handsontable";

class Contents extends Component {

	state = {
		columnList: [],
		rowList: []
	};

	constructor(props) {
		super(props);

		const self = this;

		document.addEventListener("DOMContentLoaded", function () {

			axios.get('http://localhost:3001/Cleanings')
				.then(response => {
					console.log(response);

					// visible 이 true 인 칼럼만 보여준다.
					// google sheet - 주황색 표시 칼럼.
					response.data = response.data.filter(function (val) {
						return val.visible;
					});

					response.data[0].render = this.renderMapUrl;
					self.setState({
						columnList: response.data
					});

					axios.get('http://localhost:3001/_Cleanings')
						.then(response => {
							console.log(response);
							self.setState({
								rowList: response.data
							});

						}) // SUCCESS
						.catch(response => {
							console.log(response);
						}); // ERROR

					// const example1 = document.getElementById('example1');
					/*
					 new Handsontable(example1, {
					 data: data,
					 columns: self.state.columnList,
					 colHeaders: self.state.columnList,
					 dropdownMenu: true,
					 filters: true,
					 stretchH: 'all',
					 autoWrapRow: true,
					 maxRows: 10,
					 manualRowResize: true,
					 manualColumnResize: true,
					 manualRowMove: true,
					 manualColumnMove: true,
					 columnSorting: true,
					 sortIndicator: true,
					 autoColumnSize: {
					 samplingRatio: 23
					 },
					 height: "200",
					 contextMenu: true,
					 hiddenColumns: true
					 });
					 */
				}) // SUCCESS
				.catch(response => {
					console.log(response);
				}); // ERROR
		});
	}

	render() {

		const autoColumnSizeOption = {samplingRatio: 23};

		return (
			<section className="right-layout">
				<h3 className="title">{this.props.currentMenu}</h3>
				<HotTable data={this.state.rowList}
						  columns={this.state.columnList}
						  colHeaders={this.state.columnList}
						  dropdownMenu="true"
						  filters="true"
						  stretchH='all'
						  autoWrapRow="true"
						  maxRows="20"
						  manualRowResize="true"
						  manualColumnResize="true"
						  manualRowMove="true"
						  manualColumnMove="true"
						  columnSorting="true"
						  sortIndicator="true"
						  autoColumnSize={autoColumnSizeOption}
						  height="460"
						  contextMenu="true"
						  hiddenColumns="true"/>
			</section>
		);
	}

	renderMapUrl = (val, row) => (
		<a>{val}</a>
	);

}

export default Contents;