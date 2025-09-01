import styles from "./footer.module.css";
import Image from "next/image";
import logo from "../../public/assets/svg/logo.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <Image src={logo} alt="MF Pro Logo" className={styles.logo} />
        </div>

        <div>
          <h3 className={styles.title}>Разделы</h3>
          <ul className={styles.list}>
            <li>📦 Франшизы</li>
            <li>🏢 Готовый бизнес</li>
            <li>💸 Инвестиции</li>
            <li>💡 Бизнес-идеи</li>
            <li>📄 Бизнес-планы</li>
            <li>❓ Как начать бизнес?</li>
          </ul>
        </div>

        <div>
          <h3 className={styles.title}>Проекты</h3>
          <ul className={styles.list}>
            <li>Бизнес журналы</li>
            <li>Календарь мероприятий</li>
            <li>Куда вложить деньги?</li>
          </ul>
        </div>

        <div>
          <h3 className={styles.title}>MF Pro</h3>
          <ul className={styles.list}>
            <li>О портале</li>
            <li>Отзывы о нас</li>
            <li>Рекламные услуги</li>
            <li>Контактные данные</li>
          </ul>
        </div>

        <div>
          <h3 className={styles.title}>Соцсети</h3>
          <ul className={styles.list}>
            <li>📱 WhatsApp</li>
            <li>✈️ Телеграм</li>
            <li>📸 Инстаграм</li>
          </ul>
          <button className={styles.supportButton}>🛠 Служба поддержки</button>
        </div>
      </div>

      <div className={styles.copyright}>© MF PRO 2014–2025</div>
    </footer>
  );
}
