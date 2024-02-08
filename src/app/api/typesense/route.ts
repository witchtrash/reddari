import type { NextRequest } from 'next/server';

import { indexData, initializeCollections } from '@app/functions/typesense';

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

  // Create collections if they don't exist
  await initializeCollections();

  // Index all the data
  await indexData();

  return Response.json({
    success: true,
  });
};
