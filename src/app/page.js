import styles from "./page.module.css";
import background from "../../public/Fastback.jpg";
import Landing from "../components/containers/Landing/Landing";
import Review from "@/components/containers/Review/Review";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main} id="root">
      <Landing />
      <Review />
      <Image
        className={styles.background}
        src={background}
        alt="background iamge"
      />
    </main>
  );
}
