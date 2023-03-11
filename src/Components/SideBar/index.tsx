import styles from "./SideBar.module.scss";
import data from "src/data/navbar.json";
import Link from "next/link";

interface Iprops {
  isActive: boolean;
}

export function Sidebar({ isActive }: Iprops) {
  return (
    <div className={styles.container}>

        <ul className={styles.content}>
          {data.map((item, i) => (
            <li key={i}>
              <Link href={item.href} className={styles.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

    </div>
  );
}
