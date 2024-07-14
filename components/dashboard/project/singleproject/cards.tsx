import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {}
const Cards: FC<Props> = ({}) => {
	return (
		<div className=" grid grid-cols-1 sm:grid-cols-3 gap-5 lg:grid-cols-4">
			<Card className="w-full border-0 bg-[#EFFAFE] rounded-[8px]">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-[15px] font-[500] text-[#4EA3C2]">
						Savings
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-[16px] sm:text-[18px] font-[700] text-[#3A7A91]">
						$5,378.00
					</p>
				</CardContent>
			</Card>
			<Card className="w-full border-0 bg-[#F6F6F6] rounded-[8px]">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-[15px] font-[500] text-[#8A8A8A]">
						Project type
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-[16px] sm:text-[18px] font-[700] text-[#3B3C41]">
						Diversify Suppliers
					</p>
				</CardContent>
			</Card>
			<Card className="w-full border-0 bg-[#F6F6F6] rounded-[8px]">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-[15px] font-[500] text-[#8A8A8A]">
						Commodity name
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-[16px] sm:text-[18px] font-[700] text-[#3B3C41]">
						Heat
					</p>
				</CardContent>
			</Card>
			<Card className="w-full border-0 bg-[#F6F6F6] rounded-[8px]">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-[15px] font-[500] text-[#8A8A8A]">
						Project date
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-[16px] sm:text-[18px] font-[700] text-[#3B3C41]">
						03/06/2023 - 19/09/2023
					</p>
				</CardContent>
			</Card>
		</div>
	);
};

export default Cards;
