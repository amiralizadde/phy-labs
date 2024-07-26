import PasswordForm from '@/components/template/auth/PasswordForm'
import React from 'react'
import styles from '@/styles/auth/signin.module.css'
import SendPassword from '@/components/template/auth/SendPassword'




const Signin = async() => {


  return (
    <div className='flex items-center justify-center'>
      <div className='w-2/4'>
        <div className='border-b border-b-black '>
          <p className='text-4xl py-5 font-medium'>Sign In</p>
        </div>
        <div className='child:text-sm child:text-black/75 my-8'>
          <p>The email address you entered is already registered.</p>
          <p>Please enter your password in order to proceed.</p>
        </div>
        <PasswordForm />

        <p className={styles.textOr}>
          <span>OR</span>
        </p>

        <p className='text-sm text-black/75 my-8'>
          If you don't remember your password, you may also sign in with the verification link below.
        </p>

        <SendPassword />


      </div>
    </div>
  )
}

export default Signin