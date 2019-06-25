var usernameInput = $('#username')[0];
var passwordInput = $('#password')[0];

$('#confirm').on('click', function(){
    var username = usernameInput.value;
    var password = passwordInput.value;
    if(!username || !password){
        alert('输入不能为空');
        return;
    }

    //登录请求
    $.ajax({
        url: '/api/login',
        method: 'POST',
        data: {
            username: username,
            password: password
        },
        success: function(data){
            console.log('登录的请求完成了');
            if(data.status == 0){
                window.location.href = '/';
            }else{
                alert(data.message);
            }
        },
        fail: function(error){
            console.log('登录的请求失败了');            
        }
    })

})

$('#cancel').on('click', function(){
    usernameInput.value = '';
    passwordInput.value = '';
})