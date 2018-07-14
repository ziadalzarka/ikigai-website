import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import webRoutes from './routes/website';

const PORT = process.env.WEB_PORT;

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(webRoutes);

app.listen(PORT, () => {
	console.log(`App is running at http://localhost:${PORT}`);
});
