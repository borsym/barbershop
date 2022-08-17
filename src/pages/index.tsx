import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import LandingPage from '../components/LandingPage';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta
          name="description"
          content="This is the landingpage for the barbershop"
        />
      </Head>
      <LandingPage />
    </>
  );
};

export default Home;
