export const CLEAR_INPUT = 'CLEAR_INPUT'
export const UPDATE_INPUT = 'UPDATE_INPUT'

export const clearInput = () => {
  return {
    type: CLEAR_INPUT,
  }
}

export const updateInput = value => {
  return {
    type: UPDATE_INPUT,
    payload: {
      value,
    },
  }
}
