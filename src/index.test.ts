import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app, { HAL_CONTENT_TYPE } from './index';
import { status, header, method } from '@poppanator/http-constants';

function expectHalResponse(res: any, href: string) {
  expect(res.header['content-type']).toContain(HAL_CONTENT_TYPE);
  expect(res.body).toHaveProperty('_links');
  expect(res.body._links).toHaveProperty('self');
  expect(res.body._links.self).toHaveProperty('href', href);
}

describe('OPTIONS /', () => {
  it('should allow GET and OPTIONS and return a HAL-compliant response', async () => {
    const res = await request(app).options('/');
    expect(res.status).toBe(status.Ok);
    expect(res.header[header.Allow.toLowerCase()]).toBeDefined();
    expect(res.header[header.Allow.toLowerCase()].split(',').map((m: string) => m.trim()).sort()).toEqual([
      method.Get,
      method.Options
    ]);
    expectHalResponse(res, '/');
  });
});

describe('GET / (unauthenticated)', () => {
  it('should return access denied in HAL format', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(status.Unauthorized);
    expectHalResponse(res, '/');
    expect(res.body).toHaveProperty('error');
    expect(res.body.error.toLowerCase()).toContain('access denied');
  });
});
