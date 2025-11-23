import "./App.css"

import {Button, HStack, Textarea} from "@chakra-ui/react"
import {Flex, Box} from "@chakra-ui/react"
import { useEffect, useState } from "react"

// import Navbar from "./components/ui/Navbar"

function App() {

	const [compText, setCompText] = useState('')
	const [simpText, setSimpText] = useState('')

	const getSimpText = () => {
		setSimpText(compText)
	}

	return (
		<>
			<Flex gap='12' mt='4rem' direction='row' align='center'>
				<Textarea resize='none' ml='8rem' height='40rem' placeholder="Enter complex text here" value={compText} onChange={(e) => setCompText(e.target.value)}/>
				<Button fontSize='20px' onClick={() => getSimpText()}>Simplify</Button>
				<Textarea resize='none' readOnly mr='8rem' height='40rem' placeholder="Get simplified text here" value={simpText}/>
			</Flex>
		</>
	)
}

export default App
