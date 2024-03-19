import styles from "./errorBloc.module.css"

type ErrorContent = {
    value: string
}

export default function ErrorBloc({ value }: ErrorContent) {
    return (
        <section id={styles.main}>
            <h1>{value}</h1>
        </section>
    )
}
