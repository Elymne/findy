import styles from "./loadingBloc.module.css"

type loadingContent = {
    value: string
    styleMode: LoadingContentStyleMode
}

export enum LoadingContentStyleMode {
    ligth,
    dark,
}

export default function LoadingBloc({ value, styleMode }: loadingContent) {
    function getCurrentStyle(): string {
        if (styleMode == LoadingContentStyleMode.ligth) {
            return styles.light_style
        }
        return styles.dark_style
    }

    return (
        <section id={styles.main}>
            <h1 className={getCurrentStyle()}>{value}</h1>
            <div className={styles.lds_ring}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}
