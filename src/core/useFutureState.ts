export interface OnLoading {
    (): JSX.Element
}

export interface OnSucess<T> {
    (value: T): JSX.Element
}

export interface OnFailure {
    (error: any): JSX.Element
}
