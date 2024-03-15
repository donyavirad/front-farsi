import { timeHandler } from "@/hooks/time";
import Link from "next/link";
import Image from "next/image";
export default function Card({ title, abstract, image, alt, time, id }) {
    return (
        <div className="relative flex flex-col space-y-2 bg-white border border-slate-200 rounded-lg overflow-hidden transition duration-300 hover:scale-105 hover:border-slate-400" >
            <Link href={"/" + id}>
                <Image
                    src={image}
                    priority
                    alt={alt}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                />
            </Link>
            <h2 className="text-black lg:text-lg font-bold px-2">{title}</h2>
            <p className="text-slate-500 px-2 line-clamp-4">{abstract}</p>
            <div className="flex items-center p-2 border-t border-slate-200">
                <span className={"text-slate-500"}>{timeHandler(time)}</span>
            </div>
        </div>
    );
}
