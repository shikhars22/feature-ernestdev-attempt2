import { FC } from "react";
import { Check } from "lucide-react";

interface Props {}
const Step: FC<Props> = ({}) => {
	return (
		<div className="pb-5 text-[20px] font-[700] text-[#121212] flex items-center xl:justify-between flex-wrap gap-3 gap-y-4">
			<div className="text-black flex items-center text-[15px] font-[400]">
				<span className="flex justify-center items-center bg-[#7CC44E] size-6 rounded-full mr-3">
					<Check color="#fff" size={18} stroke-width={2.5} />
				</span>
				Initiation
			</div>
			<div className="text-black flex items-center text-[15px] font-[400] gap-20 ">
				<div className="w-[40px] bg-[#7CC44E] h-[2px] hidden xl:inline-grid" />
				<div className="flex items-center">
					<span className="flex justify-center items-center bg-[#7CC44E] size-6 rounded-full mr-3">
						<Check color="#fff" size={18} stroke-width={2.5} />
					</span>
					Planning
				</div>
			</div>
			<div className="text-[#DA5777] flex items-center text-[15px] font-[400] gap-20">
				<div className="w-[40px] bg-[#7CC44E] h-[2px] hidden xl:inline-grid" />
				<div className="flex items-center font-[700]">
					<span className="flex justify-center items-center bg-[#DA5777] size-6 rounded-full mr-3 text-white text-[18px] font-[700]">
						3
					</span>
					Execution
				</div>
			</div>
			<div className="text-[#CEEFFB] flex items-center text-[15px] font-[400] gap-20">
				<div className="w-[40px] bg-[#CEEFFB] h-[2px] hidden xl:inline-grid" />
				<div className="flex items-center font-[700]">
					<span className="flex justify-center items-center bg-[#CEEFFB] size-6 rounded-full mr-3 text-white text-[18px] font-[700]">
						4
					</span>
					Control
				</div>
			</div>
			<div className="text-[#CEEFFB] flex items-center text-[15px] font-[400] gap-20">
				<div className="w-[40px] bg-[#CEEFFB] h-[2px] hidden xl:inline-grid" />
				<div className="flex items-center font-[700]">
					<span className="flex justify-center items-center bg-[#CEEFFB] size-6 rounded-full mr-3 text-white text-[18px] font-[700]">
						5
					</span>
					Closure
				</div>
			</div>
		</div>
	);
};

export default Step;
