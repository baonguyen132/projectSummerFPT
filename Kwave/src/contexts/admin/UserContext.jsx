import { createContext, useEffect, useReducer } from "react";
import Cookies from "js-cookie";
import loadDataMyInformation from "../../services/admin/userService"

export const UserContext = createContext();

// Initial state for the user context
const initialUserState = null;

// Action types
export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

//User reducer to manage user state

const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return action.data;
    case CLEAR_USER:
      return null;
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, initialUserState);

  useEffect(() => {
    const access_token = Cookies.get("access_token");

    if (access_token) {
      const fetchMyInformation = async () => {
        try {
          const { user, message } = await loadDataMyInformation({
            access_token,
          });
          if (user) {
            dispatch({ type: SET_USER, data: user });
          }
        } catch (error) {
          console.error("Failed to load user information:", error);
        }
      };

      fetchMyInformation();
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
