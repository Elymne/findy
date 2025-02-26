import { reactive } from 'vue'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { Status } from '@/core/Status'
import type Zone from '@/models/Zone.model'

interface SearchZoneStateI {
  status: Status
  data: Zone[] | null
  onInit(codeZone: string): Promise<void>
  onUpdate(inputValue: string): Promise<void>
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
   * @param {string} codeZone INSEE code.
   * @returns {void}
   */
  onInit: async function (codeZone: string): Promise<void> {
    try {
      this.status = Status.LOADING
      const res = await fetch(codeZone)
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

  onUpdate: async function (inputValue: string): Promise<void> {
    try {
      if (refTimeout != null) {
        clearTimeout(refTimeout)
      }

      if (inputValue.length == 0) {
        this.data = []
        this.status = Status.SUCCESS
        return
      }

      this.status = Status.LOADING
      refTimeout = setTimeout(async () => {
        const res = await fetch(inputValue)
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
