import blossom from '../assets/blossom-flower.svg'
import googleLogo from '../assets/icons-google-logo.svg'
import appleLogo from '../assets/icons-apple-logo.svg'
import styles from './Login.module.css'

export default function Login() {
  return (
    <main className={styles.page}>
      <section className={styles.left} aria-label="Login">
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome back!</h1>
          <p className={styles.subtitle}>Enter your Credentials to access your account</p>
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
          <div className={styles.divider}>
            <span>Or</span>
          </div>
          <div className={styles.social}>
            <button className={styles.socialButton} type="button">
              <img src={googleLogo} alt="" width="24" height="24" />
              <span>Sign in with Google</span>
            </button>
            <button className={styles.socialButton} type="button">
              <img src={appleLogo} alt="" width="24" height="24" />
              <span>Sign in with Apple</span>
            </button>
          </div>
          <p className={styles.account}>Have an account? <a href="#login">Sign In</a></p>
        </div>
      </section>
      <section className={styles.right} aria-label="Blossom image">
        <img className={styles.blossom} src={blossom} alt="Yellow and pink blossoms with green leaves" />
      </section>
    </main>
  )
}
