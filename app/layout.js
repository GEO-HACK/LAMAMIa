export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="bg-black max-w-[1366px] min-h-screen mx-auto p-[60px] flex flex-col justify-between text-slate-200">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
