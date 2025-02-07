import { ref } from 'vue'

/**
 * Example de state global, à reprendre pour gérer la recherche actuelle dans la barre de recherche.
 * Quoi que non, j'utiliserais les filtres dans l'url pour que les uitlisateurs puisse partager plus facilement leurs recherches.
 * */
const example = ref<string>('No state')
export function useExample() {
  function updateValue(val: string) {
    example.value = val
  }

  return { example, updateValue }
}
