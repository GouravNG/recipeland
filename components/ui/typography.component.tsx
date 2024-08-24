import { IBM_Flex } from '@/utils/fonts'

type TypographyProps = {
  varient: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: string
  style?: string[]
}
const Typography: React.FC<TypographyProps> = ({
  children,
  varient,
  style = `${IBM_Flex.className} underLineDecoration py-3`,
}) => {
  switch (varient) {
    case 'h1':
      return <h1 className={`${style} text-3xl`}>{children}</h1>
    case 'h2':
      return <h2 className={`${style} text-2xl`}>{children}</h2>
    case 'h3':
      return <h3 className={`${style} text-xl`}>{children}</h3>
    case 'h4':
      return <h4 className={`${style} text-lg`}>{children}</h4>
    case 'h5':
      return <h5 className={`${style} text-sm`}>{children}</h5>
    case 'h6':
      return <h6 className={`${style}`}>{children}</h6>
    default:
      return <p>{children}</p>
  }
}
export default Typography
