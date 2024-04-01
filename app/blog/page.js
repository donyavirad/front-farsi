import React from "react";
import Container from "@/components/UI/container";
import { supabase } from "../db/supabase";
import Card from "@/components/UI/card";

export const metadata = {
    title: "سایت فرانت به فارسی | همه مقالات",
    alternates: {
        canonical: "/blog",
    },
}

const fetchArticles = async () => {
    const res = await supabase.from("weblog").select("id,title,abstract,updated_at,imageArticle").eq("published", true).order("created_at", { ascending: false });
    return res;
};
const Blog = async () => {
    const data = (await fetchArticles()).data;
    return (
        <Container>
            <div>
                <div className="py-16">
                    <h1 className="text-4xl text-center">مقالات</h1>
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

export default Blog;
