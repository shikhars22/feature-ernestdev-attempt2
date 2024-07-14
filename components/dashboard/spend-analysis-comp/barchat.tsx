"use client";
import { FC } from "react";
import {
	Bar,
	BarChart,
	Tooltip,
	XAxis,
	YAxis,
	ResponsiveContainer,
	CartesianGrid,
} from "recharts";

interface props {}
const Barchat: FC<props> = ({}) => {
	const rangeData = [
		{
			name: "vendor1",
			amount: 40000000,
		},
		{
			name: "vendor2",
			amount: 20000000,
		},
		{
			name: "vendor3",
			amount: 15000000,
		},
		{
			name: "vendor4",
			amount: 25000000,
		},
		{
			name: "vendor5",
			amount: 30000000,
		},
		{
			name: "vendor6",
			amount: 20000000,
		},
		{
			name: "vendor7",
			amount: 35000000,
		},
		{
			name: "vendor8",
			amount: 25000000,
		},
		{
			name: "vendor9",
			amount: 30000000,
		},
		{
			name: "vendor10",
			amount: 35000000,
		},
	];



	const  CustomizedAxisTick = (tick:any)=> {
		const { x, y, stroke, payload } = tick
	
			return (
				<g transform={`translate(${x},${y})`}>
					<text x={0} y={0} dy={16} textAnchor="end" fill="#BFBFBF" transform="rotate(-35)" fontSize={12}>
						{payload.value}
					</text>
				</g>
			);
	}

	return (
		<div className="h-[350px] w-full bg-white rounded-[12px]">
			<ResponsiveContainer width={"100%"} height={"100%"}>
				<BarChart
					data={rangeData}
					margin={{ top: 10, bottom: 30, right: 40, left: 15 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						dataKey="name"
						tick={CustomizedAxisTick}
						stroke="#BFBFBF"
						interval={0}
						
					/>
					<YAxis
						dataKey={"amount"}
						tick={{ fill: "#BFBFBF", fontSize: "14px" }}
						tickFormatter={(value) =>
							new Intl.NumberFormat("en-US", {
								notation: "compact",
								compactDisplay: "short",
							}).format(value)
						}
						stroke="#BFBFBF"
					/>
					<Tooltip cursor={{fill: 'transparent'}} />
					<Bar
						dataKey="amount"
						fill="#8861F3"
						barSize={26}
						radius={[7, 7, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Barchat;
