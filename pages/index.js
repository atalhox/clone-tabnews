import styles from "./index.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <img
        src="/assets/under-construction.gif"
        alt="Em construção"
        className={styles.gif}
      />

      <h1 className={styles.title}>Você me pegou!</h1>
      <p className={styles.subtitle}>
        Enquanto a página está em construção, por que você não dá uma conferida
        nas minhas redes?
      </p>
      <p className={styles.author}>Luis Felipe Brum — Software Engineer</p>

      <p className={styles.link}>
        🌐{" "}
        <a
          href="https://github.com/atalhox"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/atalhox
        </a>
      </p>
      <p className={styles.link}>
        🔗{" "}
        <a
          href="https://linkedin.com/in/luisfelipebrum"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/luisfelipebrum
        </a>
      </p>
    </div>
  );
}

export default Home;
