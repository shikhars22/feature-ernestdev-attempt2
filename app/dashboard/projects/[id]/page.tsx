import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FC } from "react";
import Step from "@/components/dashboard/project/singleproject/step";
import Cards from "@/components/dashboard/project/singleproject/cards";
import Comments from "@/components/dashboard/project/singleproject/comments";
import ProjectDets from "@/components/dashboard/project/singleproject/projectdetails";
import SourcingTeam from "@/components/dashboard/project/singleproject/sourcingteam";
import RatingSummary from "@/components/dashboard/project/singleproject/ratingsumary";

interface Props {}

const SingleProject: FC<Props> = ({}) => {
	return (
		<div className="bg-[#F6F6F6] p-4 lg:gap-6 lg:p-6 min-h-screen w-full">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/" className="text-muted-foreground/70">
							Home
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink
							href="/dashboard/projects"
							className="text-muted-foreground/70"
						>
							All Projects
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />

					<BreadcrumbItem>
						<BreadcrumbPage className="text-[16px] font-[400]">
							Heater Pump Sourcing
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<h1 className="mt-4 mb-4 text-[32px] font-[700]">
				Heater Pump Sourcing
			</h1>

			<main className="bg-transparent w-full h-full grid  grid-cols-1 gap-4 sm:grid-cols-2">
				<div className="rounded-[12px] bg-white p-4 py-6 sm:col-span-2 xl:px-9">
					<Step />
					<Cards />
				</div>
				<div>
					<ProjectDets />
					<SourcingTeam />
					<RatingSummary />
				</div>

				<div className="sm:h-max">
					<Comments />
				</div>
			</main>
		</div>
	);
};

export default SingleProject;
