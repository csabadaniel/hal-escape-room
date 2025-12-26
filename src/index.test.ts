
import { describe, it, expect } from 'vitest';
import request from 'supertest';
import express, { Request, Response } from 'express';
import halson from 'halson';

// Minimal app for testing (HAL-compliant)
const app = express();
app.get('/', (req: Request, res: Response) => {
  const halResponse = halson({
    message: 'HAL Escape Room is running!'
  })
    .addLink('self', '/')
    .addLink('docs', 'https://stateless.group/hal_specification.html');
  res.json(halResponse);
});

describe('GET /', () => {
  it('should return a HAL-compliant welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('message', 'HAL Escape Room is running!');
    expect(res.body).toHaveProperty('_links');
    expect(res.body._links).toHaveProperty('self');
    expect(res.body._links.self).toHaveProperty('href', '/');
  });
});
