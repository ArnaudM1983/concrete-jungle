
import Link from "next/link";
import styles from "./homepage.module.css";
import Landing from "@/components/landing/Landing";
import Programme from "@/components/programme/Programme";
import Billeterie from "@/components/billeterie/Billeterie";
import Infos from "@/components/infos/Infos";
import Map from "@/components/map/Map";
import Actus from "@/components/actus/Actus";
import Faq from "@/components/faq/page";
import Reseaux from "@/components/reseaux/Reseaux";
import Partenaires from "@/components/partenaires/Partenaires";
import dynamic from "next/dynamic";
import CookieBanner from "@/components/cookieBanner/CookieBanner";

const LazyMap = dynamic(() => import("@/components/map/Map"),{
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Landing/>
      <Programme id="programme"/>
      <Billeterie id="billeterie"/>
      <Actus/>
      <Infos id="infos"/>
      <LazyMap id="map"/>
      <Reseaux id="reseaux"/>
      <Partenaires/>
      <CookieBanner/>
    </div>
  );
}