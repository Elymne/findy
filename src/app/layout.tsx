import "./globals.css"
import type { Metadata } from "next"
import { Akshar } from "next/font/google"
import Footer from "@src/presentation/components/footer/footer"
import Navbar from "@src/presentation/components/navbar/navbar"

const akshar = Akshar({
    subsets: ["latin"],
    variable: "--font-inter",
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={akshar.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}

export const metadata: Metadata = {
    title: "Findy",
    description: "Findy ?",
}
