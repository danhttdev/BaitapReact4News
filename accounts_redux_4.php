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
    $sqlCheckExist = "SELECT * FROM accounts WHERE username='$username'";
    if ($result = mysqli_query($conn,$sqlCheckExist)){
        $row = mysqli_fetch_assoc($result);
        if ($row['username'] != "" ) echo "SIGNUP_UNCOMPLETED";
        else {
            if ($result2 = mysqli_query($conn,$sqlSubmit)){
                echo "SIGNUP_COMPLETED";
            }
        }
    }
}
function addnews($username,$content){
    $conn = mysqli_connect('localhost', 'root', '12345678', 'baitapreact4') or die ('Không thể kết nối tới database');
    $sqlSubmit = "INSERT INTO news (id,username,content, countlike) VALUES (rand(),'$username','$content',0)";
    if ($result2 = mysqli_query($conn,$sqlSubmit)){
        echo "ADDED";
    }
    else echo "UN_ADDED";
}
function getData() {
    $conn = mysqli_connect('localhost','root', '12345678','baitapreact4') or die ('Khong ket noi dc');
    $sqlGetdata = "SELECT * FROM news";
    $resultGetRecord = mysqli_query($conn, $sqlGetdata);
    $data = array();
    while($row = mysqli_fetch_assoc($resultGetRecord))
    {
        array_push($data, array('id' => $row['id'], 'username' => $row["username"],'content'=> $row["content"], 'countlike' => intval($row["countlike"])));
    }
    $json = json_encode($data);
    echo $json;		
}
function like($id){
    $conn = mysqli_connect('localhost','root', '12345678','baitapreact4') or die ('Khong ket noi dc');
    $sqlUpdateLike = "UPDATE news SET countlike = countlike + 1 WHERE id='$id'";
    if (mysqli_query($conn,$sqlUpdateLike)){
        echo "LIKED";
    }
}
function dislike($id){
    $conn = mysqli_connect('localhost','root', '12345678','baitapreact4') or die ('Khong ket noi dc');
    $sqlUpdateLike = "UPDATE news SET countlike = countlike - 1 WHERE id='$id'";
    if (mysqli_query($conn,$sqlUpdateLike)){
        echo "DISLIKED";
    }
}
function editnews($idnews,$updatenews){
    $conn = mysqli_connect('localhost','root', '12345678','baitapreact4') or die ('Khong ket noi dc');
    $sqlUpdateLike = "UPDATE news SET content = '$updatenews' WHERE id='$idnews'";
    if (mysqli_query($conn,$sqlUpdateLike)){
        echo "EDITED";
    }
}
function deletenews($id) {
    $sqlDeleteNews = " DELETE FROM news WHERE id='$id'";
    $conn = mysqli_connect('localhost','root', '12345678','baitapreact4') or die ('Khong ket noi dc');
    if (mysqli_query($conn,$sqlDeleteNews)){
        echo "DELETED";
    }
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

        $idnewslike         = $data->idnewslike;
        $idnewsdislike      = $data->idnewsdislike;
        $idnewsdelete       = $data->idnewsdelete;
        $content            = $data->content;
        $updatenews         = $data->updatenews;
        $idnews             = $data->idnews;

        if ( $password!="" && $password2=="") login($username,$password);
        else if ( $password == $password2 && $password!="") signup( $username,$password);
        else if ( $idnewslike != "") like($idnewslike);
        else if ( $idnewsdislike != "" ) dislike($idnewsdislike);
        else if ( $idnewsdelete != "") deletenews($idnewsdelete);
        else if ( $username != "" && $content != "") addnews($username,$content);
        else if ( $updatenews != "" && $idnews != "") editnews($idnews,$updatenews);
        break;
    case 'DELETE':
        break;
    default:
        break;
}
sleep(0.3);

mysqli_close($connect); 
?> 
