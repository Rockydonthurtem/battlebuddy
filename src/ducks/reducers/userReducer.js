import axios from "axios";

const GET_USERS = "GET_USERS";
const NEW_USERS = "NEW_USERS";

export function getUsers() {
  return {
    type: GET_USERS,
    payload: axios.get("/api/users")
  };
}

export function newUsers(name, email, phone_number, address) {
  return {
    type: NEW_USERS,
    payload: axios.post("/api/newUsers", { name, email, address, phone_number })
  };
}
const initialState = {
  users: [],
  isLoading: false,
  errMessage: " "
};

export default function userReducer(state = initialState, action) {
  console.log(action.payload);
  console.log(action.type);
  switch (action.type) {
    case `${GET_USERS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${GET_USERS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        users: action.payload.data
      };

    case `${GET_USERS}_REJECTED`:
      return {
        ...state,
        isLoading: false,
        errMessage: "Failed to get users"
      };

    case NEW_USERS:
      return {
        ...state,
        users: action.payload.data
      };
    default:
      return state;
  }
}
