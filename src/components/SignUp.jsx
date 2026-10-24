import blossom from '../assets/blossom-flower.svg'
import styles from './SignUp.module.css'

export default function SignUp() {
  return (
    <main className={styles.page}>
      <section className={styles.left} aria-label="Sign up">
        <div className={styles.content} />
      </section>
      <section className={styles.right} aria-label="Blossom image">
        <img className={styles.blossom} src={blossom} alt="Yellow and pink blossoms with green leaves" />
      </section>
    </main>
  )
}
