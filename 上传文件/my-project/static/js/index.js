$('#myModal').modal();


 $('#confirm').on('click', function(){
    //  跳转到登录页面
    window.location.href = '/login';
 })


 $("form").on('change', function(){
     $.ajax({
         url: '/api/upload',
         method: 'POST',
         data: new FormData(document.querySelector('form')),
         processData: false,
         contentType: false,
         success: function(data){
            console.log('提交成功');
            console.log(data);
            if(data.status == 0){
                document.querySelector('#header').src = data.data.path;
            }else{
                alert(data.message);
            }
         }
     })
 })