import { scrape } from '@app/functions/scrape';
import { store } from '@app/functions/store';
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

  const red = await scrape({
    type: 'red',
  });
  const white = await scrape({
    type: 'white',
  });
  const rose = await scrape({
    type: 'rose',
  });
  const bubbly = await scrape({
    type: 'bubbly',
  });

  await store({ data: [...red, ...white, ...rose, ...bubbly] });

  return Response.json({
    success: true,
  });
};
