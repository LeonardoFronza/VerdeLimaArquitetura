import Link from "next/link";
import styles from "./Thanks.module.scss";

export function Thanks() {
  return (
    <>
      <div className={styles.container}>
        <h1>Obrigado por entrar em contato!</h1>
        <p>Logo retornamos sua mensagem.</p>
        
        <Link href={"/"} className={styles.buttonContainer}>
            <button>Voltar</button>
        </Link>
      </div>
    </>
  );
}
