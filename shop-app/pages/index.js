import styles from "@/styles/Home.module.css";
import Head from "next/head";
import dynamic from "next/dynamic";
import Dashboard from "@/components/Dashboard";

const Nav = dynamic(() => import("main/nav"));
const Footer = dynamic(() => import("main/footer"));
export default function Home() {
  return (
    <>
      <Head>
        <title>Shop App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Nav />
        <p>Welcome to Shop app</p>
        <Dashboard />
        <Footer />
      </main>
    </>
  );
}
