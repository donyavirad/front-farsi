import Hero from "@/components/hero";
import LastArticles from "@/components/last-articles";

export const metadata = {
    alternates: {
        canonical: "/",
    },
};

export default function Home() {
    return (
        <div className="py-16 space-y-8">
            <Hero />
            <LastArticles />
        </div>
    );
}
