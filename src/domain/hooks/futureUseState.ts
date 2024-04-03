export interface FutureUseState<T> {
    getState: ({ onLoading, onSuccess, onFailure }: CallbackState<T>) => JSX.Element
}

export interface State<T> {
    value: T | null
    error: unknown | null
}

// TODO make it better, a sort of list of possible, callback events for our hook state.
type CallbackState<T> = {
    onLoading: OnLoading
    onSuccess: OnSucess<T>
    onFailure: OnFailure
}

export type OnLoading = () => JSX.Element
export type OnSucess<T> = (value: T) => JSX.Element
export type OnFailure = (error: unknown) => JSX.Element
