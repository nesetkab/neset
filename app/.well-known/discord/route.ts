import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('dh=f2795d9b64c232ca163d2649bee7a6b0bdebfff7', {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}