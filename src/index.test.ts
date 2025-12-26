
import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from './index';

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
