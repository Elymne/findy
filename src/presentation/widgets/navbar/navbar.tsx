import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <header id={styles.header}>
            <nav id={styles.navbar} aria-label="Navbar">
                <ul>
                    <li>
                        <a href="/">FINDY</a>
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
        </header>
    )
}

export default Navbar
