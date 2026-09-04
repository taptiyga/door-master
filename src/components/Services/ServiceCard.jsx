import styles from "./Services.module.css";

export function ServiceCard({ service }) {
  return (
    <li className={styles.card}>
      <h3 className={styles.cardTitle}>{service.title}</h3>

      <p className={styles.description}>{service.description}</p>

      <p className={styles.price}>
        {service.price > 0 ? `${service.price} ₽` : "Бесплатно"}
      </p>
    </li>
  );
}
