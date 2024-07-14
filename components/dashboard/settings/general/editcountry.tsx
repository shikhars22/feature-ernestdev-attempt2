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

const EditCountry = ({ country }: { country: string }) => {
	type inputType = {
		country: string;
	};

	const onSubmit = async (data: inputType) => {
		console.log(data.country);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<inputType>();

	return (
		<div className="flex items-center gap-3 flex-wrap sm:flex-nowrap mb-7">
			<h1 className="text-[15px] font-[500] text-[#8A8A8A]/80 sm:w-1/2">
				Country
			</h1>
			<div className="flex items-center justify-between w-full flex-wrap sm:w-1/2">
				<p className="font-[500] text-[15px] text-left">{country}</p>

				<Dialog>
					<DialogTrigger asChild>
						<button className="outline-none">
							<PencilLine className="text-primary" strokeWidth={"1"} />
						</button>
					</DialogTrigger>

					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle className="font-[500]">Edit country</DialogTitle>
						</DialogHeader>
						<form
							className="grid gap-4 py-4"
							onSubmit={handleSubmit(onSubmit)}
						>
							<div className="mb-3">
								<Input
									placeholder="Enter city"
									className="bg-[#F6F6F6] h-10 mt-2 mb-2"
									{...register("country", {
										required: "Required field",
									})}
								/>
								<ErrorMessage
									errors={errors}
									name="country"
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

export default EditCountry;
