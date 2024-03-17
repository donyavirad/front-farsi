"use client"

import { useState } from "react";
import { useRouter } from 'next/navigation'
export default function Search () {
    const [searchValue, setSearchValue] = useState("")
    const router = useRouter()
    const submitHandler = async (e) => {
        e.preventDefault()
        router.push("/search?value=" + searchValue)
    }
    return (
        <div className=" bg-slate-100 rounded-lg">
            <form onSubmit={submitHandler} className="w-full flex items-center space-x-2 space-x-reverse px-4 py-2  lg:w-auto">
                <input type={"text"} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder={"جست و جو"} className="w-full outline-none bg-transparent text-slate-500 placeholder:text-slate-500 lg:w-72"/>
                <button type="submit" >
                    <img className="w-4" src="./search.svg" alt=""/>
                </button>
            </form>
        </div>
    )
}