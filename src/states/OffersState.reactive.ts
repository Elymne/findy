import { Status } from '@/core/Status'
import type PageOffers from '@/models/PageOffers.model'
import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { reactive } from 'vue'

interface PageOffersStateI {
  status: Status
  data: PageOffers | null
  fetch(keywords: string, codezone: string, distance: string, page: string): Promise<void>
}

export const PageOffersState = reactive<PageOffersStateI>({
  status: Status.NONE,
  data: null,
  fetch: async function (
    keywords: string,
    codezone: string,
    distance: string,
    page: string,
  ): Promise<void> {
    try {
      this.status = Status.LOADING
      const options: AxiosRequestConfig = {
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
      }

      const response = await axios.request<PageOffers>(options)

      if (response.status == 200 || response.status == 204) {
        this.data = response.data
        this.status = Status.SUCCESS
        return
      }

      this.data = null
      this.status = Status.FAILURE
    } catch (err) {
      if (import.meta.env.MODE == 'dev') {
        console.log(err)
      }

      this.data = null
      this.status = Status.FAILURE
    }
  },
})
