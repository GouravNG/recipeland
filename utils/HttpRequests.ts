const env = process.env.DOMAIN

export const makePostRequest = async (URL: string, body: any) => {
  try {
    const pRes = await fetch(`${env}${URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: process.env.SUPABASE_ANON_KEY ?? '',
        Prefer: 'return=representation',
      },
      body: JSON.stringify(body),
    })
    // if (!pRes.ok) throw new Error('HTTP Erro!!') // need to handle this
    const data = pRes.json()
    return await data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
