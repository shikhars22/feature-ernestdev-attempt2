import {
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	Icon,
	Stack,
	StackProps,
	Text,
} from '@chakra-ui/react'
import { CheckIcon } from '../icons/Icons'
import Link from 'next/link'
export const ListItem = (props: StackProps) => {
	const { children, ...rest } = props

	return (
		<HStack as='li' spacing='5' {...rest} align='flex-start'>
			<Icon as={CheckIcon} w='22px' h='22px' flexShrink={0} />
			<Text textAlign='left'>{children}</Text>
		</HStack>
	)
}

export function Pricing() {
	return (
		<Box mx='6' as='section'>
			<Box
				maxW='994px'
				margin='auto'
				mt='-40'
				borderRadius='xl'
				overflow='hidden'
				boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
				textAlign='center'
			>
				<Flex direction={['column', 'column', 'row']}>
					<Box bg='#F0EAFB' p={['28px', '6opx', '60px']}>
						<Text fontSize='xl' fontWeight='extrabold'>
							Full-access
						</Text>
						<Heading as='h3' fontSize={['5xl', '5xl', '6xl']} mt='4'>
							$39
						</Heading>
						<Text color='gray.900' fontSize='lg' fontWeight='medium' mt='2'>
							per user per month
						</Text>
						<Link href='/'>
							<Button
								colorScheme='purple'
								size='lg'
								w={['auto', '282px', '282px']}
								mt='6'
							>
								Get Started
							</Button>
						</Link>
					</Box>
					<Box p={['32px', '32px', '60px']} fontSize='lg' bg='white'>
						<Text textAlign='left'>
							Access these features when you get this pricing package for your
							business.
						</Text>
						<Stack as='ul' spacing='5' pt='6'>
							<ListItem>Spend analysis and dashboard</ListItem>
							<ListItem>Sourcing Project Management with Kanban view</ListItem>
							<ListItem>Supplier Evaluation tool</ListItem>
							<ListItem>International platform API</ListItem>
						</Stack>
					</Box>
				</Flex>
			</Box>
		</Box>
	)
}
