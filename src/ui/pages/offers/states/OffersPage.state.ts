import { Status } from '@/core/Status'
import type PageOffers from '@/models/PageOffers.model'
import type Zone from '@/models/Zone.model'
import type { AxiosResponse } from 'axios'
import axios from 'axios'
import { reactive } from 'vue'

type fetchParams = {
  keywords?: string
  codezone?: string
  codejob?: string
  distance?: string
  page?: string
}

interface IOffersPageState {
  status: Status
  data: PageOffers | null
  zone: string | null
  fetch(params: fetchParams): Promise<void>
}

const OffersPageState = reactive<IOffersPageState>({
  status: Status.NONE,
  data: null,
  zone: null,

  fetch: async function (params: fetchParams): Promise<void> {
    try {
      this.status = Status.LOADING
      const axiosRequests = new Array<Promise<AxiosResponse>>()

      axiosRequests.push(
        axios.request<PageOffers>({
          method: 'GET',
          url: `${import.meta.env.VITE_API_URL}/offers`,
          headers: {
            Accept: 'application/json',
          },
          params: {
            keywords: params.keywords,
            codezone: params.codezone,
            codejob: params.codejob,
            distance: params.distance,
            page: params.page,
          },
        }),
      )

      if (params.codezone) {
        axiosRequests.push(
          axios.request<Zone>({
            method: 'GET',
            url: `${import.meta.env.VITE_API_URL}/zones/${params.codezone}`,
            headers: {
              Accept: 'application/json',
            },
          }),
        )
      }

      let hasError = false
      const responses = await Promise.all(axiosRequests)
      responses.forEach((value, index) => {
        if ((index == 0 && value.status == 200) || value.status == 204) {
          this.data = responses[0].data
          return
        }
        if (index == 1 && value.status == 200) {
          this.zone = responses[1].data.name
          return
        }
        hasError = true
      })

      if (hasError) {
        this.data = null
        this.zone = null
        this.status = Status.FAILURE
        return
      }

      this.status = Status.SUCCESS
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
