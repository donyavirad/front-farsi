import Hero from "@/components/hero";
import LastArticles from "@/components/last-articles";

export default function Home() {
    return (
        <div className="py-16 space-y-8">
            <Hero />
            <LastArticles />
        </div>
    );
}
