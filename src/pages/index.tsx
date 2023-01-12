import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { data: sessionData } = useSession();
  console.log('data', sessionData);
  // const signOut = async () => {

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center bg-gradient-to-br from-rose-500 to purple-600">
        <h1 className="text-4xl font-bold text-white">Welcome to T3 App!</h1>
        {!sessionData && (
          <button className="rounded-full bg-black/10 px-10 py-3 font-semibold text-black no-underline transition hover:bg-black/20" onClick={sessionData ? () => signOut() : () => signIn('google')}>sign in with Google</button>
        )}
      </div>
    </>
  );
};

export default Home;
