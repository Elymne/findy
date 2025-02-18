import { Status } from '@/core/Status'
import type Offer from '@/models/Offer.model'
import type { SampleCode } from '@/models/SampleCode.enum'
import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { reactive } from 'vue'

interface ISectionSampleState {
  status: Status
  data: Offer[] | null
  fetch(code: SampleCode): Promise<void>
}

const SectionSampleState = reactive<ISectionSampleState>({
  status: Status.NONE,
  data: [],
  fetch: async function (code: SampleCode): Promise<void> {
    try {
      this.status = Status.LOADING
      const options: AxiosRequestConfig = {
        method: 'GET',
        url: `${import.meta.env.VITE_API_URL}/offers/sample`,
        headers: {
          Accept: 'application/json',
        },
        params: {
          code: code,
        },
      }

      const response = await axios.request(options)

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

export default SectionSampleState
