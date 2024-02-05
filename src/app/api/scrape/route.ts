import { scrape } from '@reddari/functions/scrape';
import { store } from '@reddari/functions/store';
import type { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json(
      {
        message: 'Unauthorized',
        success: false,
      },
      {
        status: 401,
      },
    );
  }

  const data = await scrape({
    type: 'red',
  });
  await store({ data });

  return Response.json({ data });
};
