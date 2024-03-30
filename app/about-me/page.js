import Container from "@/components/UI/container";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import profile from "@/public/profile.jpg";
import email from "@/public/email.svg";
import linkedin from "@/public/linkedin.svg";
import github from "@/public/github.svg";
import bluetik from "@/public/bluetik.svg";
import background from "@/public/background.jpg";

export const metadata = {
    title: "سایت فرانت به فارسی | درباره من",
};

const AboutPage = () => {
    return (
        <div className="py-16">
            <Container>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center w-full ">
                        <div className="relative mb-20">
                            <Image src={background} alt="" className="rounded-lg md:aspect-5/1 lg:aspect-8/1" />
                            <Image className="absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-40 object-cover rounded-full border-8 border-white" src={profile} alt="حامد دنیوی راد" />
                        </div>
                        <div className=" flex flex-col items-center w-fit bg-white px-4 py-2 rounded-lg shadow-lg ">
                            <div className="flex items-center">
                                <h1 className="">حامد دنیوی راد</h1>
                                <Image className="w-4 mr-2" src={bluetik} alt=""/> 
                            </div>
                            <span className="text-slate-500 mb-2">توسعه دهنده فرانت اند</span>
                            <div className="flex justify-between w-full">
                                <Link href={"mailto:hameddonyavi@gmail.com"}>
                                    <Image className="w-6" src={email} alt=""/>
                                </Link>
                                <Link href={"https://github.com/donyavirad"} target="_blank">
                                    <Image className="w-6" src={github} alt=""/>
                                </Link>
                                <Link href={"https://www.linkedin.com/in/hamed-donyavi/"} target="_blank">
                                    <Image className="w-6" src={linkedin} alt=""/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutPage;
