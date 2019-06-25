var shop_list = (function () {
    //渲染导航栏二级菜单
    return {
        init() {
            for (var i = 0; i < 8; i++) {
                $(".nav-phone").prepend("<li><a href='#'><img src='img/l1.png'/><p>魅族16th</p><span>￥2699</span> </a> </li>")
            }
            var shop_img = function (ele) {
                $(ele).on("mouseenter", function () {
                    if (ele == ".z1") {
                        $(".nav-box li a img").attr("src", "img/l1.png")
                    }
                    if (ele == ".z2") {
                        $(".nav-box li a img").attr("src", "img/m1.png")
                    }
                    if (ele == ".z3") {
                        $(".nav-box li a img").attr("src", "img/n1.jpg")
                    }
                    if (ele == ".z4") {
                        $(".nav-box li a img").attr("src", "img/k1.png")
                    }
                })
            }
            shop_img(".z1")
            shop_img(".z2")
            shop_img(".z3")
            shop_img(".z4")
            this.event();
            this.shop_count()


        },
        event() {
            var _this = this;
            $(".z1,.z2,.z3,.z4,.nav-phone,.z9").mouseenter(function () {
                _this.show();
                _this.mouseenter();
            })
            $(".z5,.z6,.z7,z8").mouseenter(function () {
                _this.hide();
                _this.mouseleave()
            })
            $(".z1,.z2,.z3,.z4,.nav-phone,.z9").mouseleave(function () {
                _this.hide();
                _this.mouseleave()
            })
            //头像
            $(".icon .people,.login_list").mouseenter(function () {
                $(".login_list").show()
            })
            $(".icon .people,.login_list").mouseleave(function () {
                $(".login_list").hide()
            })
            //商品页
            $(".propety a").on('click', function (e) {
                e.preventDefault()
                $(this).addClass("current").siblings().removeClass("current")
            })
            //点击颜色分类更换图片
            $(".white_img").on("click", function () {
                $(".b1").css("background", "url(images/b1.jpg)")
                $(".b2").css("background", "url(images/b2.jpg)")
                $(".b3").css("background", "url(images/b3.png)")
                $(".b4").css("background", "url(images/b4.jpg)")
                $(".swiper-slide").css("background-size", "100%")
            })
            $(".black_img").on("click", function () {
                $(".b1").css("background", "url(images/i1_large.jpg)")
                $(".b2").css("background", "url(images/i2_large.jpg)")
                $(".b3").css("background", "url(images/i3_large.jpg)")
                $(".b4").css("background", "url(images/i4_large.jpg)")
                $(".swiper-slide").css("background-size", "100%")
            })
            $(".blue_img").on("click", function () {
                $(".b1").css("background", "url(images/q1.jpg)")
                $(".b2").css("background", "url(images/q2.jpg)")
                $(".b3").css("background", "url(images/q3.jpg)")
                $(".b4").css("background", "url(images/q4.jpg)")
                $(".swiper-slide").css("background-size", "100%")
            })
            //购物车上小红点
            //数量加减
            var num = $("#shop_count").val();
            $("#add").click(function () {
                num++
                if (num >= 5) {
                    num = 5
                    $('#add').html("")
                    $(".reduce").html("-")
                }
                $(this).siblings("input").val(num)
            })
            $(".reduce").click(function () {
                num--
                if (num <= 1) {
                    num = 1
                    $(".reduce").html("")
                    $('#add').html("+")
                }
                $(this).siblings("input").val(num)
            })
            //获取加入购物车商品
            $(".add_car").click(function (e) {
                e = e || window.event;
                //购物车上小红点
                var num_cout = $('.buy_count input').val()
                console.log($(".color .current"))
                var obj = {};
                obj.name =$(".name .current").html()||"魅族16th";
                obj.color = $(".color .current span").html()||"静夜黑";
                obj.type = $(".type .current").html()||"6+64GB";
                obj.taocan = $(".taocan .current i").html()||"官方标配";
                obj.price = $(".price span").html()||2699
                obj.num = Number(num_cout);
                _this.setData(obj);
            })
            _this.shop_count()
        },
        setData(data) {
            console.log(data);
            var shopList = localStorage.shopList || "[]";
            shopList = JSON.parse(shopList);
            for (var i = 0; i < shopList.length; i++) {
                if (shopList[i].name == data.name&&shopList[i].color == data.color&&shopList[i].type == data.type) {
                    // 商品已存在
                    shopList[i].num += data.num;
                    // shopList[i].price += data.price;
                    break;
                }
            }
            if (i == shopList.length) {
                // 商品不存在把传进来得到data添加到数组中
                shopList.push(data);
            }
            // 把数组转换为json字符串,存入到localStorage中
            localStorage.shopList = JSON.stringify(shopList);
            // 提示
            alert('加入购物车成功');

        },
        shop_count() {
            if (localStorage.length!=0) {
                var shop_count = JSON.parse(localStorage.shopList)[0].num;
                $(".shop_count").html(shop_count);
            }

        },
        show() {
            $(".nav-box").show();
        },
        hide() {
            $('.nav-box').hide();
        },
        mouseenter() {

            $('#header_warrper').css('background', 'rgba(255, 255, 255, 1)');
        },
        mouseleave() {
            // $('.nav_list a ').css('color', '#fff'); // 鼠标移开字体变回白色
            $('#header_warrper').css('background', '');

        }

    }
}())
shop_list.init();


