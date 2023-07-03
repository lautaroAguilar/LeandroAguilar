
import styles from './page.module.css'
import Landing from '../containers/landing/Landing'
import About from "../containers/about/About"
export default function Home() {
  return (
    <main className={styles.main}>
      <Landing/>
      <About/>
    </main>
  )
}
