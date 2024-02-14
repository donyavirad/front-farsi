import Container from "../UI/container";
import Search from "../UI/search";

export default function Hero () {
    return (
        <div className="">
            <Container>
                <div className=" flex flex-col items-center py-8">
                    <h1 className="text-2xl text-black">مقالات برنامه نویسی فرانت اند</h1>
                    <p className="text-gray mt-4">هر مقاله ای که دوست داری رو یکجا پیدا کن و اگه جواب نگرفتی در قسمت پرسش و پاسخ مطرح کن. :)</p>
                    <div className="w-full mt-8 lg:w-auto">
                        <Search/>
                    </div>
                </div>
            </Container>
        </div>
    )
}