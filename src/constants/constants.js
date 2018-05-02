export const initialState = {
    isPermit:true,
    isLogin:true,
    news: [],
    path:[{path:"/", name: "Home"}, {path:"/login", name: "Login"}, {path:"/about", name: "About"}, {path:"/news", name: "News"}]
  };
export const TOGGLE_PERMIT  = 'TOGGLE_PERMIT';
export const TOGGLE_LOGIN   = 'TOGGLE_LOGIN';
export const GET_NEWS       = 'GET_NEWS';
export const LOGOUT_COMPLETED    = 'LOGOUT_COMPLETED';
export const LOGIN_COMPLETED    = 'LOGIN_COMPLETED';
export const HOST           = "http://localhost/accounts_redux_4.php";
