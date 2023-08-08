import { axiosClient } from '@/api/base/axios'
import type { ServiceProviderDto } from '@/types/index'

export const createServiceProvider = async (
  serviceProvider: ServiceProviderDto,
) => {
  const { data } = await axiosClient.post('service-providers', serviceProvider)
  return data
}
