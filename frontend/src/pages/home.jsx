import {Flex} from "@chakra-ui/react"
import Top from "../containers/Top"
import Middle from "../containers/Middle"
import Bottom from "../containers/Bottom"

function Home() {
	return (
		<Flex direction='column' minH='100vh' bg='white'>
			<Top />
			<Middle />
			<Bottom />
		</Flex>
	)
}

export default Home
