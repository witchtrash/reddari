import { PrismaClient } from '@prisma/client';
import { map } from 'lodash';
const Home = async () => {
  const prisma = new PrismaClient();

  const data = await prisma.product.findMany();

  return (
    <main>
      <h1>reddari</h1>
      <hr />
      {map(data, (d) => (
        <p key={d.id}>{d.productName}</p>
      ))}
    </main>
  );
};

export default Home;
