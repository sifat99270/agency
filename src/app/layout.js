import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import Subscribe from "@/components/Subscribe/subscribe";

const inter = Inter({ subsets: ['latin'] })

/*export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}*/

export async function generateMetadata(){

    const res=await fetch(process.env.BASE_URL+"api/SiteMeta/home");
    const JSON=await res.json();
    return{
        metadataBase: new URL(process.env.BASE_URL),
        title:JSON[0]['title'],
        description:JSON[0]['description'],
        keywords:JSON[0]['keywords'],
        openGraph: {
            images: JSON[0]['image'],
        },
    }
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      {children}
      <Subscribe />
      <Footer />
      </body>
    </html>
  )
}
