import { createStandaloneToast } from '@chakra-ui/react'

const toast = createStandaloneToast()
// const customToast = createStandaloneToast({ theme: yourCustomTheme })

const errorToast = (title:string, description:string) =>{
  toast({
    title: title,
    description: description,
    status: 'error',
    duration: 9000,
    isClosable: true,
  })
}

export default errorToast;
