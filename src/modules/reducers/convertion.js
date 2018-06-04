import {
  CONVERT_INPUT,
  CONVERT_INPUT_FAILURE,
  CONVERT_INPUT_SUCCESS,
  CONVERT_RESET,
} from '../actions/convertion'

const initialState = {
  words: [],
  loading: false,
  serverError: false,
}

export default (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case CONVERT_INPUT: {
      return {
        ...state,
        loading: true,
      }
    }

    case CONVERT_INPUT_FAILURE: {
      return {
        ...initialState,
        serverError: true,
      }
    }

    case CONVERT_INPUT_SUCCESS: {
      return {
        words: payload.words,
        loading: false,
        serverError: false,
      }
    }

    case CONVERT_RESET: {
      return initialState
    }

    default: {
      return state
    }
  }
}
