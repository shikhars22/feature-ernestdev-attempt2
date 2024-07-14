'use client'
import { FC, useState } from 'react'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import { ColumnDef } from '@tanstack/react-table'
import { projectType, projects } from '@/data/projects'
import { DataTable } from '@/components/datatable'
import { DataTableForKanban } from '@/components/datatableForCanban'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check, Plus } from 'lucide-react'

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
	const data = 1
	const [layout, setLayout] = useState<'original' | 'kanban'>('original')

	const projectColumn: ColumnDef<projectType>[] = [
		{
			accessorKey: 'name',
			header: () => {
				return (
					<div className='text-[14px] font-[700] text-[#8A8A8A] pl-8'>
						Project Name
					</div>
				)
			},
			cell: ({ row }) => {
				const data = row.original
				return (
					<Link href={`/dashboard/projects/${data.id}`}>
						<div className='pl-8'>
							<h1 className='text-[#121212] font-[700] text-[15px] mb-1'>
								{data.name}
							</h1>
							<p className='text-[12px] font-[400] text-[#8A8A8A]'>
								{data.createdat}
							</p>
						</div>
					</Link>
				)
			},
		},
		{
			accessorKey: 'status',
			header: () => {
				return (
					<div className='text-[14px] font-[700] text-[#8A8A8A]'>Status</div>
				)
			},
			cell: ({ row }) => {
				const data = row.original

				return (
					<Link href={`/dashboard/projects/${data.id}`}>
						<div className=''>
							{data.status === 'red' && (
								<button className='bg-[#FDE7ED] text-[#C24E6A] text-[13px] font-[500] outline-none px-6 py-2.5 rounded-[8px]'>
									Initiation
								</button>
							)}
							{data.status === 'green' && (
								<button className='bg-[#F0FEE7] text-[#7CC44E] text-[13px] font-[500] outline-none px-6 py-2.5 rounded-[8px]'>
									Planning
								</button>
							)}
							{data.status === 'yellow' && (
								<button className='bg-[#FDF8E7] text-[#C2A84E] text-[13px] font-[500] outline-none px-6 py-2.5 rounded-[8px]'>
									Initiative
								</button>
							)}
						</div>
					</Link>
				)
			},
		},

		{
			accessorKey: 'cost',
			header: () => {
				return (
					<div className='text-[14px] font-[700] text-[#8A8A8A]'>
						Cost Savings
					</div>
				)
			},
			cell: ({ row }) => {
				const data = row.original
				return (
					<Link href={`/dashboard/projects/${data.id}`}>
						<div className='font-[600] text-[15px] text-[#3B3C41]'>
							{data.cost}
						</div>
					</Link>
				)
			},
		},
		{
			accessorKey: 'affected',
			header: () => {
				return (
					<div className='text-[14px] font-[700] text-[#8A8A8A]'>
						Affected Customers
					</div>
				)
			},
			cell: ({ row }) => {
				const data = row.original
				return (
					<Link href={`/dashboard/projects/${data.id}`}>
						<div className='font-[500] text-[15px] text-[#3B3C41]'>
							{data.affected}
						</div>
					</Link>
				)
			},
		},
		{
			accessorKey: 'part',
			header: () => {
				return (
					<div className='text-[14px] font-[700] text-[#8A8A8A]'>
						Part # & Description
					</div>
				)
			},
			cell: ({ row }) => {
				const data = row.original
				return (
					<Link href={`/dashboard/projects/${data.id}`}>
						<div>
							<h1 className='text-[#3B3C41] font-[600] text-[14px] mb-1'>
								{data.part}
							</h1>
							<p className='text-[14px] font-[400] text-[#8A8A8A]'>
								{data.description}
							</p>
						</div>
					</Link>
				)
			},
		},
		{
			accessorKey: 'sponsor',
			header: () => {
				return (
					<div className='text-[14px] font-[700] text-[#8A8A8A]'>
						Project Sponsor
					</div>
				)
			},
			cell: ({ row }) => {
				const data = row.original
				return (
					<Link href={`/dashboard/projects/${data.id}`}>
						<div className='font-[400] text-[14px] text-[#3B3C41]'>
							{data.sponsor}
						</div>
					</Link>
				)
			},
		},
		// {
		// 	id: "actions",
		// 	enableHiding: false,
		// 	cell: ({ row }) => {
		// 		const data = row.original;

		// 		return (
		// 			<Link
		// 				href={`/dashboard/projects/${data.id}`}
		// 				// className="text-[14px] font-[500] text-[#3B3C41]"
		// 			>
		// 				Details
		// 			</Link>
		// 		);
		// 	},
		// },
	]
	const phases = {
		Initiation: projects.filter((project) => project.phases === 'Initiation'),
		Planning: projects.filter((project) => project.phases === 'Planning'),
		Execution: projects.filter((project) => project.phases === 'Execution'),
		Control: projects.filter((project) => project.phases === 'Control'),
		Closure: projects.filter((project) => project.phases === 'Closure'),
	}
	return (
		<div className='bg-[#F6F6F6] p-4 lg:gap-6 lg:p-6 min-h-screen w-full'>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href='/' className='text-muted-foreground/70'>
							Home
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className='text-[16px] font-[400]'>
							All Projects
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<h1 className='mt-4 mb-7 text-[32px] font-[700]'>All Projects</h1>

			<div className='mb-4'>
				<Button
					onClick={() =>
						setLayout(layout === 'original' ? 'kanban' : 'original')
					}
				>
					{layout === 'original'
						? 'Switch to Kanban View'
						: 'Switch to Original View'}
				</Button>
			</div>

			<main className='bg-transparent w-full h-full'>
				{layout === 'original' ? (
					data > 0 ? (
						<DataTable
							columns={projectColumn}
							data={projects}
							rowStyle='bg-white border-b-[10px] border-b-[#F6F6F6] h-[82px] cursor-pointer'
							headerStyle='h-[70px] border-0'
							buttonWrapper='bg-white my-4 h-[85px] px-5'
						/>
					) : (
						<div className='w-full h-full flex justify-center'>
							<div className='pt-14 sm:pt-[80px]'>
								<h1 className='text-[15px] font-[400] text-[#3B3C41] text-center mb-8'>
									There are no projects.
								</h1>
								<Link href={'/dashboard/projects/create'}>
									<Button
										variant={'default'}
										className='bg-[#6649B6] px-5 text-[14px] font-[400]'
									>
										<span className='mr-[20px] border-[2px] rounded-[6px] p-0.5 border-white'>
											<Plus size={13} color='#fff' />
										</span>
										Create new sourcing project
									</Button>
								</Link>
							</div>
						</div>
					)
				) : (
					<div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
						<div className='col'>
							<div className='text-black flex items-center text-[15px] font-[400] mb-4'>
								<span className='flex justify-center items-center bg-[#7CC44E] size-6 rounded-full mr-3'>
									<Check color='#fff' size={18} stroke-width={2.5} />
								</span>
								Initiation
							</div>
							<DataTableForKanban
								columns={projectColumn}
								data={phases.Initiation}
								rowStyle='bg-white border-b-[10px] border-b-[#F6F6F6] h-[82px] cursor-pointer'
								headerStyle='h-[70px] border-0'
								buttonWrapper='bg-white my-4 h-[85px] px-5'
							/>
						</div>

						<div className='col'>
							<div className='text-black flex items-center text-[15px] font-[400] gap-20 mb-4'>
								<div className='flex items-center'>
									<span className='flex justify-center items-center bg-[#7CC44E] size-6 rounded-full mr-3'>
										<Check color='#fff' size={18} stroke-width={2.5} />
									</span>
									Planning
								</div>
							</div>
							<DataTableForKanban
								columns={projectColumn}
								data={phases.Planning}
								rowStyle='bg-white border-b-[10px] border-b-[#F6F6F6] h-[82px] cursor-pointer'
								headerStyle='h-[70px] border-0'
								buttonWrapper='bg-white my-4 h-[85px] px-5'
							/>
						</div>
						<div className='col'>
							<div className='text-[#DA5777] flex items-center text-[15px] font-[400] gap-20 mb-4'>
								<div className='flex items-center font-[700]'>
									<span className='flex justify-center items-center bg-[#DA5777] size-6 rounded-full mr-3 text-white text-[18px] font-[700]'>
										3
									</span>
									Execution
								</div>
							</div>
							<DataTableForKanban
								columns={projectColumn}
								data={phases.Execution}
								rowStyle='bg-white border-b-[10px] border-b-[#F6F6F6] h-[82px] cursor-pointer'
								headerStyle='h-[70px] border-0'
								buttonWrapper='bg-white my-4 h-[85px] px-5'
							/>
						</div>
						<div className='col'>
							<div className='text-[#CEEFFB] flex items-center text-[15px] font-[400] gap-20 mb-4'>
								<div className='flex items-center font-[700]'>
									<span className='flex justify-center items-center bg-[#CEEFFB] size-6 rounded-full mr-3 text-white text-[18px] font-[700]'>
										4
									</span>
									Control
								</div>
							</div>
							<DataTableForKanban
								columns={projectColumn}
								data={phases.Control}
								rowStyle='bg-white border-b-[10px] border-b-[#F6F6F6] h-[82px] cursor-pointer'
								headerStyle='h-[70px] border-0'
								buttonWrapper='bg-white my-4 h-[85px] px-5'
							/>
						</div>
						<div className='col'>
							<div className='text-[#CEEFFB] flex items-center text-[15px] font-[400] gap-20 mb-4'>
								<div className='flex items-center font-[700]'>
									<span className='flex justify-center items-center bg-[#CEEFFB] size-6 rounded-full mr-3 text-white text-[18px] font-[700]'>
										5
									</span>
									Closure
								</div>
							</div>
							<DataTableForKanban
								columns={projectColumn}
								data={phases.Closure}
								rowStyle='bg-white border-b-[10px] border-b-[#F6F6F6] h-[82px] cursor-pointer'
								headerStyle='h-[70px] border-0'
								buttonWrapper='bg-white my-4 h-[85px] px-5'
							/>
						</div>
					</div>
				)}
			</main>
		</div>
	)
}

export default Projects
