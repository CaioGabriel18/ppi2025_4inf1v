import styles from "./Header.module.css";
import img from "../assets/imgs/pomodoro.png";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        <img
          src={img}
          alt="Foco, Força e Fé"
        />
      </div>
      <h1>Foco, Força, Fé</h1>
    </div>
  );
}