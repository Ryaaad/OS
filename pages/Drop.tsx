import React from "react";
import Head from "next/head";
import DropZone from "../components/DropZone";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Drag And Drop File Upload</title>
        <meta name="description" content="Nextjs drag and drop file upload" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <DropZone />
      </main>
    </div>
  );
}