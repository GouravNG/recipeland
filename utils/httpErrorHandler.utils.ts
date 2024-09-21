const createResponse = (code: number, message: string) => {
  return {
    code: code,
    message: message,
  }
}

export const handleHTTPError = (res: Response) => {
  console.log(res)
  return createResponse(0, '')
}
