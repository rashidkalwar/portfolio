import Head from "next/head";
import { Button } from "@mantine/core";
import ThemeToggler from "../src/components/ThemeToggler";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen flex justify-center items-center">
        <ThemeToggler />

        <h2 className="text-blue-500 dark:text-rose-500">Hello World!</h2>
      </main>

      <footer></footer>
    </div>
  );
}