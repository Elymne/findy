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
                        Findy Alternance est un projet à but non lucratif créé par deux associés dans le but d'aider les jeunes étudiants à
                        trouver facilement une alternances sans que celle-ci ne provienne d' une école privé dans un contexte où la plupart
                        des offres d'alternances trouvables sur les sites de recherches d'emplois en sont remplis. Il s'agit tout simplement
                        d'un agrégateur d'offres d'emplois répertoriant une liste non exaustive d'offres d'emplois issues de plusieurs
                        plateformes.
                    </p>
                    <ul>
                        <li>Nom de l'association : Findy-Alternance</li>
                        <li>Email : findy.alternance@outlook.fr</li>
                    </ul>
                </section>
                <section>
                    <h1>Hébergeur</h1>
                    <p>Le site findy-alternance.com est hébergé par la plateforme Vercel.</p>
                </section>
            </div>
        </main>
    )
}
