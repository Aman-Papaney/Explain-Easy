import {Box, Flex, Text, HStack, Link, Button, Badge} from "@chakra-ui/react"
import {useNavigate} from "react-router-dom"

function Top() {
	const navigate = useNavigate()

	return (
		<Box bg='white' borderBottomWidth='1px' borderBottomColor='gray.100' px='6' py='3' position='sticky' top='0' zIndex='10' boxShadow='0 1px 3px rgba(0,0,0,0.05)'>
			<Flex justify='space-between' align='center' maxW='1400px' mx='auto' height='16'>
				{/* Logo with Beta Badge */}
				<HStack spacing='2' cursor='pointer' onClick={() => navigate("/")} _hover={{opacity: 0.8}} transition='opacity 0.2s'>
					<Text fontSize='xl' fontWeight='600' bgGradient='linear(to-r, blue.600, blue.700)' bgClip='text' letterSpacing='-0.5px' color='black' textStyle='3xl'>
						ExplainEasy
					</Text>
					<Badge bg='orange.100' color='orange.700' px='2' py='1' borderRadius='full' fontWeight='700' fontSize='xs'>
						BETA
					</Badge>
				</HStack>

				{/* Navigation */}
				{/* <HStack spacing='8' fontSize='lg' fontWeight='500'> */}
					{/* <Link color='gray.600' _hover={{color: "blue.600", textDecoration: "none"}} cursor='pointer' transition='color 0.2s'>
					How it works
				</Link> */}
					{/* <Box w='1px' h='5' bg='gray.200' /> */}

					{/* Auth Buttons */}
					{/* <HStack spacing='3'>
						<Link color='gray.700' fontSize='lg' _hover={{color: "blue.600", textDecoration: "none"}} cursor='pointer' fontWeight='600' transition='color 0.2s'>
							Sign in
						</Link>
						<Button size='sm' fontSize='lg' bg='blue.600' color='white' _hover={{bg: "blue.700"}} borderRadius='md' fontWeight='600' transition='background 0.2s'>
							Get started
						</Button>
					</HStack> */}
				{/* </HStack> */}
			</Flex>
		</Box>
	)
}

export default Top
