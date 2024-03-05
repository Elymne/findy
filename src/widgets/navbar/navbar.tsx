import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.navbar} aria-label="Navbar">
            <ul>
                <li>
                    <a id={styles.title} href="/">
                        FINDY ALTERNANCE
                    </a>
                </li>
                <li>
                    <a href="/job-offers">Job-offers</a>
                </li>
                <li>
                    <a href="/more">More</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
