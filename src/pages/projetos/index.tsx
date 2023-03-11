import styles from "./styles/Project.module.scss";
import data from "src/data/projects.json";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/Components/Layout";
import Head from "next/head";

export default function ProjectScreen() {
  return (
    <>
      <Head>
        <title>Projetos - Verde Lima Arquitetura</title>
      </Head>
      <Layout>
        <div className={styles.titulo}>
          <h1>Projetos</h1>
        </div>

        <div className={styles.containerFotos}>
          {data.map((projeto) => (
            <div key={projeto.id} className={styles.fotos}>
              <Link href={`/projetos/${projeto.id}`}>
                <Image
                  className={styles.foto}
                  src={projeto.photo}
                  alt=""
                  width={400}
                  height={250}
                />
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}
