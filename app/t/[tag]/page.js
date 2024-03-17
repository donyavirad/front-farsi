import React from "react";
import Container from "@/components/UI/container";
import { supabase } from "@/app/db/supabase";
import Card from "@/components/UI/card";
import NotFound from "@/app/not-found";

const fetchArticles = async (tag) => {
    const res = await supabase.from("weblog").select("id,title,abstract,updated_at,imageArticle,tags").eq("published", true).contains("tags", [tag]).order("created_at", { ascending: false });
    return res;
};
const TagPage = async (props) => {
    const data = (await fetchArticles(props.params.tag)).data;
    
    if(data.length == 0) {
        return <NotFound/>
    }
    return (
        <Container>
            <div>
                <div className="py-16">
                    <h1 className="text-4xl text-center">#{props.params.tag}</h1>
                </div>
                <div className="grid grid-cols-1 gap-y-8 md:gap-8 md:grid-cols-2 lg:grid-cols-3 pb-16">
                    {data.map((item) => (
                        <div key={item.id}>
                            <Card id={item.id} title={item.title} abstract={item.abstract} time={item.updated_at} image={item.imageArticle.link} alt={item.imageArticle.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const tag = params.tag;

    return {
        title: tag,
    };
}



export default TagPage;
