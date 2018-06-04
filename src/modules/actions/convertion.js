import apiURLs from '../../lib/api'
import axios from 'axios'

export const CONVERT_INPUT = 'CONVERT_INPUT'
export const CONVERT_INPUT_FAILURE = 'CONVERT_INPUT_FAILURE'
export const CONVERT_INPUT_SUCCESS = 'CONVERT_INPUT_SUCCESS'
export const CONVERT_RESET = 'CONVERT_RESET'

export const convertInput = value => {
  return dispatch => {
    dispatch({
      type: CONVERT_INPUT,
    })
    const config = {
      params: {
        value,
      },
    }
    axios
      .get(apiURLs.convert, config)
      .then(response => {
        dispatch({
          type: CONVERT_INPUT_SUCCESS,
          payload: {
            words: response.data,
          },
        })
      })
      .catch(() => {
        dispatch({
          type: CONVERT_INPUT_FAILURE,
        })
      })
  }
}

export const resetConvertion = () => {
  return {
    type: CONVERT_RESET,
  }
}
