"use client";
import ReactApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const TreeMap = (

) => {
	const options: ApexOptions = {
		chart: {
			toolbar: {
				show: false,
			},
		},
		colors: ["#8861F3"],
		dataLabels: {
			enabled: true,
			style: {
				fontSize: "15px",
			},
			formatter: (text, op): any => {
				return [text, `${op.value}%`];
			},
		},
	};

	const series = [
		{
			data: [
				{
					x: "commodity name",
					y: 218,
				},
				{
					x: "commodity name",
					y: 149,
				},
				{
					x: "commodity name",
					y: 184,
				},
				{
					x: "commodity name",
					y: 55,
				},
				{
					x: "commodity name",
					y: 84,
				},
				{
					x: "commodity name",
					y: 31,
				},
				{
					x: "commodity name",
					y: 70,
				},
				{
					x: "commodity name",
					y: 30,
				},
				{
					x: "commodity name",
					y: 44,
				},
			],
		},
	];

	return (
		<div className="h-[350px] m-5 mr-0 mb-8 mt-2">
			<ReactApexCharts
				options={options}
				series={series}
				type="treemap"
				width="100%"
				height="100%"
			/>
		</div>
	);
};

export default TreeMap;
