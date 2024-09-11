type RunQuerySucess<T> = {
  status: 'success'
  queryResponse: T[]
}

type RunQueryFail = {
  status: 'fail'
  errorResponse: string
}

export type RunQueryResponse<T> = RunQuerySucess<T> | RunQueryFail

export type RunQueryParam = string | number | boolean | null
