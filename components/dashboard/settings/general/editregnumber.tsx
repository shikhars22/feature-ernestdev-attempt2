import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { PencilLine } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EditRegNumber = ({ regnumber }: { regnumber: string }) => {
	type inputType = {
		regnumber: string;
	};

	const onSubmit = async (data: inputType) => {
		console.log(data.regnumber);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<inputType>();

	return (
		<div className="flex items-center gap-3 flex-wrap sm:flex-nowrap mb-7">
			<h1 className="text-[15px] font-[500] text-[#8A8A8A]/80 sm:w-1/2">
				Registration number
			</h1>
			<div className="flex items-center justify-between w-full flex-wrap sm:w-1/2">
				<p className="font-[500] text-[15px] text-left">{regnumber}</p>

				<Dialog>
					<DialogTrigger asChild>
						<button className="outline-none">
							<PencilLine className="text-primary" strokeWidth={"1"} />
						</button>
					</DialogTrigger>

					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle className="font-[500]">
								Edit company registration number
							</DialogTitle>
						</DialogHeader>
						<form
							className="grid gap-4 py-4"
							onSubmit={handleSubmit(onSubmit)}
						>
							<div className="mb-3">
								<Input
									placeholder="Enter company registration number"
									className="bg-[#F6F6F6] h-10 mt-2 mb-2"
									{...register("regnumber", {
										required: "Required field",
									})}
								/>
								<ErrorMessage
									errors={errors}
									name="regnumber"
									render={({ message }) => (
										<span className="text-[#F26184] text-[13px] font-[400]">
											{message}
										</span>
									)}
								/>
							</div>
							<div className="flex justify-end gap-5">
								<DialogClose asChild>
									<Button
										variant={"secondary"}
										className="font-[400] px-10"
									>
										Cancel
									</Button>
								</DialogClose>

								<Button className="font-[400] px-14" type="submit">
									Save
								</Button>
							</div>
						</form>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
};

export default EditRegNumber;
