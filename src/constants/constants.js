export const initialStateCommon = {
  isPermit:true,
  path:[{path:"/", name: "Home"}, {path:"/login", name: "Login"}, {path:"/signup", name: "Signup"}] 
}
export const initialStateAccount = {
  userlogin:{
    username: "",
    password: ""
  },
  isLogin:false,
};
export const initialStateNews = {
  news: [],
};

export const TOGGLE_PERMIT       = 'TOGGLE_PERMIT';
export const TOGGLE_LOGIN        = 'TOGGLE_LOGIN';
export const GET_NEWS            = 'GET_NEWS';
export const LOGOUT_COMPLETED    = 'LOGOUT_COMPLETED';
export const PASSWORD_NO_MATCH   = 'Mật khẩu không khớp';
export const LIKE                = 'LIKE';
export const DISLIKE             = 'DISLIKE';
export const ADD_NEWS            = 'ADD_NEWS';
export const LOGIN_COMPLETED     = 'LOGIN_COMPLETED';
export const LOGIN_UNCOMPLETED   = 'Đăng nhập thất bại';
export const SIGNUP_COMPLETED    = 'SIGNUP_COMPLETED';
export const SIGNUP_UNCOMPLETED  = 'SIGNUP_UNCOMPLETED';
export const MSG1                = 'Đăng kí thành công, vui lòng đăng nhập';
export const MSG2                = 'Đăng kí không thành công';
export const DELETE_NEWS         = 'DELETE_NEWS';
export const LOGIN               = 'LOGIN';
export const EDIT_NEWS           = 'EDIT_NEWS';
export const HOST                = "http://localhost/accounts_redux_4.php";
