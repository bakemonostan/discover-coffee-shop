import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Banner buttonText={'View Stores Nearby'} />
        <div className={styles.heroImage}>
          <Image
            alt='hero image'
            src='/static/hero-image.png'
            width={700}
            height={400}
          />
        </div>
      </main>
    </div>
  );
}

