"use client"

import { useEffect, useState } from "react"
import styles from "./footer.module.css"

export default function Footer(): JSX.Element {
    const [innerWidth, setInnerWidth] = useState<number>(0)

    useEffect(() => {
        setInnerWidth(window.innerWidth)
        window.addEventListener("resize", () => {
            setInnerWidth(window.innerWidth)
        })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    function displayTitle(): JSX.Element {
        if (innerWidth <= 1000) {
            return <></>
        }

        return (
            <h1>
                FINDY
                <br />
                ALTERNANCE
            </h1>
        )
    }

    return (
        <footer id={styles.main}>
            {displayTitle()}

            <section>
                <h1>Informations</h1>
                <a href="#">Politique de confidentialité</a>
                <span>
                    <a href="#">Mentions légales</a>
                    <a href="#">CGU</a>
                </span>
            </section>
            <section>
                <h1>A propos</h1>
                <a href="#">Qui sommes-nous ?</a>
                <span>
                    <a href="#">Le concept</a>
                    <a href="#">Offres d&apos;alternance</a>
                </span>
            </section>
        </footer>
    )
}
