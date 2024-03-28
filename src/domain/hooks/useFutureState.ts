export type OnInit = () => JSX.Element
export type OnNoLoading = () => JSX.Element
export type OnLoading = () => JSX.Element
export type OnSucess<T> = (value: T) => JSX.Element
export type OnFailure = (error: unknown) => JSX.Element
