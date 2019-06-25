var register = (function () {
    return {
        init() {
            this.event()
        },
        event() {
            var _this = this
            //区号显示
            $('.select_box').on("click", function (e) {

                // e.stopPropagation()
                // $(".phoneCode").show(function () {
                //     $(".phoneCode li").on('click', function () {
                //         console.log($(this).attr("data-code"));
                //         $('#areacode').val($(this).attr("data-code"));
                //     })
                // });

                $(".phoneCode").show();
                $(".phoneCode li").on('click', function () {
                    console.log($(this).attr("data-code"));
                    $('#areacode').val($(this).attr("data-code"));
                })
            });
            $(document).on("click", function (e) {
                e = e || window.event;
                var target = e.target || window.event
                e.stopPropagation()
                if (target.className != "phoneCode" && target.id != "areacode") {
                    $(".phoneCode").hide();
                }
            })
            $(".sub").on("click", function (e) {
                        e.preventDefault()
                        sendAjax("php/register.php", {
                            method: "post",
                            data: {
                                username: $(".ipt_phone").val(),
                                password: $(".ipt_psd").val()
                            },
                            success(data) {
                                data = JSON.parse(data);
                                console.log(data)
                                _this.register(data)
                            }
                        })
                })
        },
        register(data) {
            var _this = this;
            if (data.code == 200) {
                localStorage.name=data.data.name
                alert("登录成功");
                location.href="index.html"
            } else if (data.code == 1000) {
                _this.showmsg(data.msg)
            }

        },
        showmsg(str) {
            $('#register_msg').html(str);
            $('#register_msg').show();
            setInterval(function () {
                $('#register_msg').hide();
            }, 2000)
        }

    }
}())

