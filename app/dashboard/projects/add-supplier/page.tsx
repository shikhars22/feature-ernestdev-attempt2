'use client'
import { useEffect, useState } from 'react'
import AirtableIframe from '@/components/ui/add-supplier'
import SelectedCustomer from '@/components/ui/selectedSuppliers'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import AddsupplierWithName from '@/components/dashboard/project/evaluate/addsupplierWithName'
interface Supplier {
	id: string
	name: string
	email: string
}

const Home: React.FC = () => {
	const [suppliers, setSuppliers] = useState<Supplier[]>([])
	const [selectedSuppliers, setSelectedSuppliers] = useState<Supplier[]>([])
	const [searchQuery, setSearchQuery] = useState('')
	const [layout, setLayout] = useState<'original' | 'select'>('original')

	useEffect(() => {
		const fetchSuppliers = async () => {
			try {
				const response = await axios.get(
					`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/Suppliers`,
					{
						headers: {
							Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_PAT}`,
						},
					}
				)
				const data = response.data.records.map((record: any) => ({
					id: record.id,
					name: record.fields['Company'],
					email: record.fields['Email'],
				}))
				setSuppliers(data)
			} catch (error) {
				console.error('Error fetching suppliers:', error)
			}
		}

		fetchSuppliers()
	}, [])
	const toggleSelectSupplier = (supplier: Supplier) => {
		const isSelected = selectedSuppliers.some(
			(selected) => selected.name === supplier.name
		)

		if (isSelected) {
			const updatedSuppliers = selectedSuppliers.filter(
				(selected) => selected.name !== supplier.name
			)
			setSelectedSuppliers(updatedSuppliers)
		} else {
			setSelectedSuppliers([...selectedSuppliers, supplier])
		}
	}

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value)
	}

	const filteredSuppliers = suppliers.filter((supplier) =>
		supplier.name.toLowerCase().includes(searchQuery.toLowerCase())
	)

	return (
		<div className='p-4'>
			<AirtableIframe />
			<br />
			<h2 className='text-xl font-bold mb-4'>Suppliers</h2>
			{layout === 'original' ? (
				<div className='mb-4'>
					<input
						type='text'
						placeholder='Search suppliers...'
						value={searchQuery}
						onChange={handleSearch}
						className='w-full p-2 border border-gray-300 rounded'
					/>
				</div>
			) : (
				<></>
			)}
			<div className='mb-4'>
				<Button
					onClick={() =>
						setLayout(layout === 'original' ? 'select' : 'original')
					}
				>
					{layout === 'original'
						? 'Switch to Selected Companies'
						: 'Switch to All Companies'}
				</Button>
			</div>

			<div className='mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4'>
				{layout === 'original' ? (
					<>
						{filteredSuppliers.map((supplier) => (
							<div
								key={supplier.id}
								className='bg-white shadow-md rounded-lg p-4 mb-4'
							>
								<div>
									<strong className='text-base font-bold mb-2'>
										{supplier.name}
									</strong>
								</div>
								<div>
									<Button
										className='grid place-items-center mt-2 '
										onClick={() => toggleSelectSupplier(supplier)}
									>
										Select
									</Button>
								</div>
							</div>
						))}
					</>
				) : (
					<>
						{selectedSuppliers.map((supplier) => (
							<div
								key={supplier.id}
								className='bg-white shadow-md rounded-lg p-4 mb-4'
							>
								<p>
									<strong className='text-base font-bold mb-2'>
										{supplier.name}
									</strong>
								</p>
								<AddsupplierWithName name={supplier.name} />
							</div>
						))}
					</>
				)}
			</div>
		</div>
	)
}

export default Home
