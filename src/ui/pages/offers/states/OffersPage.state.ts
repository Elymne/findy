import { Status } from '@/core/Status'
import type PageOffers from '@/models/PageOffers.model'
import type Zone from '@/models/Zone.model'
import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { reactive } from 'vue'

interface IOffersPageState {
  status: Status
  data: PageOffers | null
  zone: string | null
  fetch(keywords: string, codezone: string, distance: string, page: string): Promise<void>
}

const OffersPageState = reactive<IOffersPageState>({
  status: Status.NONE,
  data: null,
  zone: null,

  fetch: async function (
    keywords: string,
    codezone: string,
    distance: string,
    page: string,
  ): Promise<void> {
    try {
      this.status = Status.LOADING
      const options: AxiosRequestConfig[] = [
        {
          method: 'GET',
          url: `${import.meta.env.VITE_API_URL}/offers`,
          headers: {
            Accept: 'application/json',
          },
          params: {
            keywords: keywords,
            codezone: codezone,
            distance: distance,
            page: page,
          },
        },
        {
          method: 'GET',
          url: `${import.meta.env.VITE_API_URL}/zone/${codezone}`,
          headers: {
            Accept: 'application/json',
          },
        },
      ]

      const response = await Promise.all([
        await axios.request<PageOffers>(options[0]),
        await axios.request<Zone>(options[1]),
      ])

      if ((response[0].status == 200 || response[0].status == 204) && response[1].status == 200) {
        this.data = response[0].data
        this.zone = response[1].data.name
        this.status = Status.SUCCESS
        return
      }

      this.data = null
      this.zone = null
      this.status = Status.FAILURE
    } catch (err) {
      if (import.meta.env.MODE == 'dev') {
        console.log(err)
      }

      this.data = null
      this.zone = null
      this.status = Status.FAILURE
    }
  },
})

export default OffersPageState
