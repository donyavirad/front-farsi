import Link from "next/link";

export default function Card() {
    return (
        <Link href={"/blog"}>
            <div className="py-2 px-4 flex flex-col items-start space-y-4 ">
                <img src="./front-end.png" className="w-full rounded-lg" />
                <span className="px-4 py-2 bg-purple-light text-purple rounded-lg">html</span>
                <h3 className="text-black font-bold">html چیست؟</h3>
                <p className="text-gray">html مخفف کلمه hyper text انجام دهید. با اضافه کردن فاصله زیر یک خط یا پاراگراف، می توانید به متن فاصله اضافه کنید. همچنین می توانید از</p>
                <div className="flex items-center">
                    <img className="h-12 rounded-lg" src="./person.png" />
                    <div className="flex flex-col items-start mr-4">
                        <span className="text-black">حامد دنیوی راد</span>
                        <span className="text-gray">همین الان</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
