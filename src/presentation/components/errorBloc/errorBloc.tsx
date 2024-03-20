import styles from "./errorBloc.module.css"

type ErrorContent = {
    value: string
    styleMode: ErrorContentStyleMode
}

export enum ErrorContentStyleMode {
    ligth,
    dark,
}

export default function ErrorBloc({ value, styleMode }: ErrorContent) {
    function getCurrentStyle(): string {
        if (styleMode == ErrorContentStyleMode.ligth) {
            return styles.light_style
        }
        return styles.dark_style
    }

    return (
        <section id={styles.main}>
            <h1 className={getCurrentStyle()}>{value}</h1>
        </section>
    )
}
