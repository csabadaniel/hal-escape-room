
import express, { Request, Response } from 'express';
import halson from 'halson';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
	const halResponse = halson({
		message: 'HAL Escape Room is running!'
	})
		.addLink('self', '/');
	res.json(halResponse);
});


if (require.main === module) {
	app.listen(PORT, () => {
		console.log(`HAL Escape Room is running on port ${PORT}`);
	});
}

export default app;
