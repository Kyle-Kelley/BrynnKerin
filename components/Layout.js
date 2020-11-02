import React from "react";
import Head from "next/head";
import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <div className="whole">
      <Head>
        <title>Brynn's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container">{children}</main>
      <style jsx>{`
        .whole {
          background: blanchedAlmond;
          height: 100vh;
        }
        .container {
          background: lightgreen;
          color: #1815e6;
          width: 85vw;
          // height: 100%;
          margin: 50px auto;
          border-radius: 10px;
          text-align: center;
        }

        header h1 a {
          color: #000;
          text-decoration: none;
        }

        main {
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        a,
        a:visited {
          color: blue;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
