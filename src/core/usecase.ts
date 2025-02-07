export interface Usecase<D, P> {
  perform(params: P): Promise<Result<D>>
}

export interface UsecaseNoParams<D> {
  perform(): Promise<Result<D>>
}

export interface Result<D> {
  logMessage: string
  data: D
}

export interface Failure<D> extends Result<D> {
  code: number
  exception: string | null
}
