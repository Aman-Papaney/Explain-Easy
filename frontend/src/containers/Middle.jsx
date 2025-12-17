import {useEffect, useState} from "react"

// import {useState} from "react"
import {Box, Flex, Text, Textarea, Button, Spinner, VStack, HStack, Input, Badge} from "@chakra-ui/react"
import {Switch} from "@chakra-ui/react"

import {api} from "../utils/apiService"

// import HowToUse from "../components/HowToUse"
// import WhyThisHelps from "../components/WhyThisHelps"

const Middle = () => {
	const [compText, setCompText] = useState("")

	const [simpText, setSimpText] = useState("")
	const [level, setLevel] = useState("10-year-old")


	const [useBullets, setUseBullets] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [isQuestionLoading, setIsQuestionLoading] = useState(false)
	const [question, setQuestion] = useState("")
	const [keyFacts, setKeyFacts] = useState([])
	const [error, setError] = useState("")
	const [successMessage, setSuccessMessage] = useState("")
	const [simplificationsToday, setSimplificationsToday] = useState(0)
	const DAILY_LIMIT = 5
	const CHAR_LIMIT = 1000
	//const SAMPLE_TEXT =
		"Synergistic cognitive frameworks, weaving together abstract theoretical constructs and subtly conflicting assumptions, quietly reshape what initially appear to be fixed, self-evident truths, while at the same time producing lingering ambiguity that resists any quick or straightforward interpretation, thereby forcing readers to continuously question their earlier conclusions, reconsider hidden implications within each clause, and navigate a dense network of intertwined ideas and references that do not immediately reveal their purpose, ultimately transforming a seemingly ordinary sentence into a slow, demanding puzzle that requires patience, prior knowledge, and careful rereading before its full, underlying meaning can be even partially understood."

	const getSimpText = async () => {
		if (!compText.trim()) {
			setError("Please paste some text first.")
			return
		}

		if (simplificationsToday >= DAILY_LIMIT) {
			setError("You've reached your daily limit. Come back tomorrow for more simplifications!")
			return
		}

		setError("")
		setSuccessMessage("")
		setIsLoading(true)

		try {
			//await new Promise((r) => setTimeout(r, 2000))
			const data = {
				compText,
				useBullets,
				level,
			}
			const response = await api.post("/api/simplify", data).then((response) => {
				//console.log(response.data)
				setSimpText(response.data.simpleText)
			})

			setSimplificationsToday((prev) => prev + 1)
			setKeyFacts(["Simplified", level, useBullets ? "Bulleted" : "Paragraphs"])
			setSuccessMessage("Text simplified successfully!")
		} catch (err) {
			setError("Something went wrong. Please try again.  " + err)
		} finally {
			setIsLoading(false)
		}
	}

	// const handleSampleText = () => {
	// 	const sampleText = SAMPLE_TEXT
	// 	setCompText(sampleText)
	// 	setError("")
	// }

	const copyToClipboard = () => {
		navigator.clipboard.writeText(simpText)
		setSuccessMessage("Copied to clipboard!")
		setTimeout(() => setSuccessMessage(""), 3000)
	}

	const handleAskQuestion = async () => {
		if (!question.trim()) return

		setError("")
		setSuccessMessage("")
		setIsQuestionLoading(true)

		try {
			await new Promise((r) => setTimeout(r, 1500))
			//console.log("Question asked:", question)
			setSuccessMessage("Question received! Our AI will respond soon.")
			setQuestion("")
		} catch (err) {
			setError("Failed to send question. Please try again.")
		} finally {
			setIsQuestionLoading(false)
		}
	}

	return (
		<Box flex='1' py='0' px='0' bg='gray.50'>
			<VStack spacing='0' align='stretch'>
				{/* TOP HERO SECTION - Full Width */}
				<Box bg='gray.50' borderBottomWidth='0px' borderBottomColor='gray.200' py='8' px='6'>
					<VStack maxW='1400px' mx='auto' align='center' textAlign='center'>
						<VStack align='center'>
							<Text fontSize={{base: "2xl", md: "3xl", lg: "4xl"}} fontWeight='900' color='black' lineHeight='tight' maxW='1000px'>
								{/* Turn Expert Language Into Clear Meaning */}
								Make Sense of Anything You Read
							</Text>
						</VStack>
					</VStack>
				</Box>

				{/* MAIN CONTENT - Cards */}
				<Box py='12' px='6' bg='gray.50'>
					<VStack maxW='1400px' mx='auto' spacing='16' align='stretch'>
						{/* How to Use Section */}
						{/* <HowToUse /> */}

						{/* Cards Section - Two Column Layout */}
						<Flex gap='12' direction={{base: "column", lg: "row"}} align='stretch' minH={{lg: "650px"}} mb='40px' justifyContent='space-evenly' alignItems='center'>
							{/* Left Column - Hero Content */}
							<VStack flex='1'>


								{/* Sample Text Card */}
								<Box bg='white' borderRadius='lg' height='100%' p='6' borderWidth='1px' borderColor='gray.200' shadow='sm' width='100%'>
									<VStack spacing='4' align='stretch'>

										<VStack spacing='2' align='start' width='100%' flex='1'>
											{/* Label */}
											<Text fontSize='lg' fontWeight='700' color='black'>
												Paste your text to simplify
											</Text>
											<Textarea
												placeholder='Paste your complex text here...'
												value={compText}
												onChange={(e) => {
													if (e.target.value.length <= CHAR_LIMIT) {
														setCompText(e.target.value)
													}
												}}
												minH='300px'
												maxH='300px'
												resize='vertical'
												borderColor={error ? "red.400" : "gray.300"}
												borderRadius='md'
												fontSize='md'
												color='black'
												fontFamily='system-ui'
												_placeholder={{color: "gray.400"}}
												_focus={{
													borderColor: error ? "red.500" : "blue.500",
													boxShadow: error ? "0 0 0 2px rgba(245, 101, 101, 0.1)" : "0 0 0 2px rgba(66, 153, 225, 0.1)",
												}}
											/>
											<Flex justify='space-between' align='center' width='100%'>
												<Text fontSize='xs' color='gray.600'>
													{compText.length} / {CHAR_LIMIT} characters
												</Text>
												{compText.length > CHAR_LIMIT * 0.9 && (
													<Text fontSize='xs' color='orange.600' fontWeight='600'>
														Approaching limit
													</Text>
												)}
											</Flex>
										</VStack>

										{/* Level Dropdown */}
										<VStack spacing='2' align='start' flex='1'>
											<Text fontSize='xs' fontWeight='600' color='gray.700' textTransform='uppercase' letterSpacing='0.5px'>
												Domain
											</Text>
											<Box
												as='select'
												value={level}
												onChange={(e) => setLevel(e.target.value)}
												width='100%'
												borderWidth='1px'
												borderColor='gray.300'
												borderRadius='md'
												px='3'
												py='2'
												fontSize='sm'
												color='black'
												bg='white'
												cursor='pointer'
												fontWeight='500'
												_focus={{
													outline: "none",
													borderColor: "blue.500",
													boxShadow: "0 0 0 2px rgba(66, 153, 225, 0.1)",
												}}
											>
												<option value='beginner'>General</option>
												<option value='10-year-old'>Medical</option>
												<option value='simple'> legal</option>
											</Box>
										</VStack>

										{/* Messages Area */}
										{error && (
											<Box bg='red.50' borderLeft='4px solid' borderLeftColor='red.500' p='3' borderRadius='md' width='100%'>
												<Text fontSize='xs' color='red.700' fontWeight='600'>
													⚠️ {error}
												</Text>
											</Box>
										)}
										{successMessage && !error && (
											<Box bg='green.50' borderLeft='4px solid' borderLeftColor='green.500' p='3' borderRadius='md' width='100%'>
												<Text fontSize='xs' color='green.700' fontWeight='600'>
													✓ {successMessage}
												</Text>
											</Box>
										)}

										{/* Privacy Note */}
										<Box bg='blue.50' p='3' borderRadius='md' borderWidth='1px' borderColor='blue.200' width='100%'>
											<Text fontSize='xs' color='blue.700' fontWeight='500' lineHeight='relaxed'>
												🔒 <strong>Privacy:</strong> We don't store your text. Your data is processed securely and deleted after use.
											</Text>
										</Box>
									</VStack>
								</Box>
							</VStack>

							{/* Simplify Button */}
							<Button
								onClick={getSimpText}
								isDisabled={isLoading || !compText.trim() || simplificationsToday >= DAILY_LIMIT}
								width='15%'
								bg='blue.600'
								color='white'
								_hover={{bg: "blue.700"}}
								_disabled={{
									bg: "gray.300",
									cursor: "not-allowed",
								}}
								size='lg'
								fontSize='md'
								fontWeight='700'
								py='7'
								borderRadius='md'
								mt='2'
							>
								{isLoading ? (
									<HStack spacing='2'>
										<Spinner size='sm' />
										<Text>Simplifying...</Text>
									</HStack>
								) : simplificationsToday >= DAILY_LIMIT ? (
									"Daily limit reached"
								) : (
									"Simplify text"
								)}
							</Button>

							{/* Right Column - Main Tool Card */}
							<VStack flex='1'>
								<Box bg='white' borderRadius='lg' p='8' width='100%' shadow='sm' borderWidth='1px' borderColor='gray.200'  display='flex' flexDirection='column'>
									<VStack spacing='6' align='stretch' h='100%' justify='space-between'>
										{/* Label */}
										<HStack>
										<Text fontSize='lg' fontWeight='700' color='black'>
											Get your simlified text
										</Text>
										<Button size='sm' variant='ghost' color='blue.600' _hover={{bg: "blue.50"}} onClick={copyToClipboard} fontSize='md' fontWeight='600'>
											Copy text
										</Button>
										</HStack>

										<Box
												bg='blue.50'
												borderRadius='md'
												p='5'
												minH='450px'
												maxH='450px'
												overflowY='auto'
												borderLeftWidth='4px'
												borderLeftColor='blue.600'
												fontSize='md'
												color='gray.900'
												lineHeight='1.8'
												whiteSpace='pre-wrap'
												wordBreak='break-word'
												fontFamily='system-ui'
												fontWeight='500'
											>
												{simpText}
											</Box>

									</VStack>
								</Box>
							</VStack>
						</Flex>

						{/* Why This Helps Section */}
						{/* <WhyThisHelps /> */}

						{/* Results Section */}
						{simpText ? (
							<VStack spacing='6' align='stretch'>

								{/* Question Section */}
								<Box bg='blue.50' mt='8' borderRadius='lg' p='8' shadow='sm' borderWidth='1px' borderColor='blue.200' borderLeftWidth='4px' borderLeftColor='blue.600' width='100%'>
									<VStack spacing='4' align='stretch'>
										<VStack spacing='1' align='start'>
											<Text fontSize='md' fontWeight='700' color='black'>
												💡 Still confused? Ask a follow-up question. (Coming Soon)
											</Text>
											<Text fontSize='xs' color='gray.600'>
												Our AI assistant will help clarify any part of the simplified text.
											</Text>
										</VStack>
										<HStack spacing='3' width='100%'>
											<Input
												placeholder='Ask a question about the simplified text...'
												value={question}
												onChange={(e) => setQuestion(e.target.value)}
												onKeyPress={(e) => e.key === "Enter" && handleAskQuestion()}
												borderColor='blue.300'
												borderRadius='md'
												fontSize='sm'
												color='black'
												bg='white'
												_placeholder={{color: "gray.400"}}
												_focus={{
													borderColor: "blue.500",
													boxShadow: "0 0 0 2px rgba(66, 153, 225, 0.1)",
												}}
												py='5'
											/>
											<Button
												onClick={handleAskQuestion}
												isDisabled={!question.trim() || isQuestionLoading}
												bg='blue.600'
												color='white'
												_hover={{bg: "blue.700"}}
												_disabled={{bg: "gray.300", cursor: "not-allowed"}}
												fontWeight='600'
												borderRadius='md'
												px='6'
												minW='max-content'
											>
												{isQuestionLoading ? <Spinner size='sm' /> : "Ask"}
											</Button>
										</HStack>
									</VStack>
								</Box>
							</VStack>
						) : (
							<Box bg='white' borderRadius='lg' p='12' shadow='sm' borderWidth='1px' borderColor='gray.200' width='100%' textAlign='center'>
								<VStack spacing='3'>
									<Text fontSize='lg' fontWeight='700' color='gray.400'>
										✨ No text simplified yet
									</Text>
									<Text fontSize='sm' color='gray.500'>
										Siplify some text above then ask questions here.
									</Text>
								</VStack>
							</Box>
						)}
					</VStack>
				</Box>
			</VStack>
		</Box>
	)
}

export default Middle
