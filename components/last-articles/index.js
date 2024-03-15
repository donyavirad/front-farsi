import { supabase } from "@/app/db/supabase";
import Card from "../UI/card";
import Container from "../UI/container";
import Link from "next/link"
export default async function LastArticles() {
    const fetchArticles = async () => {
        const res = await supabase.from("weblog").select("id,title,abstract,updated_at,imageArticle").eq("published", true).order("created_at", { ascending: false }).limit(3);
        return res;
    };
    const data = (await fetchArticles()).data;
    return (
        <div className="mb-8">
            <Container>
                <div>
                    <div className="flex justify-between">
                        <h2 className="text-2xl mb-4">آخرین مقالات</h2>
                        <Link href="/blog">
                            <span className="text-slate-500">مقالات بیشتر</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-y-8 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {data.map((item) => (
                            <div key={item.id}>
                                <Card id={item.id} title={item.title} abstract={item.abstract} time={item.updated_at} image={item.imageArticle.link} alt={item.imageArticle.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
