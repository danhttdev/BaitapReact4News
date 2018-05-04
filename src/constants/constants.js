export const initialState = {
  isPermit:true,
  isLogin:true,
  news: [],
  arrLike: [],
  path:[{path:"/", name: "Home"}, {path:"/about", name: "About"}, {path:"/login", name: "Login"}]
};
export const TOGGLE_PERMIT  = 'TOGGLE_PERMIT';
export const TOGGLE_LOGIN   = 'TOGGLE_LOGIN';
export const GET_NEWS       = 'GET_NEWS';
export const LOGOUT_COMPLETED    = 'LOGOUT_COMPLETED';
export const LIKE                = 'LIKE';
export const DISLIKE             = 'DISLIKE';
export const ADD_NEWS            = 'ADD_NEWS';
export const LOGIN_COMPLETED     = 'LOGIN_COMPLETED';
export const DELETE_NEWS         = 'DELETE_NEWS';
export const LOGIN               = 'LOGIN';
export const EDIT_NEWS           = 'EDIT_NEWS';
export const HOST                = "http://localhost/accounts_redux_4.php";
