import { SET_SEARCH_TERM } from 'actions/search'

export const setSearchTerm = (searchTerm) => {
  return {
    type: SET_SEARCH_TERM,
    searchTerm: searchTerm
  }
}
