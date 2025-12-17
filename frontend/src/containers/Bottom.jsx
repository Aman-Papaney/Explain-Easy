import {Box, Text, Center, HStack, Link, VStack} from "@chakra-ui/react"
import {useNavigate} from "react-router-dom"

const Bottom = () => {
	const currentYear = new Date().getFullYear()
	const navigate = useNavigate()

	return (
		<Box bg='white' borderTopWidth='1px' borderTopColor='gray.200' py='12' px='6'>
			{/* <VStack maxW='1400px' mx='auto' spacing='8'> */}
				{/* Links */}
				{/* <HStack spacing='8' fontSize='sm' fontWeight='500' justify='center' flexWrap='wrap'>
					<Link color='gray.600' _hover={{color: "blue.600", textDecoration: "none"}} cursor='pointer' transition='color 0.2s'>
						Privacy Policy
					</Link>
					<Box w='1px' h='4' bg='gray.300' />
					<Link color='gray.600' _hover={{color: "blue.600", textDecoration: "none"}} cursor='pointer' transition='color 0.2s'>
						Terms of Service
					</Link>
					<Box w='1px' h='4' bg='gray.300' />
					<Link color='gray.600' _hover={{color: "blue.600", textDecoration: "none"}} cursor='pointer' transition='color 0.2s'>
						Contact
					</Link>
					<Box w='1px' h='4' bg='gray.300' />
					<Link color='gray.600' _hover={{color: "blue.600", textDecoration: "none"}} cursor='pointer' transition='color 0.2s'>
						Feedback
					</Link>
				</HStack> */}

				{/* Copyright & Description */}
				<Center>
					<VStack spacing='2' textAlign='center'>
						<Text fontSize='sm' color='gray.700' fontWeight='600'>
							© {currentYear} ExplainEasy. Made with clarity in mind.
						</Text>
						<Text fontSize='xs' color='gray.500'>
							Helping students, professionals, and everyone understand complex text better.
						</Text>
					</VStack>
				</Center>
			{/* </VStack> */}
		</Box>
	)
}

export default Bottom
