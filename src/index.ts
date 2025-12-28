import express, { Request, Response } from 'express';
import halson from 'halson';
import { status, header, method } from '@poppanator/http-constants';

export const HAL_CONTENT_TYPE = 'application/hal+json';

const app = express();
const PORT = process.env.PORT || 3000;

app.options('/', (req: Request, res: Response) => {
	res.set(header.Allow, `${method.Get}, ${method.Options}`);
	const halResponse = halson({}).addLink('self', '/');
	res.status(status.Ok).type(HAL_CONTENT_TYPE).json(halResponse);
});

app.get('/', (req: Request, res: Response) => {
	res.status(status.Unauthorized)
		.type(HAL_CONTENT_TYPE)
		.json(halson({ error: 'Access denied' }).addLink('self', '/'));
});

if (require.main === module) {
	app.listen(PORT, () => {
		console.log(`HAL Escape Room is running on port ${PORT}`);
	});
}

export default app;
