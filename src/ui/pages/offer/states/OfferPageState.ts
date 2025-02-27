import { Status } from '@/core/Status'
import type OfferDetailed from '@/models/OfferDetailed.model'
import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { reactive } from 'vue'

interface IOfferPageState {
  status: Status
  data: OfferDetailed | null
  fetch(id: string | undefined): Promise<void>
}

const OfferPageState = reactive<IOfferPageState>({
  status: Status.NONE,
  data: null,
  fetch: async function (id: string | undefined): Promise<void> {
    try {
      if (!id) {
        this.data = null
        this.status = Status.FAILURE
        return
      }

      this.status = Status.LOADING
      const options: AxiosRequestConfig = {
        method: 'GET',
        url: `${import.meta.env.VITE_API_URL}/offers/${id}`,
        headers: {
          Accept: 'application/json',
        },
      }

      const response = await axios.request(options)

      if (response.status != 200) {
        this.data = null
        this.status = Status.FAILURE
        return
      }

      this.data = response.data
      this.status = Status.SUCCESS
    } catch (err) {
      if (import.meta.env.MODE == 'dev') {
        console.log(err)
      }

      this.data = null
      this.status = Status.FAILURE
    }
  },
})

export default OfferPageState
