import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography.component'
import { adminCustomQuery } from '@/lib/actions/admin.actions'

const RunQuery = () => {
  return (
    <div>
      <Typography varient='h3'> Run custom query</Typography>
      <form action={adminCustomQuery} className='flex flex-col gap-2 p-2'>
        <textarea name='myQuery' id='myQuery' rows={10} cols={80} className=' border border-blue-200'></textarea>
        <div className=''>
          <Button type='submit'>Run query</Button>
        </div>
      </form>
    </div>
  )
}

export default RunQuery
