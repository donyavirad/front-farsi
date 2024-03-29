import Container from "@/components/UI/container";
import { supabase } from "../../db/supabase";
import { timeHandler } from "@/hooks/time";
import Link from "next/link";
import Image from "next/image";
import Content from "@/components/Content";
const fetchArticles = async (id) => {
    const res = await supabase.from("weblog").select("*").eq("id", id);
    return res;
};

export default async function Article(props) {
    const data = (await fetchArticles(props.params.articleId)).data[0];
    const imageLoader = () => {
        return data.imageArticle.link;
    };
    return (
        <div className="py-8">
            <Container>
                <div className="w-full flex items-center justify-center ">
                    <div className="w-full space-y-8 lg:w-2/3">
                        <div className="flex items-center justify-center">
                            <Image
                                className="w-full rounded-2xl h-96 object-cover"
                                src={data.imageArticle.link}
                                width={800}
                                height={500}
                                sizes="(min-width: 1024px) 75vw, 100vw"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                }}
                            />
                        </div>
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-black mb-4">{data.title}</h1>
                            <div className="flex space-x-2 space-x-reverse text-gray">
                                <span>{timeHandler(data.updated_at)}</span>
                            </div>
                        </div>
                        <Content id={props.params.articleId} content={data.content} />
                        <div className="bg-slate-100 rounded-lg px-4 py-2">
                            <span className="block mb-2">برچسب ها:</span>
                            <div className="flex flex-wrap space-x-4 space-x-reverse">
                                {data.tags.map((item, id) => (
                                    <Link key={id} className="bg-white px-2 py-1 rounded-lg" href={"/t/" + item}>
                                        <span className=" text-slate-500 before:content-['•'] before:text-slate-500 before:ml-1 ">{item}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const id = params.articleId;

    // fetch data
    const res = (await supabase.from("weblog").select("*").eq("id", id)).data[0];

    return {
        title: res.title,
        description: res.abstract,
        openGraph: {
            images: [
                {
                    url: res.imageArticle.link,
                    width: 400,
                    height: 300,
                },
            ],
        },
    };
}

export const revalidate = 5;
