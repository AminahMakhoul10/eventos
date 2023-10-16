import Link from "next/link"
import styles from "./styles.module.css"
export default function Card({ id, titulo, datainicio, datafim, local  }){
    return(
        <div className={styles.card}>
            <Link href={`/eventos/${id}`}>
            <h2 className={styles.cardTitulo}>{titulo}</h2>
            <div>Data de Inicio: {datainicio}</div>
            <div>Data de fim: {datafim}</div>
            <div>Local:{local}</div>
            </Link>
        </div>
    )
}