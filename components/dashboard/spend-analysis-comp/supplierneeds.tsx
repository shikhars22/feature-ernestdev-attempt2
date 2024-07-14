"use client";
import { FC } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/datatable";
import { Button } from "@/components/ui/button";
import { PencilLine, SendHorizonal } from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface Props {}

export type usersTabData = {
	description: string;
	number: string;
	name: string;
	location: string;
	spend: string;
};
export const usersTabData = [
	{
		description: "Fan",
		number: "033410403",
		name: "Vendor1",
		location: "Corona, Michigan",
		spend: "$35,580.00",
	},
	{
		description: "Fan",
		number: "033410403",
		name: "Vendor1",
		location: "Corona, Michigan",
		spend: "$35,580.00",
	},
	{
		description: "Fan",
		number: "033410403",
		name: "Vendor1",
		location: "Corona, Michigan",
		spend: "$35,580.00",
	},
	{
		description: "Fan",
		number: "033410403",
		name: "Vendor1",
		location: "Corona, Michigan",
		spend: "$35,580.00",
	},
	{
		description: "Fan",
		number: "033410403",
		name: "Vendor1",
		location: "Corona, Michigan",
		spend: "$35,580.00",
	},
	{
		description: "Fan",
		number: "033410403",
		name: "Vendor1",
		location: "Corona, Michigan",
		spend: "$35,580.00",
	},
];

export const usersColumn: ColumnDef<usersTabData>[] = [
	{
		accessorKey: "description",
		header: () => {
			return (
				<div className="font-[700] text-[14px] text-[#8A8A8A]">
					Commodity description
				</div>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<div className="font-[400] text-[14px] text-[#3B3C41]">
					{data.description}
				</div>
			);
		},
	},
	{
		accessorKey: "number",
		header: () => {
			return (
				<div className="font-[700] text-[14px] text-[#8A8A8A]">
					Material number
				</div>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<div className="font-[400] text-[14px] text-[#3B3C41]">
					{data.number}
				</div>
			);
		},
	},
	{
		accessorKey: "name",
		header: () => {
			return (
				<div className="font-[700] text-[14px] text-[#8A8A8A]">
					Vendor name
				</div>
			);
		},
	},
	{
		accessorKey: "location",
		header: () => {
			return (
				<div className="font-[700] text-[14px] text-[#8A8A8A]">
					Location
				</div>
			);
		},
	},
	{
		accessorKey: "spend",
		header: () => {
			return (
				<div className="font-[700] text-[14px] text-[#8A8A8A]">Spend</div>
			);
		},
	},

	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const data = row.original;

			return (
				<div className="">
					<TooltipProvider delayDuration={300}>
						<Tooltip>
							<TooltipTrigger>
								<Link href={'/dashboard/projects/create'}>
									<SendHorizonal
										strokeWidth={1}
										className="text-primary"
										size={16}
									/>
								</Link>
							</TooltipTrigger>
							<TooltipContent className="">
								Create new sourcing project <br /> for this commodity
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
			);
		},
	},
];

const SupplierNeeds: FC<Props> = ({}) => {
	return (
		<div className="px-7">
			<DataTable columns={usersColumn} data={usersTabData} infive />
		</div>
	);
};

export default SupplierNeeds;
