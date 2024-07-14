import React from 'react'
import { Trash2 } from "lucide-react";
import {
	Dialog,
	DialogHeader,
	DialogTitle,
	DialogContent,
	DialogTrigger,
	DialogDescription,
	DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Deleteuser() {
  return (
    <div>
      		<Dialog>
						<DialogTrigger asChild>
							<button className="outline-0">
								<Trash2
									strokeWidth={1}
									className="text-primary"
									size={16}
								/>
							</button>
						</DialogTrigger>

						<DialogContent className="w-full sm:max-w-[425px]">
							<DialogHeader>
								<DialogTitle className="font-[500]">
									Delete user
								</DialogTitle>
								<DialogDescription className="font-[500]">
									Are you sure you want to delete this user?
								</DialogDescription>
							</DialogHeader>
							<div className="flex justify-center sm:justify-end gap-5 mt-4">
								<DialogClose asChild>
									<Button
										variant={"secondary"}
										className="font-[400] px-10"
									>
										Cancel
									</Button>
								</DialogClose>

								<Button
									className="font-[400] px-14"
									variant={"default"}
								>
									Delete
								</Button>
							</div>
						</DialogContent>
					</Dialog>
    </div>
  )
}
