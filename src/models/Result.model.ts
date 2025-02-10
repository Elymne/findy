export default interface Result<D> {
  logMessage: string
  code: number
  type: ResultType
  data: D | null
  exception: unknown | null
}

export enum ResultType {
  SUCCESS,
  FAILURE,
}
