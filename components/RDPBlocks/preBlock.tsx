import Typography from '../ui/typography.component'

type PreviewBlockTypes = {
  previewText: string
}

const PreviewBlock: React.FC<PreviewBlockTypes> = ({ previewText }) => {
  return (
    <>
      <div className='p-2'>
        <Typography varient='h1'>Preview</Typography>
        <p>{previewText}</p>
      </div>
    </>
  )
}
export default PreviewBlock
