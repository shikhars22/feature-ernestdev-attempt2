import React from "react";
import { PencilLine } from "lucide-react";
import {
	Dialog,
	DialogHeader,
	DialogTitle,
	DialogContent,
	DialogTrigger,
	DialogDescription,
	DialogClose,
} from "@/components/ui/dialog";
import { FormItem, FormLabel, Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Edituser() {
	const form = useForm();
	return (
		<div>
			<Dialog>
				<DialogTrigger asChild>
					<button className="outline-0 mt-1">
						<PencilLine
							strokeWidth={1}
							className="text-primary"
							size={16}
						/>
					</button>
				</DialogTrigger>

				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle className="font-[500]">Edit user</DialogTitle>
					</DialogHeader>
					<Form {...form}>
						<form className="grid gap-4 py-4">
							<FormItem>
								<FormLabel className="text-[14px] sm:text-[16px] font-[500]">
									Name
								</FormLabel>
								<Input
									placeholder="Enter user name"
									type="text"
									className="bg-[#F6F6F6] rounded-[8px] h-[45px]"
								/>
							</FormItem>
							<FormItem>
								<FormLabel className="text-[14px] sm:text-[16px] font-[500]">
									Email
								</FormLabel>
								<Input
									placeholder="Enter user email"
									type="email"
									className="bg-[#F6F6F6] rounded-[8px] h-[45px]"
								/>
							</FormItem>

							<FormItem>
								<FormLabel className="text-[14px] sm:text-[16px] font-[500]">
									Permission
								</FormLabel>
								<Select>
									<SelectTrigger className="w-full h-[40px] bg-[#F6F6F6]">
										<SelectValue placeholder="Select permission" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="Admin">Admin</SelectItem>
										<SelectItem value="User">User</SelectItem>
									</SelectContent>
								</Select>
							</FormItem>
							<div className="flex justify-end gap-5 mt-5">
								<DialogClose asChild>
									<Button
										variant={"secondary"}
										className="font-[400] px-10"
									>
										Cancel
									</Button>
								</DialogClose>

								<Button className="font-[400] px-14">Save</Button>
							</div>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</div>
	);
}
