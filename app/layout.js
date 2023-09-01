import './globals.css'
export const metadata = {
  title: 'سایت فرانت آرت | مقالات برنامه نویسی فرانت اند',
  description: 'در این سایت می توانید مقالاتی درباره ی فرانت اند و برنامه نویسی بخوانید. و اگر سوالی دارید در قسمت پرسش و پاسخ بپرسید.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl'>
      <body>{children}</body>
    </html>
  )
}
