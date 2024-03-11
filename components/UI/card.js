import { timeHandler } from "@/hooks/time";
import Link from "next/link";
import Image from "next/image";
export default function Card({ title, abstract, image, alt, time, id }) {
    return (
        <div className="relative flex flex-col space-y-2 shadow-lg">
            <Link href={"/" + id}>
                <Image src={image} alt={alt} width={0} height={0} sizes="100vw" className="w-full h-48 object-cover" />
            </Link>
            <h2 className="text-black font-bold px-2">{title}</h2>
            <p className="text-gray px-2 line-clamp-4">{abstract}</p>
            <div className="flex items-center p-2 border-t border-gray">
                <span className={"text-gray"}>{timeHandler(time)}</span>
            </div>
        </div>
    );
}
