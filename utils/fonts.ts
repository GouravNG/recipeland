import { DM_Serif_Display } from 'next/font/google'
import { IBM_Plex_Serif } from 'next/font/google'
import { Inter } from 'next/font/google'
import { Open_Sans } from 'next/font/google'
import { Grey_Qo } from 'next/font/google'

export const IBM_Flex = IBM_Plex_Serif({ weight: '400', subsets: ['latin'] })
export const DMS = DM_Serif_Display({ weight: '400', subsets: ['latin'] })
export const inter = Inter({ subsets: ['latin'] })
export const openSans = Open_Sans({ subsets: ['latin'] })
export const handwriting = Grey_Qo({ subsets: ['latin'], weight: '400' })
