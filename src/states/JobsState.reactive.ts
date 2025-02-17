import { Status } from '@/core/Status'
import type Job from '@/models/Job.module'
import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { reactive } from 'vue'

interface JobsStateI {
  status: Status
  data: Job[] | null
  fetch(): Promise<void>
}

export const JobsState = reactive<JobsStateI>({
  status: Status.NONE,
  data: [],
  fetch: async function (): Promise<void> {
    try {
      this.status = Status.LOADING
      const options: AxiosRequestConfig = {
        method: 'GET',
        url: `${import.meta.env.VITE_API_URL}/jobs`,
        headers: {
          Accept: 'application/json',
        },
      }

      const response = await axios.request<Job[]>(options)

      if (response.status == 200 || response.status == 204) {
        this.data = response.data.slice(0, 20)
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
