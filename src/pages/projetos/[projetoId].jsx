import stylesId from "./styles/Project.module.scss";
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

  const { innerWidth: width, innerHeight: height } = window;

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
                <Image src={foto} alt="" width={width < 800 ? 380 : 600} height={width < 800 ? 380 : 480} />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
