import express from "express"
import "dotenv/config"

import getSimpleText from "./controllers/toSimpleText.js"

const app = express()
const port = 3000
// For parsing application/json
app.use(express.json())
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))

app.get("/ping", (req, res) => {
	res.send("pong")
})

app.post("/api/simplify", async (req, res) => {
	const bodyData = req.body
	//console.log(bodyData);

	const compText = bodyData.compText
	// const isBullets = bodyData.useBullets // Used for proccesing
	const simpLevel = bodyData.level

	try {
		const {simpleText, msg} = await getSimpleText(compText, simpLevel)

		const result = {
			compText,
			simpLevel,
			simpleText,
		}
		//console.log("RESULT" + JSON.stringify(result))

		res.send(result)
	} catch (error) {
		// Handle errors if getSimpleText fails or any other issue
		console.error("Error during text simplification:", error)
		res.status(500).send({error: "Failed to simplify text"})
	}
})

app.listen(port, () => {
	console.log(`App listening on http://127.0.0.1:${port}/ping`)
})
