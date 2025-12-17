import {Flex, Box, VStack, HStack, Text, Badge, Button, List} from "@chakra-ui/react"
import {FiCheck} from "react-icons/fi"

const PricingSection = ({simplificationsToday = 0, dailyLimit = 10}) => {
	const remaining = Math.max(0, dailyLimit - simplificationsToday)
	const isLimitReached = remaining === 0

	return (
		<Box width='90%'>
			<VStack spacing='12' align='center'>
				{/* Header Section */}
				<VStack spacing='3' align='center' textAlign='center' maxW='600px'>
					<Text fontSize={{base: "3xl", md: "4xl"}} fontWeight='900' color='black' lineHeight='tight'>
						Transparent Pricing
					</Text>
					<Text fontSize='lg' color='gray.600'>
						Choose the perfect plan for your needs. No credit card required.
					</Text>
				</VStack>

				<Flex justifyContent='center' gap='12' width='100%'>
					{/* FREE PLAN */}
					<VStack spacing='6' align='stretch' flex='1' maxW='400px'>
						<Box
							bg='white'
							borderRadius='xl'
							p='10'
							shadow='lg'
							borderWidth='2px'
							borderColor='blue.100'
							_hover={{shadow: "xl", transform: "translateY(-4px)", transition: "all 0.3s"}}
							transition='all 0.3s'
						>
							<VStack spacing='8' align='stretch'>
								<VStack spacing='3' align='start'>
									<HStack justify='space-between' width='100%'>
										<Text fontSize='2xl' fontWeight='800' color='blue.600'>
											💙 Free Plan
										</Text>
									</HStack>
									<Text fontSize='md' color='gray.700' fontWeight='500'>
										Perfect for getting started
									</Text>
								</VStack>{" "}
								{/* Daily Usage Display */}
								<Box bg='gray.50' borderRadius='md' p='4' borderWidth='1px' borderColor='gray.200'>
									<VStack spacing='3' align='stretch'>
										<HStack justify='space-between'>
											<Text fontSize='xs' fontWeight='600' color='gray.700' textTransform='uppercase' letterSpacing='0.5px'>
												Today's Simplifications
											</Text>
											<Text fontSize='sm' fontWeight='700' color={isLimitReached ? "red.600" : "blue.600"}>
												{simplificationsToday}/{dailyLimit}
											</Text>
										</HStack>
										<Box bg='gray.200' borderRadius='full' h='2' width='100%' overflow='hidden'>
											<Box bg={isLimitReached ? "red.500" : "blue.600"} h='100%' width={`${(simplificationsToday / dailyLimit) * 100}%`} transition='width 0.3s' />
										</Box>
										<Text fontSize='xs' color='gray.600'>
											{isLimitReached ? (
												<>
													<strong>Daily limit reached!</strong> Come back tomorrow for more simplifications.
												</>
											) : (
												<>{remaining} simplifications remaining today</>
											)}
										</Text>
									</VStack>
								</Box>
								{/* Features List */}
								<VStack spacing='4' align='stretch'>
									<Text fontSize='sm' fontWeight='700' color='gray.900' textTransform='uppercase' letterSpacing='1px'>
										What's Included
									</Text>
									<List.Root spacing='3'>
										<List.Item fontSize='md' color='gray.800' display='flex' alignItems='center' gap='3' fontWeight='500'>
											<FiCheck size={22} color='#22863a' style={{flexShrink: 0}} />
											{dailyLimit} simplifications per day
										</List.Item>
										<List.Item fontSize='md' color='gray.800' display='flex' alignItems='center' gap='3' fontWeight='500'>
											<FiCheck size={22} color='#22863a' style={{flexShrink: 0}} />
											Multiple simplification levels
										</List.Item>
										<List.Item fontSize='md' color='gray.800' display='flex' alignItems='center' gap='3' fontWeight='500'>
											<FiCheck size={22} color='#22863a' style={{flexShrink: 0}} />
											Format options (paragraphs & bullets)
										</List.Item>
										<List.Item fontSize='md' color='gray.800' display='flex' alignItems='center' gap='3' fontWeight='500'>
											<FiCheck size={22} color='#22863a' style={{flexShrink: 0}} />
											Up to 1,000 characters per text
										</List.Item>
									</List.Root>
								</VStack>{" "}
								<Button
									isDisabled={isLimitReached}
									width='100%'
									bg='blue.600'
									color='white'
									_hover={{bg: "blue.700", transform: "scale(1.02)"}}
									_disabled={{bg: "gray.300", cursor: "not-allowed"}}
									fontWeight='700'
									fontSize='md'
									py='7'
									borderRadius='lg'
									transition='all 0.2s'
									boxShadow='0 4px 12px rgba(37, 99, 235, 0.2)'
								>
									{isLimitReached ? "Daily Limit Reached" : "Get Started Free"}
								</Button>
							</VStack>
						</Box>

						{/* <Text fontSize='xs' color='gray.500' textAlign='center'>
					All features included in Free plan. Premium coming soon with unlimited simplifications and more.
				</Text> */}
					</VStack>

					{/* PREMIUM PLAN */}
					<VStack spacing='6' align='stretch' flex='1' maxW='400px'>
						<VStack spacing='2' align='center' textAlign='center'>
							<Text fontSize='2xl' fontWeight='800' color='black'>
								Premium Features
							</Text>
							<Text fontSize='md' color='gray.600'>
								Unlock unlimited potential.
							</Text>
						</VStack>

						<Box
							bg='linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
							borderRadius='xl'
							p='10'
							shadow='2xl'
							borderWidth='2px'
							borderColor='purple.300'
							position='relative'
							_hover={{shadow: "2xl", transform: "translateY(-6px)", transition: "all 0.3s"}}
							transition='all 0.3s'
						>
							<Box
								position='absolute'
								top='-12px'
								right='20px'
								bg='purple.600'
								color='white'
								px='4'
								py='2'
								borderRadius='full'
								fontWeight='700'
								fontSize='sm'
								boxShadow='0 4px 12px rgba(147, 51, 234, 0.3)'
							>
								✨ RECOMMENDED
							</Box>
							<VStack spacing='8' align='stretch'>
								<VStack spacing='3' align='start'>
									<HStack justify='space-between' width='100%' pt='6'>
										<Text fontSize='2xl' fontWeight='800' color='purple.600'>
											⭐ Premium Plan
										</Text>
									</HStack>
									<Text fontSize='md' color='gray.700' fontWeight='500'>
										For power users who need unlimited access
									</Text>
								</VStack>{" "}
								{/* Features List */}
								<VStack spacing='4' align='stretch'>
									<Text fontSize='sm' fontWeight='700' color='gray.900' textTransform='uppercase' letterSpacing='1px'>
										Unlimited Everything
									</Text>
									<List.Root spacing='3'>
										<List.Item fontSize='md' color='gray.800' display='flex' alignItems='center' gap='3' fontWeight='500'>
											<FiCheck size={22} color='#22863a' style={{flexShrink: 0}} />
											🚀 Unlimited simplifications
										</List.Item>
										<List.Item fontSize='md' color='gray.800' display='flex' alignItems='center' gap='3' fontWeight='500'>
											<FiCheck size={22} color='#22863a' style={{flexShrink: 0}} />
											All simplification levels
										</List.Item>
										<List.Item fontSize='md' color='gray.800' display='flex' alignItems='center' gap='3' fontWeight='500'>
											<FiCheck size={22} color='#22863a' style={{flexShrink: 0}} />
											💬 Q&A with follow-ups
										</List.Item>
										<List.Item fontSize='md' color='gray.800' display='flex' alignItems='center' gap='3' fontWeight='500'>
											<FiCheck size={22} color='#22863a' style={{flexShrink: 0}} />
											Up to 5,000 characters per text
										</List.Item>
									</List.Root>
								</VStack>{" "}
								<Button
									width='100%'
									bg='purple.600'
									color='white'
									_hover={{bg: "purple.700", transform: "scale(1.02)"}}
									fontWeight='700'
									fontSize='md'
									py='7'
									borderRadius='lg'
									transition='all 0.2s'
									boxShadow='0 4px 15px rgba(147, 51, 234, 0.3)'
								>
									🎯 Upgrade to Premium
								</Button>{" "}
								<Text fontSize='sm' color='gray.700' textAlign='center' fontWeight='500'>
									⏰ Coming soon - Early access available
								</Text>
							</VStack>
						</Box>
					</VStack>
				</Flex>
			</VStack>
		</Box>
	)
}

export default PricingSection
