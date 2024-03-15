import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
export default function DashboardLayout({ children }) {
    return (
            <body>
                <Navbar />
                {children}
                <Footer/>
            </body>
    );
}