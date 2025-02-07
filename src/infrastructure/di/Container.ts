import type { IName } from './IName'

type Binding = () => object

const bindings: Map<string, Binding> = new Map<string, Binding>()

export const Container = {
  add: function (key: IName, builder: Binding): void {
    bindings.set(key, builder)
  },

  get: function (key: IName): object {
    const binding = bindings.get(key)
    if (binding == undefined) {
      throw new Error(
        `Interface from enum key $key not found.
        Be sure to add any injectable Interface to IName enum and check that the interface has been added to Container.
        `,
      )
    }
    return binding()
  },
}
