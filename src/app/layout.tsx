import "./globals.css"

import type { Metadata } from "next"
import { Akshar } from "next/font/google"

import Navbar from "@src/presentation/widgets/navbar/navbar"
import Footer from "@src/presentation/widgets/footer/footer"

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
