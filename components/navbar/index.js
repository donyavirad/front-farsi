"use client";
import Container from "../UI/container";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const containerannimate = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };
    return (
        <div className="py-4 shadow-md">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="lg:hidden">
                        <img className="" src="./menu.svg" alt="منو" onClick={() => setIsOpen(true)} />
                    </div>
                    <div>
                        <Link href={"/"} className="flex items-center">
                            <img src="./logo.svg" className="w-16" />
                            <span className="hidden lg:block mr-4 text-lg">فرانت به فارسی</span>
                        </Link>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex ">
                            <li className="px-6 ">
                                <Link className="py-2 transition border-b-2 border-b-white hover:border-b-2 hover:border-gray-600" href={"/blog"}>مقالات</Link>
                            </li>
                            <li className="px-6">
                                <Link className="py-2 transition border-b-2 border-b-white hover:border-b-2 hover:border-gray-600" href={"/blog"}>درباره ما</Link>
                            </li>
                            <li className="px-6">
                                <Link className="py-2 transition border-b-2 border-b-white hover:border-b-2 hover:border-gray-600" href={"/blog"}>تماس با ما</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className="px-8 py-2 bg-primary text-white rounded-lg">پرسش و پاسخ</button>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: "100%", backdropFilter: "blur(0)" }}
                    animate={isOpen ? { opacity: 1, x: 0, backdropFilter: "blur(16px)" } : {}}
                    duration={2}
                    onClick={() => setIsOpen(false)}
                    className="fixed top-0 right-0 w-full h-full bg-gray-300 bg-opacity-30 "
                ></motion.div>
                <motion.div initial={{ x: "100%", opacity: 0 }} animate={isOpen ? { x: "0", opacity: 1 } : {}} className="fixed top-0 right-0 w-96 h-full bg-white z-10">
                    <div className="py-6 px-4">
                        <div>
                            <img onClick={() => setIsOpen(false)} className="w-6 py-4" src="./close.svg" />
                        </div>
                        <ul>
                            <li className="py-2">
                                {" "}
                                <Link href={"/blog"}>مقالات</Link>
                            </li>
                            <li className="py-2">
                                <Link href={"/blog"}>درباره ما</Link>
                            </li>
                            <li className="py-2">
                                <Link href={"/blog"}>تماس با ما</Link>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}
