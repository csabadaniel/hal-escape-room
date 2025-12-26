
import express, { Request, Response } from 'express';
import halson from 'halson';

const app = express();
const PORT = process.env.PORT || 3000;

app.options('/', (req: Request, res: Response) => {
	res.set('Allow', 'GET, OPTIONS');
	const halResponse = halson({}).addLink('self', '/');
	res.type('application/hal+json').json(halResponse);
});

if (require.main === module) {
	app.listen(PORT, () => {
		console.log(`HAL Escape Room is running on port ${PORT}`);
	});
}

export default app;
