import React from 'react'
import Button from '@mui/material/Button'

type Props = {
  image: File | undefined | string
  setImage: (arg: File | undefined | string) => void
}

const FileUploader = (props: Props) => {
  const maxImagesUpload = 1
  const inputId = Math.random().toString(32).substring(2)

  const handleOnAddImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const files: File[] = []

    for( let i = 0; i < e.target.files.length; i++){
        files.push(e.target.files[i])
    }


    props.setImage(files[0])
    e.target.value = ''
  }

  const handleOnRemoveImage = (index: number) => {
    const newImage = props.image
    props.setImage(newImage)
  }

  return (
    <>
      <label htmlFor={inputId}>
        <Button variant='contained' component='span' sx = {{whiteSpace: 'nowrap'}}>
          Choose an Image
        </Button>
        <input
          id={inputId}
          type='file'
          multiple
          accept='image/*,.png,.jpg,.jpeg,.gif'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnAddImage(e)}
          style={{ display: 'none' }}
        />
      </label>
        {props.image && <div style = {{color: 'black'}}>{props.image.name}</div>}


    </>
  )
}

export default FileUploader