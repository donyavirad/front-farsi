export default function Search () {
    return (
        <div className="flex items-center justify-center  bg-gray-light rounded-lg">
            <div className="w-full flex items-center space-x-2 space-x-reverse pr-4 lg:w-auto">
                <img className="w-4" src="./search.svg" alt=""/>
                <input type={"text"} placeholder={"جست و جو"} className="w-full outline-none bg-transparent text-black lg:w-72"/>
            </div>
            <button className=" flex items-center justify-center py-2 px-8 bg-secondary text-white rounded-lg mr-4">
                    برو
            </button>
        </div>
    )
}