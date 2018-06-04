import {CLEAR_INPUT, UPDATE_INPUT} from '../actions/input'

const inputDefault = ''

export default (input = inputDefault, action) => {
  const {type, payload} = action

  switch (type) {
    case CLEAR_INPUT: {
      return inputDefault
    }

    case UPDATE_INPUT: {
      return input + payload.value
    }

    default: {
      return input
    }
  }
}
