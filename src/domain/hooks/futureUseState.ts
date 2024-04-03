export interface FutureUseState<T> {
    getState: ({ onInit, onWaiting, onLoading, onSuccess, onFailure }: CallbackState<T>) => JSX.Element
}

export type CallbackState<T> = {
    onInit?: OnInit
    onWaiting?: OnWaiting
    onLoading?: OnLoading
    onSuccess?: OnSucess<T>
    onFailure?: OnFailure
}

export interface State<T> {
    value: T | null
    error: unknown | null
}

export type OnInit = () => JSX.Element
export type OnWaiting = () => JSX.Element
export type OnLoading = () => JSX.Element
export type OnSucess<T> = (value: T) => JSX.Element
export type OnFailure = (error: unknown) => JSX.Element
