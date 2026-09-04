import { ServiceCard } from "./ServiceCard";
import styles from "./Services.module.css";

export function Services() {
  const servicesArr = [
    {
      id: 1,
      title: "Установка распашных дверей",
      description:
        "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.",
      price: 3500,
    },
    {
      id: 2,
      title: "Установка откатных дверей",
      description:
        "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.",
      price: 3500,
    },
    {
      id: 3,
      title: "Облицовка портала",
      description:
        "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.",
      price: 3500,
    },
    {
      id: 4,
      title: "Облицовка входной двери",
      description:
        "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.",
      price: 3500,
    },
    {
      id: 5,
      title: "Замер",
      description:
        "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.",
      price: 500,
    },
    {
      id: 6,
      title: "Консультация",
      description:
        "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.",
      price: 0,
    },
  ];

  return (
    <section id="services">
      <div className={styles.container}>
        <h2 className={styles.title}>Наши услуги</h2>

        <ul className={styles.list}>
          {servicesArr.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}
