import { handleHTTPError } from './httpErrorHandler.utils'

const constructURLparams = (...params: { key: string; value: string }[]) => {
  let paramsPart = ''
  params.map((i) => {
    paramsPart += `${i.key}=${i.value}&`
  })
  return paramsPart
}

export const makePostRequest = async (URL: string, body: any) => {
  try {
    const pRes = await fetch(`${URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: process.env.SUPABASE_ANON_KEY ?? '',
        Prefer: 'return=representation',
      },
      body: JSON.stringify(body),
    })
    if (!pRes.ok) throw new Error(JSON.stringify(handleHTTPError(pRes)))
    const data = pRes.json()
    return await data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}

export const makeGetRequest = async (URL: string, ...params: { key: string; value: string }[]) => {
  try {
    let getURL = `${URL}?apikey=${process.env.SUPABASE_ANON_KEY}&`
    let paramsPart = params.length ? constructURLparams(...params) : ''
    getURL += paramsPart
    const gRes = await fetch(getURL)
    if (!gRes.ok) throw new Error(JSON.stringify(handleHTTPError(gRes)))
    const data = gRes.json()
    return await data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
