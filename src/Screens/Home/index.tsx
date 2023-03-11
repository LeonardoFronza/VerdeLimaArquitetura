/* eslint-disable react/no-unescaped-entities */
import { Slider } from "@/Components/Slider";
import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.scss";

export function HomeScreen() {
  const LOGO_VERDELIMA = "/logos/logoHomePage.png";
  const ARQUITETA_LILI = "/images/ArquitetaLiliana.png";

  const Foto1 = "/images/ClinicaDrJulia.png";
  const Foto2 = "/images/CasaC+F.png";
  const Foto3 = "/images/CasaJ+H.png";
  const Foto4 = "/images/ApeV+R.png";
  const Foto5 = "/images/ApeL+G.png";

  return (
    <>
      <div className={styles.containerHome}>
        <div className={styles.image}>
          <Image src={LOGO_VERDELIMA} alt={""} width={282} height={282} />
        </div>

        <div className={styles.divbutton}>
          <button>
            <Link href={"/contatos"}>Contatos</Link>
          </button>
        </div>
      </div>

      <div className={styles.containerPresentation}>
        <div className={styles.box}>
          <h2>Quem somos?</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <div className={styles.box2}>
            <Image src={ARQUITETA_LILI} width={144} height={144} alt="" />
            <div className={styles.texts}>
              <h2>Arquiteta</h2>
              <p>LILIANA CARDOSO</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.project}>
        <h1>Projetos</h1>

        <div className={styles.bolas}>
          <div>
            <Link href={"/projetos/1"}>
              <Image
                src={Foto1}
                width={120}
                height={120}
                alt=""
                className={styles.bola}
              />
            </Link>
          </div>
          <div>
            <Link href={"/projetos/1"}>
              <Image
                src={Foto2}
                width={120}
                height={120}
                alt=""
                className={styles.bola}
              />
            </Link>
          </div>
          <div>
            <Link href={"/projetos/1"}>
              <Image
                src={Foto3}
                width={120}
                height={120}
                alt=""
                className={styles.bola}
              />
            </Link>
          </div>
          <div>
            <Link href={"/projetos/1"}>
              <Image
                src={Foto4}
                width={120}
                height={120}
                alt=""
                className={styles.bola}
              />
            </Link>
          </div>
          <div>
            <Link href={"/projetos/1"}>
              <Image
                src={Foto5}
                width={120}
                height={120}
                alt=""
                className={styles.bola}
              />
            </Link>
          </div>
        </div>

        <div className={styles.slider}>
          <Slider />
        </div>

        <Link href={"/projetos"} className={styles.buttonContainer}>
          <button>Ver mais projetos</button>
        </Link>
      </div>

      <div className={styles.about}>
        <div className={styles.box}>
          <h2>Nossos projetos como são feitos?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className={styles.youtube}>
          <iframe
            width={720}
            height={480}
            src="https://www.youtube.com/embed/MM-QYSpl-zw"
            title="Animação Lumion 8 e Adobe Premiere - Animation 3D Rio de Janeiro - Brazil"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </>
  );
}
