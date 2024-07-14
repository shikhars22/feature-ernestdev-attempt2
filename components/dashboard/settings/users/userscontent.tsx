"use client";
import { FC } from "react";
import { usersTabData } from "@/data/setting";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/datatable";
import Deleteuser from "./deleteuser";
import Editeuser from "./edituser";

interface Props {}

export type usersTabData = {
	name: string;
	email: string;
	permission: string;
};

export const usersColumn: ColumnDef<usersTabData>[] = [
	{
		accessorKey: "name",
		header: () => {
			return (
				<div className="font-[700] text-[14px] text-[#8A8A8A]">Name</div>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<div className="font-[700] text-[14px] text-[#3B3C41]">
					{data.name}
				</div>
			);
		},
	},
	{
		accessorKey: "email",
		header: () => {
			return (
				<div className="font-[700] text-[14px] text-[#8A8A8A]">Email</div>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<div className="font-[400] text-[14px] text-[#3B3C41]">
					{data.email}
				</div>
			);
		},
	},
	{
		accessorKey: "permission",
		header: () => {
			return (
				<div className="font-[700] text-[14px] text-[#8A8A8A]">
					Permission
				</div>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<div className="font-[400] text-[14px] text-[#3B3C41]">
					{data.permission}
				</div>
			);
		},
	},

	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const data = row.original;

			return (
				<div className="flex gap-6 items-center">
					<Editeuser />
					<Deleteuser />
				</div>
			);
		},
	},
];

const UsersContent: FC<Props> = ({}) => {
	return (
		<div className="p-4 lg:p-7 lg:lg:px-10 xl:px-20  max-w-[1400px] lg:pt-[40px]">
			<DataTable columns={usersColumn} data={usersTabData} />
		</div>
	);
};

export default UsersContent;
