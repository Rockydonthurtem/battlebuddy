import axios from "axios";

const GET_USERS = "GET_USERS";
const NEW_USERS = "NEW_USERS";
const DELETE_USERS = "DELETE_USERS";
const EDIT_USERS = "EDIT_USERS";
const GET_LOC = "GET_LOC";

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

export function deleteUsers(id) {
  return {
    type: DELETE_USERS,
    payload: axios.delete(`/api/delete/${id}`)
  };
}

export function editUsers(id, name, email, phone_number, address) {
  return {
    type: EDIT_USERS,
    payload: axios.put(`/api/editUsers/${id}`)
  };
}

export function getLoc(latLng) {
  return {
    type: GET_LOC,
    payload: axios.post("/api/map", { latLng })
  };
}
const initialState = {
  users: [],
  isLoading: false,
  errMessage: " ",
  latLng: []
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

    case DELETE_USERS:
      return {
        ...state,
        users: action.payload.data
      };
    case GET_LOC:
      return {
        ...state,
        latLng: action.payload.data
      };
    default:
      return state;
  }
}
