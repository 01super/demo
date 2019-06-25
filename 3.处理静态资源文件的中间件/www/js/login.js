var register = (function () {
    return {
        init() {
            this.event()
        },
        event() {
            var _this = this;
            //区号选择
            $("#areacode").click(function (e) {
                e.preventDefault();
                $(".phoneCode").show(function () {
                    $(".phoneCode li").click(function () {
                        // console.log($(this).attr("data-code"));
                        $("#areacode").html($(this).attr("data-code"));

                    });

                });
            });
            $(document).on("click", function (e) {
                e = e || window.event;
                console.log(e);
                if (e.target.className != "phoneCode" && e.target.id != "areacode") {
                    $(".phoneCode").hide();
                }
            });
            // 提交按钮
            $('#login').on('click', function () {
                //正则验证用户名密码
                if (($.trim($("#phonenum").val()) != '') && ($("#password").val() != '')) {
                    var username = $.trim($("#phonenum").val());
                    var phonereg = /^1[3-9]\d{9}$/;
                    var password = $("#password").val();
                    var passwordreg = /\w{6,14}/;
                    //正则验证用户名和密码var
                    if ((phonereg.test(username)) && passwordreg.test(password)) {
                        // 发送ajax，验证用户名和密码
                        sendAjax('php/login.php', {
                            method: 'post',
                            data: {
                                username: $("#phonenum").val(),
                                password: $("#password").val()
                            },
                            success: function (data) {
                                console.log(data)
                                data = JSON.parse(data);
                                _this.login(data);
                            }
                        });
                    } else {
                        _this.ShowMsg('用户名和密码不符合要求');
                    }
                } else {
                    _this.ShowMsg("用户名或密码不能为空");
                }
            })
        },

        login(data) {
            if (data.code == 200) {
                //   注册成功
                alert('注册成功！请返回登录');
                location.href = "register.html"

            } else if (data.code == 1000) {

                //用户名已存在
                alert("用户名已存在")
            } else {
                //未知错误
                this.ShowMsg(data.msg);
            }
        },
        //提示信息
        ShowMsg(str) {
            $("#login_msg").text(str);
            $("#login_msg").show();
            setTimeout(function () {
                $("#login_msg").hide(200);
            }, 2000);
        },

    }

}())