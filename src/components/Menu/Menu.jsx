import { MenuItem } from "../MenuItem/MenuItem";
import styles from "./Menu.module.css";

export function Menu({ isMenuOpen, onClose }) {
  const menuArr = [
    { name: "Главная", href: "#home", id: 1 },
    { name: "Услуги", href: "#services", id: 2 },
    { name: "Калькулятор", href: "#calculator", id: 3 },
    { name: "О нас", href: "#about", id: 4 },
    { name: "Контакты", href: "#contacts", id: 5 },
  ];
  return (
    <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
      <ul className={styles.list}>
        {menuArr.map((item) => (
          <MenuItem
            item={item.name}
            key={item.id}
            href={item.href}
            onClose={onClose}
          />
        ))}
      </ul>
    </nav>
  );
}
