import express from "express"
import routes from "./routes/index.route"

const app = express()
const port = 3000

app.use("/api", routes)

app.listen(port, () => {
  console.log(`Server has been started on http://localhost:${port}`)
})

export { app }
