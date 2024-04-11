import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";
export const metadata = {
    metadataBase: new URL("https://front-farsi.vercel.app"),
    title: "سایت فرانت به فارسی | مقالات برنامه نویسی فرانت اند",
    description: "در این سایت می توانید مقالاتی درباره ی فرانت اند و برنامه نویسی بخوانید. و اگر سوالی دارید در قسمت پرسش و پاسخ بپرسید.",
    generator: 'Next.js',
    applicationName: 'فرانت فارسی',
    referrer: 'origin-when-cross-origin',
    keywords: ['Next.js', 'React', 'JavaScript', 'html', 'css', 'جاوااسکریت', 'وب', 'برنامه نویسی', 'فرانت اند','توسعه دهنده'],
    authors: [{ name: 'حامد دنیوی راد' }, { name: 'حامد دنیوی راد', url: 'https://t.me/HamedDNR' }],
    creator: 'حامد دنیوی راد',
    publisher: 'حامد دنیوی راد',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    verification: {
        google: "XJ-Hr8gOi4mIdPXl-vom41aMXFkAGyNzHcbTsuVCVJQ"
    },
    robots: "index,follow",
};

export const revalidate = 5;

export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
