import styles from "./page.module.css"

export default function Page(): JSX.Element {
    return (
        <main>
            <section id={styles.top_title}>
                <h1>Mentions légales</h1>
            </section>
            <div id={styles.content_bloc}>
                <section>
                    <h1>Editeur</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <ul>
                        <li>Nom commercial : Findy-Alternance</li>
                        <li>Quelque part dans une rue - 44120 Nantes, France</li>
                        <li>Téléphone : +33 00 00 00 00</li>
                        <li>Email : badibux@outlook.com</li>
                    </ul>
                    <ul>
                        <li>N° de SIREN : 123 456 789</li>
                        <li>TVA : pas de TVA mdr</li>
                        <li>Code qui n'existe pas ?</li>
                    </ul>
                </section>
                <section>
                    <h1>Hébergeur</h1>

                    <p>Le site fin-alternance.com est hébergé par vercel.com</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                </section>
            </div>
        </main>
    )
}
