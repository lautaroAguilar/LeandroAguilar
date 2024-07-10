import styles from "./page.module.css";
import background from "../../public/Fastback.jpg";
import Landing from "../containers/landing/Landing";
import About from "../containers/about/About";
import Footer from "../containers/footer/Footer";
import Review from "@/containers/review/Review";
import Promo from "@/containers/promo/Promo";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main} id="root">
      <Header />
      <Landing />
      <About />
      <Promo />
      <Review />
      <Footer />
      <Image
        className={styles.background}
        src={background}
        alt="background iamge"
      />
    </main>
  );
}
