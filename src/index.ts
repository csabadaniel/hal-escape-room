import express, { Request, Response } from 'express';
import halson from 'halson';
import { status, header, method } from '@poppanator/http-constants';
import basicAuth from 'basic-auth';

export const HAL_CONTENT_TYPE = 'application/hal+json';

const app = express();
const PORT = process.env.PORT || 3000;

function isBasicAuthValid(req: Request): boolean {
	const credentials = basicAuth(req);
	return credentials?.name === 'john.smith@example.com' && credentials?.pass === 'S3cr3t!';
}

app.options('/', (req: Request, res: Response) => {
	res.set(header.Allow, `${method.Get}, ${method.Options}`);
	const halResponse = halson({}).addLink('self', '/');
	res.status(status.Ok).type(HAL_CONTENT_TYPE).json(halResponse);
});

app.get('/', (req: Request, res: Response) => {
	if (!isBasicAuthValid(req)) {
		return res.status(status.Unauthorized)
			.type(HAL_CONTENT_TYPE)
			.json(halson({ error: 'Access denied' }).addLink('self', '/'));
	} else {
		return res.status(status.Ok)
			.type(HAL_CONTENT_TYPE)
			.json(
				halson({
					message: 'Congratulations! You have successfully solved the puzzle.'
				})
					.addLink('self', '/')
					.addEmbed('services', 
						[ 1, 2, 3 ].map(id =>
							halson({
								id: `service-${id}`,
								status: 'running'
							}).addLink('self', `/services/service-${id}`)
						)
					)
			);
	};
});

if (require.main === module) {
	app.listen(PORT, () => {
		console.log(`HAL Escape Room is running on port ${PORT}`);
	});
}

export default app;
