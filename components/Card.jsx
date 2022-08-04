import styles from "../styles/card.module.sass";

export default function Card({ title, tags, mix_price, mix_master_price }) {
  return (
    <div className={styles.card}>
      <span className="title">
        {title}
        <br />
        Chanson{title > 1 ? "s" : ""}
      </span>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={`tag-text ${styles.tag}`}>
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.prices}>
        <div className={styles["prices-items"]}>
          <span className="subtitle">Mix</span>
          <span className="price">{mix_price}</span>
        </div>
        <div className={styles["prices-items"]}>
          <span className="subtitle">Mix & Master</span>
          <span className="price">{mix_master_price}</span>
        </div>
      </div>
    </div>
  );
}
