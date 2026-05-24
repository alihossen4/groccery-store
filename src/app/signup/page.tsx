"use client"
import React from "react";

const SignUp = ()=>{
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log({ name, email, password });
        setName('');
        setEmail('');
        setPassword('');
    }
    return(
        <section className="w-[30%] mx-auto my-10 py-3 shadow-md">
                    <h1 className="text-3xl text-gray-600 font-[600] text-center">Sign Up to Get Started</h1>
            <div className="w-[500px] mx-auto my-4">
                <form action="" method="get" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="text-2xl px-5 py-2 mr-10">Name : </label>
                    <input type="text" name="name" className="border border-gray p-2 my-2 focus:outline-none rounded-md border-2" value={name}  onChange={(e) => setName(e.target.value)} />
                    <br />
                    <label htmlFor="email" className="text-2xl px-5 py-2 mr-11 ">Email : </label>
                    <input type="email" name="email" className="border border-gray p-2 my-2 focus:outline-none rounded-md border-2" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <label htmlFor="password" className="text-2xl px-5 py-2 ">Password : </label>
                    <input type="password" name="password" className="border border-gray p-2 my-2 focus:outline-none rounded-md border-2" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <button type="submit" className="text-white  py-2 rounded-md bg-primary hover:bg-green-600 hover:text-white mt-3 ml-5 px-5 text-2xl cursor-pointer">Sign Up</button>
                    <br />
                    <br />
                    <span className="text-xl text-gray-800 ml-5 my-2">Continue With Google</span>
                    <span><a href="">google</a></span>

                </form>
                <p>{name}, {email}, {password}</p>
            </div>
        </section>
    )
}
export default SignUp;