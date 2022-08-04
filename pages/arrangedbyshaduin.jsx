import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/arrangedbyshaduin.module.sass";
import Card from "../components/Card";
import { useState } from "react";

export default function ArrangedBysShaduin() {
  const [copy, setCopy] = useState(false);

  const copyMail = () => {
    navigator.clipboard.writeText("arrangedbyshaduin@gmail.com");
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  return (
    <div className="">
      <Head>
        <title>Arranged By Shaduin : Mix & Mastering</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles["header-inner"]}>
          <div className={styles["header-logo"]}>
            <span className="tag-text">arrangedby</span>
            <span className={styles["header-img"]}>
              <Image src="/logoshaduin.png" layout="fill" />
            </span>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles["card-container"]}>
          <Card
            title="1"
            tags={["- de 15 tracks", "2 revisions"]}
            mix_price="250 €"
            mix_master_price="300 €"
          />
          <Card
            title="2"
            tags={["- de 15 tracks", "2 revisions"]}
            mix_price="450 €"
            mix_master_price="500 €"
          />
          <Card
            title="1"
            tags={["+ de 15 tracks", "2 revisions"]}
            mix_price="350 €"
            mix_master_price="400 €"
          />
          <Card
            title="2"
            tags={["+ de 15 tracks", "2 revisions"]}
            mix_price="650 €"
            mix_master_price="700 €"
          />

          <div className={styles.card}>
            <span className="title">Mastering</span>
            <div className={styles.prices}>
              <div className={styles["prices-items"]}>
                <span className="subtitle">1 chanson</span>
                <span className="price">100 €</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <span className="subtitle">
              Pour plus de chansons
              <br />
              <br /> ou
              <br />
              <br />
              Session d’enregistement
              <br />
              <br /> ou
              <br />
              <br /> Autres demandes
            </span>

            <span className="price">Me contacter par message</span>
          </div>
        </div>
        <div className={styles.references}>
          <span className="title">Reférences</span>

          <div className={styles["references-songs"]}>
            <iframe
              style={{ borderRadius: 8 + "px" }}
              src="https://open.spotify.com/embed/track/1GyMoMmSOIeB9RGyc3Njfj?utm_source=generator&theme=0"
              width="323px"
              height="80"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>

            <iframe
              style={{ borderRadius: 8 + "px" }}
              src="https://open.spotify.com/embed/track/0n8YZ2ERnpcSuffkFlji22?utm_source=generator&theme=0"
              width="323px"
              height="80"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>

            <iframe
              style={{ borderRadius: 8 + "px" }}
              src="https://open.spotify.com/embed/track/6rMN2bgtQpQ93wOBsXhE7G?utm_source=generator&theme=0"
              width="323px"
              height="80"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>

          <span className="tag-text">Plus à venir ...</span>
        </div>
      </main>
      <footer className={styles.footer}>
        <Link href="https://instagram.com/shaduin">
          <span className={`price ${styles["footer-instagram"]}`}>
            <span className={styles.icon}>
              <Image src="/instagram-icon.png" layout="fill" />
            </span>
            Instagram
          </span>
        </Link>

        <Link href="mailto:arrangedbyshaduin@gmail.com">
          <span
            onClick={(e) => {
              copyMail();
              e.preventDefault();
            }}
            className={`price ${styles["footer-mail"]}`}
          >
            <span className={styles.icon}>
              <Image src="/mail-icon.png" layout="fill" />
            </span>
            {copy ? "Copié" : "Mail"}
          </span>
        </Link>
      </footer>
    </div>
  );
}
