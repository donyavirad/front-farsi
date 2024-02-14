import Navbar from "@/components/navbar";
export const metadata = {
    title: "html چیست؟",
}
export default function DashboardLayout({ children }) {
    return (
            <body>
                <Navbar />
                {children}
            </body>
    );
}
