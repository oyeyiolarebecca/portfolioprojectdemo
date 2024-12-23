import React from 'react'
import styles from '@/app/ui/Auth/Login/login.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
        <form action="" className={styles.form}>
          <h3>Login</h3>
          <input type="email" name='email' placeholder='enter email' />
          <input type="text" name='password' placeholder='enter password' />
          <button>Submit</button>
        </form>
    </div>
  )
}
