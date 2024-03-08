import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@src/presentation/widgets/navbar/navbar"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
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
