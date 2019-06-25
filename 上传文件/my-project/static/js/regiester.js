var usernameInput = $('#username')[0];
var passwordInput = $('#password')[0];
var rePasswordInput = $('#rePassword')[0];

$('#confirm').on('click', function(){
    // 获得用户输入的内容
    var username = usernameInput.value;
    var password = passwordInput.value;
    var rePassword = rePasswordInput.value;
    
    console.log();

    if(!username || !password || !rePassword){
        alert('输入不能为空');
        return;
    }

    if(password != rePassword){
        alert('两次输入的密码不一致');
        return;
    }

    $.ajax({
        url: "/api/regiester",
        method: 'POST',
        data: {
            username: username,
            password: password,
            rePassword: rePassword
        },
        success: function(data){
            console.log('注册的请求完成了');
            if(data.status==0){
                window.location.href = '/login';
            }else{
                alert(data.message);
            }
        },
        fail: function(error){
            console.log('注册的请求失败了');            
        }
    })




})






$('#cancel').on('click', function(){
    usernameInput.value = '';
    passwordInput.value = '';
    rePasswordInput.value = '';
})