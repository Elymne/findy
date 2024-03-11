import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.navbar} aria-label="Navbar">
            <ul>
                <li>
                    <a id={styles.title} href="/">
                        FINDY
                        <br />
                        ALTERNANCE
                    </a>
                </li>
                <li>
                    <a className={styles.normalUnderline} href="/job-offers">
                        Trouvez votre alternance
                    </a>
                </li>
                <li>
                    <a className={styles.normalUnderline} href="/more">
                        Media
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
