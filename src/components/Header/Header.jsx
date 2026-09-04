import { Menu } from "../Menu/Menu";
import { MenuButton } from "../MenuButton/MenuButton";
import styles from "./Header.module.css";
import { useState } from "react";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleMenuToggle() {
    setIsMenuOpen((prev) => !prev);
  }
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#home">
            🚪<span>DOOR MASTER</span>
          </a>
        </div>
        <Menu isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <MenuButton onToggle={handleMenuToggle} />
      </div>
    </div>
  );
}
