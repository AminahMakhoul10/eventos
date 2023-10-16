import styles from "./styles.module.css";

export default function Cabecalho() {
    return (
      <>
      <header>
        <nav className={styles.nav}>
            <li><a href="#">Formulário</a></li>
        </nav>
      </header>
      </>
    )
  }