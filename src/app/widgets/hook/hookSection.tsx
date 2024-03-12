import styles from "./hookSection.module.css"
import Image from "next/image"

const HookSection = (): JSX.Element => {
    const iconSize = 40

    return (
        <section id={styles.main}>
            <div id={styles.content}>
                {/* SECTION 1 */}
                <section id={styles.description_section}>
                    <h1 id={styles.title}>
                        TROUVEZ
                        <br />
                        VOTRE
                        <br />
                        ALTERNANCE
                    </h1>
                    <div className={styles.flexer} />
                    <article className={styles.describe_bloc}>
                        <Image
                            src="/svg/toolbox.svg"
                            height={iconSize}
                            width={iconSize}
                            alt="Toolbox icon"
                            style={{
                                filter: "invert(100%)",
                            }}
                        />
                        <h2>Toutes les offres d'alternances</h2>
                        <p>Soyez le premier à recevoir les annonces d'alternance de tous les site d'emplois</p>
                    </article>
                    <div className={styles.vertical_divider} />
                    <article className={styles.describe_bloc}>
                        <Image
                            src="/svg/clock.svg"
                            height={iconSize}
                            width={iconSize}
                            alt="Toolbox icon"
                            style={{
                                filter: "invert(100%)",
                            }}
                        />
                        <h2>Recherche simple et rapide</h2>
                        <p>Accédez en quelques cliques aux informations importantes du poste</p>
                    </article>
                    <div className={styles.vertical_divider} />
                    <article className={styles.describe_bloc}>
                        <Image
                            src="/svg/chat.svg"
                            height={iconSize}
                            width={iconSize}
                            alt="Toolbox icon"
                            style={{
                                filter: "invert(100%)",
                            }}
                        />
                        <h2>Aucune annonce d'écoles</h2>
                        <p>Vous retrouverez uniquement les offres d'alternance issues des entreprises</p>
                    </article>
                </section>
                {/* SECTION 2 */}
                <section id={styles.search_section}>
                    <input type="text" placeholder="Recherche par mots-clés" />
                    <button>Lancer la recherche</button>
                </section>
            </div>
        </section>
    )
}

export default HookSection
