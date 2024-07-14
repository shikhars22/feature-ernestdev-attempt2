import { FC } from "react";
import avatar from "../../../../public/Ellipse 123.png";
import guy from "../../../../public/guy.png";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Props {}
const Comments: FC<Props> = ({}) => {
	const chats = [
		{
			id: "1",
			image: avatar,
			name: "Jay Borda",
			message: "Hi, please review on this project",
			time: "1 month ago",
		},
		{
			id: "2",
			image: guy,
			name: "Guy Hawkins",
			message: "Awesome! keep it up",
			time: "1 month ago",
		},
		{
			id: "3",
			image: avatar,
			name: "Mayad Ahmed",
			message: "Hey, how about set a call tomorrow?",
			time: "1 month ago",
		},
		{
			id: "4",
			image: guy,
			name: "Rahman",
			message: "Confirm, I will be there",
			time: "1 month ago",
		},
		
	];

	return (
		<div className="rounded-[12px] bg-white p-4 md:p-5 lg:p-6 xl:px-9 h-full">
			<h1 className="pb-6 text-[20px] font-[700] text-[#121212]">
				Project Comments
			</h1>
			<hr />
			<div className="pt-6">
				{chats.map((chat) => (
					<div
						key={chat.id}
						className="flex items-start gap-2 sm:gap-4 mb-5"
					>
						<div>
							<Image src={avatar} alt="user" className="size-10" />
						</div>
						<div className="w-full">
							<div className="flex items-center justify-between w-full mb-3">
								<h1 className="text-[15px] font-[700] text-[#121212]">
									{chat.name}
								</h1>
								<p className="text-[14px] font-[500] text-[#8A8A8A]">
									{chat.time}
								</p>
							</div>
							<div className="w-full bg-[#F3EFFE] rounded-[8px] py-4 px-4 text-[14px] font-[400]">
								Hi, please review on this project
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="mt-4 pb-10">
				<Textarea
					placeholder="Write a message"
					className="bg-[#F6F6F6] text-[14px] font-[400] py-4 text-[#8A8A8A] mb-4"
				/>
				<Button
					variant="default"
					className="float-right px-10 py-3 rounded-[8px]"
					disabled
				>
					Post
				</Button>
			</div>
		</div>
	);
};

export default Comments;
