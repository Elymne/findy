"use client"

import { useEffect, useState } from "react"
import styles from "./navbar.module.css"

export default function Navbar() {
    const [innerWidth, setInnerWidth] = useState<number>(0)

    useEffect(() => {
        setInnerWidth(window.innerWidth)
        window.addEventListener("resize", () => {
            setInnerWidth(window.innerWidth)
        })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    function displayJobOfferTitle(): JSX.Element {
        if (innerWidth <= 600) {
            return <></>
        }

        return (
            <li>
                <a className={styles.normalUnderline} href="/job-offers">
                    Trouvez votre alternance
                </a>
            </li>
        )
    }

    function displayMoreTitle(): JSX.Element {
        if (innerWidth <= 600) {
            return <></>
        }

        return (
            <li>
                <a className={styles.normalUnderline} href="/more">
                    Média
                </a>
            </li>
        )
    }

    return (
        <header id={styles.header}>
            <nav id={styles.navbar} aria-label="Navbar">
                <ul>
                    <li>
                        <a href="/">FINDY</a>
                    </li>
                    {displayJobOfferTitle()}
                    {displayMoreTitle()}
                </ul>
            </nav>
        </header>
    )
}
