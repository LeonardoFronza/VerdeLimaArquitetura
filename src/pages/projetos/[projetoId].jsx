import stylesId from "./styles/Project.module.scss";
import { useRouter } from "next/router";
import data from "src/data/projects.json";
import Image from "next/image";
import Layout from "@/Components/Layout";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Todo() {
  const router = useRouter();

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

  const id = router.query.projetoId;
  const projeto = data.find((item) => item.id === Number(id));

  if (!projeto) {
    return <h1>Erro</h1>;
  }
  return (
    <>
      <Head>
        <title>{projeto.id} - Verde Lima Arquitetura</title>
      </Head>

      <Layout>
        <div>
          <div className={stylesId.titulo}>
            <h1>{projeto.title}</h1>
          </div>

          <div className={stylesId.containerFotos}>
            {projeto.photosProject.map((foto, idx) => (
              <div key={idx} className={stylesId.fotos}>
                <Image src={foto} alt="" width={larguraTela < 800 ? 380 : 600} height={larguraTela < 800 ? 380 : 480} />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
