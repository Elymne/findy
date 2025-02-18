import { Status } from '@/core/Status'
import type Zone from '@/models/Zone.model'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { reactive } from 'vue'

interface SearchZoneStateI {
  status: Status
  data: Zone[] | null
  onInit(text: string | null): Promise<void>
  onUpdate(text: string | null): Promise<void>
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

/**
 * This usecase fo this reactive component is to fidn the list of France region when user is searching region from Region input searchBar.
 */
export const SearchZoneState = reactive<SearchZoneStateI>({
  status: Status.NONE,
  data: [],

  /**
   * I need this when I'm using the Offers page because a code city can be used to filters offers from the previous search from any page.
   * The code should be taken from url.
   * @param {string} code INSEE code.
   * @returns {void}
   */
  onInit: async function (code: string): Promise<void> {
    try {
      if (!code) {
        this.data = []
        this.status = Status.SUCCESS
        return
      }

      this.status = Status.LOADING
      const res = await fetch(code)
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
