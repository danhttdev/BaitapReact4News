<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

function login($username,$password){
    $conn = mysqli_connect('localhost', 'root', '12345678', 'baitapreact4') or die ('Không thể kết nối tới database');
    $sqlSubmit = " SELECT * FROM accounts WHERE username='$username'";
    if ($result = mysqli_query($conn,$sqlSubmit)){
        $row = mysqli_fetch_assoc($result);
        if ($row['password'] == $password ) echo "LOGIN_COMPLETED";
        else echo "LOGIN_UNCOMPLETED";
    }
}
function signup($username,$password){
    $conn = mysqli_connect('localhost', 'root', '12345678', 'baitapreact4') or die ('Không thể kết nối tới database');
    $sqlSubmit = "INSERT INTO accounts (id,username,password) VALUES (rand(),'$username','$password')";
    if ($result = mysqli_query($conn,$sqlSubmit)){
        echo "SIGNUP_COMPLETED";
    }
    else echo "SIGNUP_UNCOMPLETED";
}
function getData() {
    $conn = mysqli_connect('localhost','root', '12345678','baitapreact4') or die ('Khong ket noi dc');
    $sqlGetdata = "SELECT * FROM news";
    $resultGetRecord = mysqli_query($conn, $sqlGetdata);
    $data = array();
    while($row = mysqli_fetch_assoc($resultGetRecord))
    {
        array_push($data, array('id' => $row['id'], 'username' => $row["username"],'content'=> $row["content"]));
    }
    $json = json_encode($data);
    echo $json;		
}

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'PUT':
        break;
    case 'GET':
        getData();
        break;
    case 'POST':
        $body = file_get_contents('php://input');
        $data = json_decode($body);
        $username       = $data->username;
        $password       = $data->password;
        $password2      = $data->password2;
        if ( $password!="" && $password2=="") login($username,$password);
        else if ( $password == $password2 && $password!="") signup( $username,$password);
        break;
    case 'DELETE':
        break;
    default:
        break;
}
sleep(0.3);

mysqli_close($connect); 
?> 
