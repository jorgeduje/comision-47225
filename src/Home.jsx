
import styles from "./Home.module.css"

export const Home = () => {
  return (
    <div>
      <h1 style={{ color: "red", fontSize: "2rem" }}>pepito</h1>
      <h2 className={styles.title}>Este es el titulo del home</h2>

      <button>sumar</button>
    </div>
  );
};
