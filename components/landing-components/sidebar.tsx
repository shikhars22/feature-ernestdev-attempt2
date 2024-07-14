'use client'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { FC } from 'react'
import { auth } from '@clerk/nextjs/server'
import { Button } from '../ui/button'
import Link from 'next/link'

interface SidebarProps {
	userId?: string | null
}

const Sidebar: FC<SidebarProps> = ({ userId }) => {
	return (
		<>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant={'outline'} size={'icon'}>
						<DotsHorizontalIcon />
					</Button>
				</SheetTrigger>
				<SheetContent side={'left'}>
					<SheetHeader>
						<SheetTitle>
							<Image src='/logo.svg' alt='logo' width={100} height={100} />
						</SheetTitle>
						<nav className='flex flex-col gap-6'>
							<Link href={userId ? '/dashboard/spend-analysis' : '/sign-in'}>
								<Button variant={'ghost'} size={'lg'} className='px-4'>
									Product
								</Button>
							</Link>
							<Link href={userId ? '/dashboard/spend-analysis' : '/sign-in'}>
								<Button variant={'ghost'} size={'lg'} className='px-4'>
									Solution
								</Button>
							</Link>
							<Link href='/pricing'>
								<Button variant={'ghost'} size={'lg'} className='px-4'>
									Pricing
								</Button>
							</Link>
						</nav>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</>
	)
}

export default Sidebar
