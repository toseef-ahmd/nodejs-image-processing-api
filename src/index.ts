import express from "express"
import routes from "./routes/index.route"
import bodyParser from "body-parser"
import { index } from "./controllers/index.controller";


const app = express();
const port = 8000;


app.use('/api', routes);


app.listen(port, () => {
    console.log(`Server has been started on http://localhost:${port}`)
})


export {app}
