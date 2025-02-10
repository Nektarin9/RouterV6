import dotenv from 'dotenv';
import express from 'express';
import chalk from 'chalk';
import mongoose from 'mongoose';
import routes from './routes';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';


const port = 4000;
const app = express();

dotenv.config()


app.use(
	cors({
		origin: ['http://localhost:8000', "http://192.168.1.65:8000"],
	}),
);

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../../Frontend/dist")));

app.use("/", routes);

// Маршрут для индексного HTML файла
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "../../Frontend/dist", "index.html"));
});






// @ts-ignore
mongoose.connect(process.env.DB_CONNECTION_STRING).then(async () => {
	app.listen(port, () => {
		console.log(chalk.green(`Server has been started on port ${port}...`));
	});
});
