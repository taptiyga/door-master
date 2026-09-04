import styles from "./MenuButton.module.css";

export function MenuButton({ onToggle }) {
  return (
    <button
      className={styles.button}
      onClick={onToggle}
      aria-label="Открыть меню"
      type="button"
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
}
