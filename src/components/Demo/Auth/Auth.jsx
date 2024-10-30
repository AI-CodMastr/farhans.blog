import React, { useState } from 'react'
import Modal from '../../../utils/Modal'
import { LiaTimesSolid } from 'react-icons/lia'
import { FcGoogle } from 'react-icons/fc'
import { MdFacebook } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Auth = ({modal, setModal}) => {
    const [createUser, setCreateUser] = useState(false)
    const [sigInReq, setSignInReq] = useState("")

    const hidden =  modal ? "visible opacity-100" : "invisible opacity-0"; 
  return (
    <Modal modal={modal} setModal={setModal} hidden={hidden}>
        <section className={`z-50 fixed top-0 bottom-0 left-0 md:left-[10rem] overflow-auto right-0 md:right-[10rem] bg-white shadows transition-all duration-500 ${hidden}`}>
            <button
            onClick={() => setModal(false)}
             className='absolute top-8 right-8 text-2xl hover:opacity-50'>
                <LiaTimesSolid/>
            </button>
            <div className='flex flex-col justify-center items-center gap-[3rem]'>
            {sigInReq === "" ? (
                    <>
                    <h2 className='text-2xl pt-[5rem]'>{createUser ? "Join Medium" : "Welcome Back"}</h2>
                    <div className='flex flex-col gap-3 w-fit mx-auto'>
                    <Button 
                    icon={<FcGoogle className='text-2xl'/>}
                    text={`${createUser ? "Sign Up" : "Sign In"} With Google`}
                    /> 
                    <Button 
                    icon={<MdFacebook className='text-2xl text-blue-600'/>}
                    text={`${createUser ? "Sign Up" : "Sign In"} With Facebook`}
                    />
                    <Button 
                    click={() => setSignInReq(createUser  ? "sign-up" : "sign-in")}
                    icon={<AiOutlineMail className='text-2xl'/>}
                    text={`${createUser ? "Sign Up" : "Sign In"} With Email`}                />
                    </div>
                    <p>
                        {createUser ? "Already have an account?" : "No account?"}
                        <button onClick={() => setCreateUser(!createUser)} className='text-green-600 hover:text-green-700 font-bold ml-1'>
                            {createUser ? "Sign In" : "Create one" }
                        </button>
                    </p>
                    </>
            ) : sigInReq === "sign-in" ? (
                <SignIn setSignInReq={setSignInReq}/>
            ) : sigInReq === "sign-up" ? (
                <SignUp setSignInReq={setSignInReq}/>
            ): null}
                <p className='md:w-[30rem] mx-auto text-center text-sm mb-[3rem]'>Click "Sign In" to agree to Medium's Temrs of Service and acknowledged that Medium's Privacy Policy applies to you.</p>
            </div>
        </section>
    </Modal>
  )
}

export default Auth

const Button = ({icon, text, click}) => {
    return (
        <button
        onClick={click}
         className='flex items-center gap-12 sm:w-[20rem] border border-black px-3 py-2 rounded-full'>
          {icon} {text}
        </button>
    )
}