import styles from "./footer.module.css"

const Footer = (): JSX.Element => {
    return (
        <footer id={styles.main}>
            <h1>
                FINDY
                <br />
                ALTERNANCE
            </h1>

            <section>
                <h1>Informations</h1>
                <a>Politique de confidentialité</a>
                <a>Mentions légales</a>
                <a>CGU</a>
            </section>
            <section>
                <h1>A propos</h1>
                <a>Qui sommes-nous ?</a>
                <a>Le concept</a>
                <a>Offres d'alternance</a>
            </section>
        </footer>
    )
}

export default Footer
