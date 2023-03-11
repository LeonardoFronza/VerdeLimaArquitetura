import Image from "next/image";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import styles from "./NavBar.module.scss";
import { useState } from "react";

export function NavBar() {
  const LOGO_NAVBAR = "/logos/logo-navBar.png";

  const [isOpen, setOpen] = useState(false);

  const data = [
    { name: "Início", href: "/" },
    {
      name: "Projetos",
      href: "/projetos",
    },
    {
      name: "Sobre",
      href: "/sobre",
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
            {data.map((item, i) => (
              <li key={i}>
                <Link href={item.href} className={styles.a}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={isOpen ? styles.hamburger : styles.activeHamburguer}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </>
  );
}
