import { createServiceProvider } from '@/api/endpoints/serviceProviderApi'
import type { ServiceProviderDto } from '@/types/index'
import { useToast } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'

export const useCreateServiceProviderMutation = () => {
  const toast = useToast()

  return useMutation(
    (serviceProvider: ServiceProviderDto) =>
      createServiceProvider(serviceProvider),
    {
      onSuccess: () => {
        toast({
          title: 'Success!',
          description: 'Form submitted successfully',
          status: 'success',
        })
      },
      onError: (error) => {
        const message =
          error instanceof Error ? error.message : 'error connecting to server'
        toast({
          title: 'Error!',
          description: message,
          status: 'error',
        })
      },
    },
  )
}
