import blossom from '../assets/blossom-flower.svg'
import styles from './SignUp.module.css'

export default function SignUp() {
  return (
    <main className={styles.page}>
      <section className={styles.left} aria-label="Sign up">
        <div className={styles.content}>
          <h1 className={styles.title}>Get Started Now</h1>
          <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
            <div className={styles.field}>
              <label htmlFor="signup-name">Name</label>
              <input className={styles.input} id="signup-name" name="name" placeholder="Enter your name" autoComplete="name" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="signup-email">Email address</label>
              <input className={styles.input} id="signup-email" name="email" type="email" placeholder="Enter your email" autoComplete="email" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="signup-password">Password</label>
              <input className={styles.input} id="signup-password" name="password" type="password" placeholder="Name" autoComplete="new-password" required />
            </div>
            <label className={styles.checkbox}>
              <input name="terms" type="checkbox" required />
              <span>I agree to the <a href="#terms">terms &amp; policy</a></span>
            </label>
            <button className={styles.submit} type="submit">Signup</button>
          </form>
        </div>
      </section>
      <section className={styles.right} aria-label="Blossom image">
        <img className={styles.blossom} src={blossom} alt="Yellow and pink blossoms with green leaves" />
      </section>
    </main>
  )
}
