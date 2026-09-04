import styles from "./MenuItem.module.css";
export function MenuItem({ item, href, onClose }) {
  return (
    <li className={styles.item}>
      <a href={href} className={styles.link} onClick={onClose}>
        {item}
      </a>
    </li>
  );
}
