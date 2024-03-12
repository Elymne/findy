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
                    <a href="#">Offres d'alternance</a>
                </span>
            </section>
        </footer>
    )
}

export default Footer
