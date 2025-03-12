// "use client" means that the code will be executed only on the client side. is a client-side only import. (react)
// by default, all imports are executed on the server side.
"use client";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
// useRouter is a function in next to replace or refresh
import { useRouter } from 'next/navigation';
// use to deal with api as fetch
import axios from 'axios';
import { DOMAIN } from '@/utils/constants';
// '@ is src
import ButtonSpinner from '@/components/ButtonSpinner';

const LoginForm = () => {
    // use useRouter
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    // e:React.FormEvent
    const formSubmitHandler = async (e:React.FormEvent) => {
        e.preventDefault(); // stop refresh

        // validation 
        if(email === "") return toast.error("Email is required");
        if(password === "") return toast.error("Password is required");

        try {
            setLoading(true);
            await axios.post(`${DOMAIN}/api/users/login`, { email, password });
            // useRouter to replace
            // router.push('') can go back
            router.replace('/'); // cann't go back
            setLoading(false);
            // useRouter to replace
            router.refresh();
        } catch (error:any) {
            toast.error(error?.response?.data.message);
            console.log(error);
            setLoading(false);
        }
        
    }

    return (
        <form onSubmit={formSubmitHandler} className="flex flex-col">
            <input 
             className="mb-4 border rounded p-2 text-xl" 
             type="email" 
             placeholder="Enter Your Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />
            <input 
             className="mb-4 border rounded p-2 text-xl" 
             type="password" 
             placeholder="Enter Your Password" 
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            />
            <button disabled={loading} type="submit" className="text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold">
                {loading ? <ButtonSpinner /> : "Login"}
            </button>
        </form>
    )
}

export default LoginForm