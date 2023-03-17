import styles from "./styles//Project.module.scss";
import data from "src/data/projects.json";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/Components/Layout";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function ProjectScreen() {

  const [larguraTela, setLarguraTela] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLarguraTela(window.innerWidth);
      
      const handleResize = () => {
        setLarguraTela(window.innerWidth);
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  
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
                  width={larguraTela < 800 ? 350 : 400}
                  height={larguraTela < 800 ? 260 :280}
                />
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}
