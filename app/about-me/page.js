import Container from "@/components/UI/container";
import Link from "next/link";
import React from "react";
import Image from "next/image"
import profile from "../../public/profile.jpg"
const AboutPage = () => {
    return (
        <div className="py-16">
            <Container>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="flex flex-col items-center w-full md:w-1/3 mb-4 md:ml-8">
                        <Image className=" w-1/3 md:w-full object-cover rounded-full" src={profile} />
                        <div className="py-2">
                            <p>
                                ایمیل: <Link className="underline" href={"mailto:hameddonyavi@gmail.com"}>hameddonyavi@gmail.com</Link>
                            </p>
                        </div>
                        <div>
                            <p>گیت هاب: <Link className="underline" target="_blank" href={"https://github.com/donyavirad"}>@donyavirad</Link></p>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-4xl mb-2">
                            حامد دنیوی راد <span className="text-cyan-600">توسعه دهنده فرانت اند</span>
                        </h1>
                        <p>
                            سلام، من یک برنامه‌نویس فرانت‌اند هستم با تجربه چند ساله در زمینه توسعه وب. من تسلط کامل به HTML, CSS, و JavaScript دارم و با فریمورک‌های مدرنی مانند React.js کار کرده‌ام.
                        </p>
                        <p>
                            من توانایی طراحی و پیاده‌سازی رابط کاربری پاسخگو و کاربرپسند را دارم و همیشه به دنبال بهبود تجربه کاربر هستم. من با اصول UX و UI آشنا هستم و می‌توانم با تیم طراحی محصول
                            همکاری کنم تا محصولاتی با کیفیت بالا ارائه دهیم.
                        </p>
                        <p>
                            همچنین، من با ابزارهای توسعه مدرن مانند Git, Webpack و Babel آشنا هستم و می‌توانم به صورت موثر در محیط‌های تیمی کار کنم. من به توسعه مداوم مهارت‌هایم اعتقاد دارم و همیشه به
                            دنبال یادگیری تکنولوژی‌های جدید هستم.
                        </p>
                        <p>با توجه به تجربیات و مهارت‌هایم، من اعتقاد دارم که می‌توانم به تیم شما کمک کنم تا محصولات با کیفیت بالا را ارائه دهید.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutPage;
