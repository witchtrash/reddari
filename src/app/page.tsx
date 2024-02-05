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
      <h1 className={css()}>reddari</h1>
      <hr />
      {map(data, (d) => (
        <>
          <div key={d.id}>
            <p key={d.id}>{d.productName}</p>
            <span>{d.price.toString()}</span>
            <span> | </span>
            <span>{d.category}</span>
          </div>
          <hr />
        </>
      ))}
    </main>
  );
};

export default Home;
