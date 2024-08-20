import Link from "next/link";
import styles from "./homepage.module.css";
import Landing from "@/components/landing/Landing";
import Programme from "@/components/programme/Programme";
import Billeterie from "@/components/billeterie/Billeterie";
import Infos from "@/components/infos/Infos";
import Carte from "@/components/carte/Carte";
import Actus from "@/components/actus/Actus";
import Faq from "@/components/faq/page";
import Reseaux from "@/components/reseaux/Reseaux";
import Partenaires from "@/components/partenaires/Partenaires";


export default function Home() {
  return (
    <div className={styles.container}>
      <Landing/>
      <Programme id="programme"/>
      <Billeterie id="billeterie"/>
      <Infos id="infos"/>
      <Actus/>
      <Carte/>
      <Reseaux/>
      <Partenaires/>
    </div>
  );
}