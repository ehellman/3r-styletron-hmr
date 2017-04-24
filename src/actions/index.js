import { SET_SEARCH_TERM } from 'actions/search'
import { ADD_OMDB_DATA } from 'actions/omdb'
import axios from 'axios'

export const setSearchTerm = (searchTerm) => {
  return {
    type: SET_SEARCH_TERM,
    searchTerm: searchTerm
  }
}

export const addOmdbData = (imdbID, omdbData) => {
  return {
    type: ADD_OMDB_DATA,
    imdbID,
    omdbData
  }
}

// YOU call this function
export const getOmdbDetails = (imdbID) => {
  // REDUX calls this function for you
  return (dispatch, getState) => {
    axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
      .then(response => {
        dispatch(
          addOmdbData(imdbID, response.data)
        )
      })
      .catch(error => console.error('axios error', error))
  }
}
