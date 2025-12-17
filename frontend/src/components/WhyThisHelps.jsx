import {Box, VStack, HStack, Text, Grid, GridItem} from "@chakra-ui/react"

const WhyThisHelps = () => {
	const benefits = [
		{
			icon: "🎓",
			title: "Better Learning",
			desc: "Understand complex material faster. Break down difficult concepts into simple words.",
		},
		{
			icon: "⏱️",
			title: "Save Time",
			desc: "Get instant summaries instead of reading through dense, confusing text.",
		},
		{
			icon: "✨",
			title: "Clarity & Confidence",
			desc: "Feel confident in your understanding. No more confusion from jargon or technical language.",
		},
	]

	return (
		<Box width='100%'>
			<VStack spacing='8' align='stretch'>
				<VStack spacing='2' align='center' textAlign='center'>
					<Text fontSize='2xl' fontWeight='800' color='black'>
						Why This Helps
					</Text>
					<Text fontSize='md' color='gray.600'>
						Simplifying text makes learning easier, faster, and more confident
					</Text>
				</VStack>

				<Grid templateColumns={{base: "1fr", md: "repeat(3, 1fr)"}} gap='6'>
					{benefits.map((benefit, idx) => (
						<GridItem key={idx}>
							<Box
								bg='white'
								borderRadius='lg'
								p='6'
								shadow='sm'
								borderWidth='1px'
								borderColor='gray.200'
								_hover={{shadow: "md", borderColor: "blue.200"}}
								transition='all 0.2s'
								height='100%'
								display='flex'
								flexDirection='column'
								gap='3'
							>
								<Text fontSize='3xl'>{benefit.icon}</Text>
								<VStack spacing='2' align='start' flex='1'>
									<Text fontWeight='700' color='black' fontSize='sm'>
										{benefit.title}
									</Text>
									<Text fontSize='xs' color='gray.600' lineHeight='relaxed'>
										{benefit.desc}
									</Text>
								</VStack>
							</Box>
						</GridItem>
					))}
				</Grid>
			</VStack>
		</Box>
	)
}

export default WhyThisHelps
