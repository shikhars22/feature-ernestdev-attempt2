"use client";
import { DataTable } from "@/components/datatable";
import { suplierEvaluation, supplierEvaluationType } from "@/data/projects";
import { ColumnDef } from "@tanstack/react-table";
import { PencilLine } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface Props {}
const RatingSummary: FC<Props> = ({}) => {
	const supplierColumn: ColumnDef<supplierEvaluationType>[] = [
		{
			accessorKey: "name",
			header: () => {
				return (
					<div className="font-[700] text-[14px] text-[#8A8A8A]">
						Supplier Name
					</div>
				);
			},
			cell: ({ row }) => {
				const data = row.original;
				return (
					<div className="font-[600] text-[14px] text-[#3B3C41]">
						{data.name}
					</div>
				);
			},
		},

		{
			accessorKey: "average_annual_rd",
			header: () => {
				return (
					<div className="font-[700] text-[14px] text-[#8A8A8A]">
						Sum of ratings
					</div>
				);
			},
			cell: ({ row }) => {
				const data = row.original;

				const {
					company_size,
					average_annual_rd,
					critical_parts,
					location,
					non_critical_parts,
					on_time_delivery,
					order_fulfillment_rate,
					revenue,
					supplier_health,
				} = data;
				const sumTotal =
					Number(company_size) +
					Number(average_annual_rd) +
					Number(critical_parts) +
					Number(location) +
					Number(non_critical_parts) +
					Number(on_time_delivery) +
					Number(order_fulfillment_rate) +
					Number(revenue) +
					Number(supplier_health);

				return (
					<div className="font-[400] text-[14px] text-[#3B3C41]">
						{sumTotal}
					</div>
				);
			},
		},
	];

	return (
		<div className="rounded-[12px] bg-white p-4 md:p-5 lg:p-6 xl:px-9 sm:col-span-2">
			<h1 className="pb-6 text-[20px] font-[700] text-[#121212] flex items-center justify-between">
				Supplier rating summary{" "}
				<span className="ml-3">
					{" "}
					<Link href={"/dashboard/projects/evaluate-suppliers"}>
						<PencilLine className="text-primary" strokeWidth={"1"} />
					</Link>
				</span>
			</h1>
			<hr />
			<div className="pt-6">
				<DataTable columns={supplierColumn} data={suplierEvaluation} infive />
			</div>
		</div>
	);
};

export default RatingSummary;
