import { describe, it, expect } from 'vitest';
import request from 'supertest';
import express, { Request, Response } from 'express';

// Minimal app for testing
const app = express();
app.get('/', (req: Request, res: Response) => {
  res.send('HAL Escape Room is running!');
});

describe('GET /', () => {
  it('should return the welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('HAL Escape Room is running!');
  });
});
