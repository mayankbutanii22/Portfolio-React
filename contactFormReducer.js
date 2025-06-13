import { UPDATE_FORM } from './actions';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

function contactFormReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
       [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
}

export default contactFormReducer;

