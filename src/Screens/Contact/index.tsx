import { Form } from "@/Components/Form";
import Image from "next/image";
import Link from "next/link";
import styles from "./Contact.module.scss";

export function Contact() {
  const ZAP = "/svgs/svgs-verdes/logo-whatsapp-verde.svg";
  const INSTAGRAM = "/svgs/svgs-verdes/logo-instagram-verde.svg";
  const FACEBOOK = "/svgs/svgs-verdes/logo-facebook-verde.svg";
  const TIMER = "/svgs/svgs-verdes/time-outline-verde.svg";
  const LOCATION = "/svgs/svgs-verdes/location-outline-verde.svg";

  return (
    <>
      <section className={styles.container}>
        <div className={styles.contato}>
          <h1>Vamos realizar um sonho?</h1>
          <p>
            Nos envie um e-mail contanto um pouco do seu desejo de trabalhar
            conosco, realizamos projetos residencias, comercial e de interiores.
            Não esqueça de se identificar e deixar um meio de contato.
          </p>

          <div>
            <Form styles={styles}/>
          </div>
        </div>

        <div className={styles.redesSocias}>
          <h1>Contatos</h1>

          <div className={styles.divRedesSocias}>
            <ul>
              <li>
                <Image
                  className={styles.Image}
                  src={ZAP}
                  width={35}
                  height={35}
                  alt="Zap"
                />
                <Link href={""} className={styles.link}>
                  (51) 9.9829-1909
                </Link>
              </li>
              <li>
                <Image
                  className={styles.Image}
                  src={INSTAGRAM}
                  width={35}
                  height={35}
                  alt="Zap"
                />
                <Link href={""} className={styles.link}>
                  @verdelimaarquitetura
                </Link>
              </li>
              <li>
                <Image
                  className={styles.Image}
                  src={FACEBOOK}
                  width={35}
                  height={35}
                  alt="Zap"
                />
                <Link href={""} className={styles.link}>
                  @verdelimaarquitetura
                </Link>
              </li>
              <li>
                <Image
                  className={styles.Image}
                  src={TIMER}
                  width={35}
                  height={35}
                  alt="Zap"
                />
                <Link href={""} className={styles.link}>
                  08:30 - segunda-feira a sexta-Feiras
                </Link>
              </li>
              <li>
                <Image
                  className={styles.Image}
                  src={LOCATION}
                  width={35}
                  height={35}
                  alt="Zap"
                />
                <Link href={""} className={styles.link}>
                  R. João XXIII, 32 - Sala 1601 - São José, <br/> São Leopoldo -
                  RS, 93040-090
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
