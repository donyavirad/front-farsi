import Container from "../UI/container";
import Search from "../UI/search";

export default function Hero() {
    return (
            <Container>
                <div className="flex flex-col lg:flex-row  items-center justify-between py-8">
                    <div className="flex order-2 lg:order-1 lg:w-1/2 flex-col items-start">
                        <h1 className="text-4xl text-black">مقالات برنامه نویسی فرانت اند</h1>
                        <p className="text-slate-500 text-lg mt-4 lg:w-2/3">
                        به سایت فرانت به فارسی خوش آمدید، جایی که مقالات برنامه نویسی فرانت اند را می توانید پیدا کنید. این سایت یک منبع جامع برای هر آنچه که یک برنامه نویس فرانت اند نیاز دارد است.
                        </p>
                        <div className="w-full mt-8 lg:w-auto">
                            <Search />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 order-1 lg:order-2  flex items-center justify-center">
                        <img className="w-full" src="./hero.svg"/>
                    </div>
                </div>
            </Container>
    );
}
