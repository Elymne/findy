import type { IName } from './IName'

type Binding = (args: string[]) => object

const bindings: Record<string, Binding> = {}

export const Container = {
  add: function (key: IName, builder: Binding): void {
    bindings[key] = builder
  },

  get: function (key: IName, args: string[]): object {
    if (bindings[key] == undefined) {
      throw new Error(`Class from key $key not found`)
    }
    return bindings[key](args)
  },
}
