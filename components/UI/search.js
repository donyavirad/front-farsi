export default function Search () {
    return (
        <div className=" bg-slate-100 rounded-lg">
            <div className="w-full flex items-center space-x-2 space-x-reverse pr-4 lg:w-auto">
                <img className="w-4" src="./search.svg" alt=""/>
                <input type={"text"} placeholder={"جست و جو"} className="w-full outline-none bg-transparent py-2 pl-2 text-slate-500 placeholder:text-slate-500 lg:w-72"/>
            </div>
        </div>
    )
}