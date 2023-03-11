import Head from "next/head";
import { Footer } from "../Footer";
import { NavBar } from "../NavBar";

interface Iprops {
  children: React.ReactNode;
}

export default function Layout({ children }: Iprops) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
