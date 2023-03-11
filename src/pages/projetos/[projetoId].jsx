import styles from "./styles/Project.module.scss";
import { useRouter } from "next/router";
import data from "src/data/projects.json";
import Image from "next/image";
import Layout from "@/Components/Layout";
import Head from "next/head";

export default function Todo() {
  const router = useRouter();

  const id = router.query.projetoId;
  const projeto = data.find((item) => item.id === Number(id));

  if (!projeto) {
    return <h1>Leonardo O Mais gato</h1>;
  }

  return (
    <>
      <Head>
        <title>{projeto.id} - Verde Lima Arquitetura</title>
      </Head>

      <Layout>
        <div>
          <div className={styles.titulo}>
            <h1>{projeto.title}</h1>
          </div>

          <div className={styles.containerFotos}>
            {projeto.photosProject.map((foto, idx) => (
              <div key={idx} className={styles.fotos}>
                <Image src={foto} alt="" width={600} height={480} />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
