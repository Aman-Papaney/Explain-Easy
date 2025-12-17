import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {Box} from "@chakra-ui/react"
import Home from "./pages/home"
// import Home2 from "./pages/home2"
//import Home from "./pages/home"
//import Error404 from "./pages/error404"

function App() {
	return (
		<BrowserRouter>
			<Box minH='100vh' bg='white'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path="*" element={<Navigate to="/" />} />
					{/* <Route path="*" element={<Error404 />} /> */}
				</Routes>
			</Box>
		</BrowserRouter>
	)
}

export default App
