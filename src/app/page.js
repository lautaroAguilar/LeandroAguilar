
import styles from './page.module.css'
import Landing from '../containers/landing/Landing'
import About from "../containers/about/About"
import Footer from '../containers/footer/Footer'
import Review from '@/containers/review/Review'
import Promo from "@/containers/promo/Promo"
export default function Home() {
  return (
    <main className={styles.main}>
      <Landing/>
      <About/>
      <Promo/>
      <Review/>
      <Footer/>
    </main>
  )
}
