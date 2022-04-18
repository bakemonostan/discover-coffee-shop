import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CoffeeStore = () => {
  const router = useRouter();
  const query = router.query;

  console.log(router);
  console.log('query', query);

  return (
    <div>
      <Head>
        <title>{query.id}</title>
      </Head>
      Coffee Store Page: {query.id} <br />
      <Link href='/'>
        <a>Back to home</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
