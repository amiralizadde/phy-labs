import PasswordForm from '@/components/template/auth/PasswordForm'
import React from 'react'
import styles from '@/styles/auth/signin.module.css'
import SendPassword from '@/components/template/auth/SendPassword'




const Signup = async() => {


  return (
    <div className='flex items-center justify-center'>
      <div className='w-2/4'>
        <div className='border-b border-b-black '>
          <p className='text-3xl py-5 font-medium'>Register</p>
        </div>
        <div className='child:text-xs child:text-black/75 my-8'>
          <p>Please provide the information below to create your KEYENCE web account. This One-Time registration unlocks unlimited access to our web resources.</p>
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

export default Signup