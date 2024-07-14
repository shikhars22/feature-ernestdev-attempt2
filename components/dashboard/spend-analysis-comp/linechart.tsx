"use client";
import { FC } from "react";
import {
	Line,
	LineChart,
	Tooltip,
	XAxis,
	YAxis,
	ResponsiveContainer,
	CartesianGrid,
} from "recharts";

interface props {}
const Linechat: FC<props> = ({}) => {
	const rangeData = [
		{
			name: "jan",
			amount: 40000000,
		},
		{
			name: "Feb",
			amount: 20000000,
		},
		{
			name: "Mar",
			amount: 15000000,
		},
		{
			name: "Apr",
			amount: 25000000,
		},
		{
			name: "May",
			amount: 30000000,
		},
		{
			name: "Jun",
			amount: 30000000,
		},
		{
			name: "Jul",
			amount: 20000000,
		},
		{
			name: "Aug",
			amount: 35000000,
		},
		{
			name: "Sep",
			amount: 25000000,
		},
		{
			name: "Oct",
			amount: 30000000,
		},
		{
			name: "Nov",
			amount: 35000000,
		},
		{
			name: "Dec",
			amount: 35000000,
		},
	];
	const tickFormater = (number: number) => {
		if (number > 1000000000) {
			return (number / 1000000000).toString() + "B";
		} else if (number > 1000000) {
			return (number / 1000000).toString() + "M";
		} else if (number > 1000) {
			return (number / 1000).toString() + "K";
		} else {
			return number.toString();
		}
	};

	return (
		<div className="h-[350px] w-full bg-white rounded-[12px]">
			<ResponsiveContainer width={"100%"} height={"100%"}>
				<LineChart
					data={rangeData}
					margin={{ top: 5, bottom: 30, right: 40, left: 15 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						dataKey="name"
						tick={{ fill: "#BFBFBF", fontSize: "14px" }}
						stroke="#BFBFBF"
					/>
					<YAxis
						stroke="#BFBFBF"
						tick={{ fill: "#BFBFBF", fontSize: "15px" }}
						dataKey={"amount"}
						tickFormatter={(value) =>
							new Intl.NumberFormat("en-US", {
								notation: "compact",
								compactDisplay: "short",
							}).format(value)
						}
					/>
					<Tooltip />
					<Line
						dataKey="amount"
						stroke="#6649B6"
						strokeWidth={1.5}
						type={"linear"}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Linechat;
