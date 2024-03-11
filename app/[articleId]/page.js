import Container from "@/components/UI/container";
import { data } from "autoprefixer";
import { supabase } from "../db/supabase";
import { timeHandler } from "@/hooks/time";


const fetchArticles = async (id) => {
    const res = await supabase.from("weblog").select("*").eq("id",id)
    return res;
};

export default async function Article(props) {
    const data = (await fetchArticles(props.params.articleId)).data[0]

    return (
        <div className="py-8">
            <Container>
                <div className="grid grid-cols-3">
                    <div className="col-span-3 lg:col-span-2">
                        <div className="flex items-center justify-center">
                            <img className="w-full rounded-2xl h-96 object-cover" src={data.imageArticle.link} />
                        </div>
                        <div className="py-4">
                            <h1 className="text-2xl text-black">{data.title}</h1>
                            <div className="flex space-x-2 space-x-reverse text-gray">
                                <span>{timeHandler(data.updated_at)}</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-gray" dangerouslySetInnerHTML={{
                                __html: data.content
                            }}>
                                
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
    const id = params.articleId
   
    // fetch data
    const res = (await supabase.from("weblog").select("*").eq("id",id)).data[0]
   
   
    return {
      title: res.title,
      description: res.abstract,
      openGraph: {
        images: [res.imageArticle.link],
      },
    }
  }

export const revalidate = 5

