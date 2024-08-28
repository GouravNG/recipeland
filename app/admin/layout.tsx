import Typography from '@/components/ui/typography.component'
import Link from 'next/link'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className='p-1 '>
        <div className='flex items-center justify-center p-2 m-1'>
          <Typography varient='h1' style='font-bold'>
            Admin Dashboard
          </Typography>
        </div>
        <div className='flex w-full gap-2 h-96'>
          <div className='flex flex-col w-1/4 bg-blue-300 items-start px-3'>
            <Link href={'/admin/ping'} className='p-4 font-bold text-center'>
              Ping
            </Link>
            <Link href={'/admin/run'} className='p-4 font-bold text-center'>
              Run Query
            </Link>
            <Link href={'/admin/seed'} className='p-4 font-bold text-center'>
              Seed
            </Link>
          </div>
          <div className='w-3/4'>{children}</div>
        </div>
      </div>
    </>
  )
}
