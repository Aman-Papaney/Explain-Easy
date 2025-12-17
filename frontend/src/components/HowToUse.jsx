import {Box, VStack, HStack, Text} from "@chakra-ui/react"

const HowToUse = () => {
	const steps = [
		{
			num: "1",
			title: "Paste your text",
			desc: "Copy and paste any complicated text into the box above.",
			emoji: "📋",
		},
		{
			num: "2",
			title: "Choose your level",
			desc: "Pick how simple you want the explanation (kid-friendly, beginner, or simple).",
			emoji: "🎯",
		},
		{
			num: "3",
			title: "Get results instantly",
			desc: "Click 'Simplify' and see your text explained in seconds.",
			emoji: "⚡",
		},
	]

	return (
		<Box bg='white' borderRadius='lg' p='8' shadow='sm' borderWidth='1px' borderColor='gray.200' width='100%'>
			<VStack spacing='6' align='stretch'>
				<Text fontSize='lg' fontWeight='700' color='black'>
					How to use ExplainEasy
				</Text>

				<VStack spacing='4' align='stretch'>
					{steps.map((step, idx) => (
						<HStack key={idx} spacing='4' align='start'>
							<Box
								minW='48px'
								h='48px'
								borderRadius='full'
								bg='blue.50'
								display='flex'
								alignItems='center'
								justifyContent='center'
								fontSize='xl'
								fontWeight='700'
								color='blue.600'
								border='2px solid'
								borderColor='blue.200'
								flexShrink={0}
							>
								<Text fontSize='2xl' mr='1'>
									{step.emoji}
								</Text>
							</Box>
							<VStack spacing='1' align='start'>
								<Text fontWeight='600' color='black' fontSize='sm'>
									{step.title}
								</Text>
								<Text fontSize='xs' color='gray.600'>
									{step.desc}
								</Text>
							</VStack>
						</HStack>
					))}
				</VStack>
			</VStack>
		</Box>
	)
}

export default HowToUse
