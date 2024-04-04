export interface FutureUseState<T> {
    getState: ({ onLoading, onSuccess, onFailure }: CallbackState<T>) => JSX.Element
}

export interface State<T> {
    value: T | null
    error: unknown | null
}

export type CallbackState<T> = {
    onLoading: OnLoading
    onSuccess: OnSucess<T>
    onFailure: OnFailure
}

type OnLoading = () => JSX.Element
type OnSucess<T> = (result: T) => JSX.Element
type OnFailure = (error: unknown) => JSX.Element
