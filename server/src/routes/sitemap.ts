import * as express from 'express';
import * as path from 'path';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>http://www.ikigaiadv.com/</loc>
      <lastmod>2018-08-13</lastmod>
      <priority>1</priority>
   </url>
   <url>
      <loc>http://www.ikigaiadv.com/client</loc>
      <lastmod>2018-08-13</lastmod>
      <priority>0.8</priority>
   </url>
   <url>
      <loc>http://www.ikigaiadv.com/job</loc>
      <lastmod>2018-08-13</lastmod>
      <priority>0.8</priority>
   </url>
</urlset>
`;

export default express.Router()
	.get('/sitemap.xml', (req, res) => {
		res.end(sitemap);
	});
