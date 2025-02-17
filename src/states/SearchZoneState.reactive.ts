import { Status } from '@/core/Status'
import type Zone from '@/models/Zone.model'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { reactive } from 'vue'

interface SearchBarStateI {
  status: Status
  data: Zone[] | null
  onInit(text: string): Promise<void>
  onUpdate(text: string): Promise<void>
}

async function fetch(text: string): Promise<AxiosResponse<Zone[]>> {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: `${import.meta.env.VITE_API_URL}/zones`,
    headers: {
      Accept: 'application/json',
    },
    params: {
      text: text,
    },
  }
  return axios.request<Zone[]>(options)
}

let refTimeout: NodeJS.Timeout | null = null

export const SearchBarState = reactive<SearchBarStateI>({
  status: Status.NONE,
  data: [],
  onInit: async function (text: string): Promise<void> {
    try {
      if (!text) {
        this.data = []
        this.status = Status.SUCCESS
        return
      }

      this.status = Status.LOADING
      const res = await fetch(text)
      if (res.status != 200 && res.status != 206) {
        this.data = []
        this.status = Status.FAILURE
        return
      }

      if (res.status != 200 && res.status != 206) {
        this.data = []
        this.status = Status.FAILURE
        return
      }

      this.data = res.data
      this.status = Status.SUCCESS
    } catch (err) {
      if (import.meta.env.MODE == 'dev') {
        console.log(err)
      }

      this.status = Status.FAILURE
      this.data = []
    }
  },

  onUpdate: async function (text: string): Promise<void> {
    try {
      if (refTimeout != null) {
        clearTimeout(refTimeout)
      }

      if (!text) {
        this.data = []
        this.status = Status.SUCCESS
        return
      }

      this.status = Status.LOADING
      refTimeout = setTimeout(async () => {
        const res = await fetch(text)
        if (res.status != 200 && res.status != 206) {
          this.data = []
          this.status = Status.FAILURE
          return
        }

        if (res.status != 200 && res.status != 206) {
          this.data = []
          this.status = Status.FAILURE
          return
        }

        this.data = res.data
        this.status = Status.SUCCESS
      }, 500)
    } catch (err) {
      if (import.meta.env.MODE == 'dev') {
        console.log(err)
      }

      this.status = Status.FAILURE
      this.data = []
    }
  },
})
