export interface Usecase<P> {
  perform: (params: P) => Promise<Result>
}

export interface UsecaseNoParams {
  perform: () => Promise<Result>
}

export interface Result {
  logMessage: string
}

export interface Success<D> extends Result {
  data: D
}

export interface Failure<E> extends Result {
  code: number
  error: E
}
