import { ListResponse, something } from 'core/models'
import axiosClient from 'core/libs/axiosClient'

const somethingApi = {
  getAll(): Promise<ListResponse<something>> {
    const url = '/something'
    return axiosClient.get(url)
  },
}
export default somethingApi
