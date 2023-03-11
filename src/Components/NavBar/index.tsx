import Image from "next/image";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import styles from "./NavBar.module.scss";
import { useState } from "react";
import { Sidebar } from "../SideBar";
import data from "src/data/navbar.json";

export function NavBar() {
  const LOGO_NAVBAR = "/logos/logo-navBar.png";

  const [isOpen, setOpen] = useState(false);

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

        <div className={styles.hamburger}>
          <Hamburger toggled={isOpen} toggle={setOpen} />

          {isOpen ? <Sidebar isActive={false} /> : <></>}
        </div>

        <div className={styles.flex}/>
        
      </div>
    </>
  );
}
