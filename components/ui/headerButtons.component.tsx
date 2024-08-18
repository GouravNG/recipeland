import Link from 'next/link'
import { Button } from './button'
import { ButtonType } from '@/types/common.type'

type headerButtonsProps = {
  headerButtons: ButtonType[]
  varient?: 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | null | undefined
}

const HeaderButtons: React.FC<headerButtonsProps> = ({ headerButtons, varient }) => {
  return (
    <>
      <div className='flex items-center justify-end'>
        {headerButtons.map((i, index) => {
          return (
            <Button key={index} variant={varient}>
              <Link href={i.link} title={i.link}>
                {i.name}
              </Link>
            </Button>
          )
        })}
      </div>
    </>
  )
}
export default HeaderButtons
