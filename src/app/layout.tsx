import type { Metadata } from "next"
import { Akshar } from "next/font/google"
import "./globals.css"
import Navbar from "@src/presentation/widgets/navbar/navbar"

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
                <header>
                    <Navbar />
                </header>
                {children}
                <footer></footer>
            </body>
        </html>
    )
}

export const metadata: Metadata = {
    title: "Findy",
    description: "Findy ?",
}
