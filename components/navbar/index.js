"use client";
import Container from "../UI/container";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div className="py-4 shadow-md">
                <Container>
                    <div className="flex justify-between items-center">
                        <div className="lg:hidden flex items-center">
                            <img className="h-4" src="./menu.svg" alt="منو" onClick={() => setIsOpen(true)} />
                            <span className="mr-2">فرانت به فارسی</span>
                        </div>
                        <div>
                            <Link href={"/"} className="flex items-center">
                                <img src="./logo.svg" alt="لوگو" className="h-6" />
                                <span className="hidden lg:block mr-4 text-lg">فرانت به فارسی</span>
                            </Link>
                        </div>
                        <div className="hidden lg:block">
                            <ul className="flex ">
                                <li className="px-6 ">
                                    <Link className="py-2 transition border-b-2 border-b-white hover:border-b-2 hover:border-gray-600" href={"/blog/"}>
                                        مقالات
                                    </Link>
                                </li>
                                <li className="px-6">
                                    <Link className="py-2 transition border-b-2 border-b-white hover:border-b-2 hover:border-gray-600" href={"/"}>
                                        درباره من
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, display: "none", backgroundColor: "#ffffff80" }}
                        animate={isOpen ? { display: "block", opacity: 1, backgroundColor: "#00000020", zIndex: 2 } : {}}
                        onClick={() => setIsOpen(false)}
                        className="fixed top-0 right-0 z-20 w-full h-full bg-gray-300 bg-opacity-30 "
                    ></motion.div>
                    <motion.div
                        initial={{ x: "100%", opacity: 0, background: "#ffffff60", backdropFilter: "blur(8px)" }}
                        animate={isOpen ? { x: "0", opacity: 1 } : {}}
                        className="fixed top-0 right-0 w-96 bg-[#ffffffcf] backdrop-blur h-full z-10"
                    >
                        <div className="py-6 px-4">
                            <div onClick={() => setIsOpen(false)} className="flex items-center w-fit bg-white p-2 mb-2 rounded-lg">
                                <img alt="" className="w-4 h-4" src="./close.svg" />
                            </div>
                            <ul className="bg-white rounded-lg">
                                <li className="py-2 px-2 border-b  border-slate-200">
                                    {" "}
                                    <Link href={"/"}>مقالات</Link>
                                </li>
                                <li className="py-2 px-2">
                                    <Link href={"/"}>درباره من</Link>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </Container>
            </div>
        </header>
    );
}
