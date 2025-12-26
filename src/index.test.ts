
import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from './index';

describe('OPTIONS /', () => {
  it('should allow GET and OPTIONS and return a HAL-compliant response', async () => {
    const res = await request(app).options('/');
    expect(res.status).toBe(200);
    expect(res.header['allow']).toBeDefined();
    expect(res.header['allow'].split(',').map(m => m.trim()).sort()).toEqual(['GET', 'OPTIONS']);
    expect(res.header['content-type']).toMatch(/application\/hal\+json/);
    expect(res.body).toHaveProperty('_links');
    expect(res.body._links).toHaveProperty('self');
    expect(res.body._links.self).toHaveProperty('href', '/');
  });
});
