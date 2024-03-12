import Footer from "@/components/footer";
import Hero from "@/components/hero";
import LastArticles from "@/components/last-articles";
import Navbar from "@/components/navbar";
export default function Home() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <Hero />
            <LastArticles />
            <Footer />
        </div>
    );
}
