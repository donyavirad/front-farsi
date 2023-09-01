export default function Search () {
    return (
        <div className="flex items-center justify-center py-4 px-8 bg-gray-light rounded-2xl">
            <div className="w-full flex items-center space-x-2 space-x-reverse lg:w-auto">
                <img className="w-4" src="./search.svg"/>
                <input type={"text"} placeholder={"جست و جو"} className="w-full outline-none bg-transparent text-black lg:w-72"/>
            </div>
            <button className=" flex items-center justify-center py-2 px-6 bg-secondary text-white rounded-2xl mr-4">
                    برو
            </button>
        </div>
    )
}