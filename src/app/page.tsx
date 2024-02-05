import { Fragment } from 'react';
import { PrismaClient } from '@prisma/client';
import { map } from 'lodash';

const Home = async () => {
  const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    orderBy: {
      price: 'asc',
    },
  });

  return (
    <main>
      <h1 className="text-3xl">reddari</h1>
      <hr />
      {map(data, (d) => (
        <Fragment key={d.id}>
          <div>
            <p>{d.productName}</p>
            <span>{d.price.toString()}</span>
            <span> | </span>
            <span>{d.category}</span>
          </div>
          <hr />
        </Fragment>
      ))}
    </main>
  );
};

export default Home;
