import styles from "./loadingBloc.module.css"

type loadingContent = {
    value: string
}

export default function LoadingBloc({ value }: loadingContent) {
    return (
        <section id={styles.main}>
            <h1>{value}</h1>
        </section>
    )
}
