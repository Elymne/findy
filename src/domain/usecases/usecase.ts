export interface Usecase<P, R> {}

export interface Result<T> {
    value: T
}

export interface Success<T> extends Result<T> {}

export interface Failure<T> extends Result<T> {
    error: any
}
