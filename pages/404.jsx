import Head from "next/head";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>Glitch Kids: Under Construction</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="default">
        <p className="title">🚧</p>
        <p className="title">Impatient ?</p>
        <p className="price">
          Glitch Kids
          <br />
          🥷🏾 C'est pour bientôt ne t'inquiete pas 🥷🏾
        </p>
      </div>
    </div>
  );
}
