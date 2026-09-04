import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="home">
      <div className={styles.container}>
        <h1 className={styles.title}>Профессиональная установка дверей</h1>

        <p className={styles.description}>
          Профессиональная установка межкомнатных и входных дверей. Качественный
          монтаж, точная врезка фурнитуры и аккуратная работа.
        </p>

        <div className={styles.buttons}>
          <a href="#calculator" className={styles.button}>
            Рассчитать стоимость
          </a>

          <a href="#services" className={styles.button}>
            Наши услуги
          </a>
        </div>
      </div>
    </section>
  );
}
