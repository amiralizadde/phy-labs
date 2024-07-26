

import EmailIdentification from "@/components/template/auth/EmailIdentification";
import { FaRegCheckCircle } from "react-icons/fa";


const Identification = () => {
  return (
    <div className='bg-[#fafafa] p-10 flex  justify-center'>

        <div className='w-2/4 '>
            <div className='text-5xl  mb-20 font-bold text-start text-[#2e3133]'>Sign In / Register</div>
            <div className='text-3xl  mb-10 font-semibold leading-6 text-start text-[#2e3133]'>Please Enter Your Email Address</div>
            <div>
                <p className='text-sm text-black/75'>If you have registered in the past, please enter your registered email address below.</p>
                <p className='text-sm text-black/75'>If you are not yet registered, please enter your email address below and click "Continue" to complete your registration.</p>
            </div>
            <EmailIdentification />
            <div>
                <p className='text-sm text-black/75'>We guarantee 100% privacy – your information will never be shared.</p>
            </div>
            <div className='my-5'>
                <p className='text-green-700 font-bold'>Online Member Benefits</p>
                <ul className='child:flex child:items-center py-5'>
                    <li>
                        <FaRegCheckCircle className='text-green-700 me-3 text-xl my-2'/>
                        <span>Instant product catalog and technical guide downloads</span>
                    </li>
                    <li>
                        <FaRegCheckCircle className='text-green-700 me-3 text-xl my-2' />
                        <span>Seamlessly submit requests for pricing and demonstrations</span>
                    </li>
                    <li>
                        <FaRegCheckCircle className='text-green-700 me-3 text-xl my-2'/>
                       <span>One-time registration, unlimited access</span> 
                    </li>
                </ul>
            </div>

        </div>

    </div>
  )
}

export default Identification