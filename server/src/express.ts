import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as compression from 'compression';
import * as fileUpload from 'express-fileupload';

import sitemapRoute from './routes/sitemap';
import webRoutes from './routes/website';
import uploadRoutes from './routes/upload';
import renderer from './routes/rendertron';

const PORT = process.env.WEB_PORT;

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(fileUpload());
app.use(compression());
app.use(sitemapRoute);
app.use(renderer);
app.use(uploadRoutes);
app.use(webRoutes);

app.listen(PORT, () => {
	console.log(`App is running at http://localhost:${PORT}`);
});
