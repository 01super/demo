<?php
    $json = file_get_contents("php://input");
    $json = json_decode($json);
    // var_dump($json);
    $username = $json -> username;
    $pwd = $json -> password;
    $coon = new Mysqli("localhost", "root", "", "meizu", 3306);
    $sql = "INSERT into `user` (username, password) VALUES ('$username','$pwd')";
    $coon->query("SET CHARACTER SET 'utf8'");//读库
    $coon->query("SET NAMES 'utf8'");//写库
    $result = $coon -> query($sql);
    if($result) {
        // 注册成功
        $arr = array("code" => "200", "msg" => "注册成功");
    } else {
        // 注册失败
        $arr = array("code" => "1000", "msg" => "用户名已存在，请登录");
    }
    echo json_encode($arr);

?>