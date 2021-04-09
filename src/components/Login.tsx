import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  userName: string;
  nombre: string;
}

type LoginPayload = {
  userName: string;
  name: string;
};

const initialState: AuthState = {
  validando: true,
  token: null,
  userName: "",
  nombre: "",
};

type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case "logout":
      return {
        ...state,
        validando: false,
        token: null,
      };
    case "login":
      return {
        ...state,
        validando: false,
        token: "rtyghjbnk",
        nombre: action.payload.name,
        userName: action.payload.userName,
      };
    default:
      return state;
  }
};

export const Login = () => {
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const loginAction = () =>
    dispatch({
      type: "login",
      payload: { userName: "JassoEC", name: "Emanuel" },
    });

  const logoutAction = () => dispatch({ type: "logout" });

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return token ? (
    <>
      <div className="alert alert-success">Bienvenido {nombre}</div>
      <button onClick={logoutAction} className="btn btn-danger">
        Logout
      </button>
    </>
  ) : (
    <>
      <div className="alert alert-danger">No autenticado...</div>
      <button onClick={loginAction} className="btn btn-primary me-2">
        Login
      </button>
    </>
  );
};
