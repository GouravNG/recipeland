import { handleHTTPError } from './httpErrorHandler.utils'

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
