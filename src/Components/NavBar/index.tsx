import Image from "next/image";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import styles from "./NavBar.module.scss";
import { useState } from "react";

export function NavBar() {
  const LOGO_NAVBAR = "/logos/logo-navBar.png";

  const [active, setActive] = useState(false);

  const data = [
    { name: "Home", Link: "/" },
    { name: "Problems", Link: "/problems" },
    {
      name: "Team",
      Link: "/team",
    },
    {
      name: "Events",
      Link: "/events",
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={LOGO_NAVBAR} width={71} height={71} alt="" />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={"/"} className={styles.a}>
                {" "}
                Início
              </Link>
            </li>
            <li>
              <Link href={"/projetos"} className={styles.a}>
                Projetos
              </Link>
            </li>
            <li>
              <Link href={"/"} className={styles.a}>
                {" "}
                Sobre
              </Link>
            </li>
          </ul>
        </nav>

        {/* <Hamburger toggled={isOpen} toggle={setOpen}/> */}
        <div onClick={() => setActive(!active)}>
          <div className={active ? styles.hamburguer : styles.activeHamburguer}/>
        </div>

        <div className={active ? styles.activeSidenav : styles.sidenav}>
        <ul className={styles.ul}>
          {data.map((item, i) => (
            <li key={i}>
              <a href="#" className={styles.a}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      </div>
    </>
  );
}
