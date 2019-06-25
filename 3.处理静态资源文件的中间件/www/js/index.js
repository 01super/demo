var index = (function () {
    //渲染导航栏二级菜单
    return {
        init() {
            for (var i = 0; i < 8; i++) {
                $(".nav-phone").prepend("<li><a href='shop_list.html'><img src='img/l1.png'/><p>魅族16th</p><span>￥2699</span> </a> </li>")
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

        },
        event() {
            var _this = this;
            $(".z1,.z2,.z3,.z4,.nav-phone,.z9").mouseenter(function () {
                _this.nav_show();
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
            $(".icon .people,.login_list").mouseenter(function () {
                $(".login_list").show()
            })
            $(".icon .people,.login_list").mouseleave(function () {
                $(".login_list").hide()
            })


//购物车上小红点
            var shop_count = JSON.parse(localStorage.shopList)[0].num;
            $(".shop_count").html(shop_count);

        },

        nav_show() {
            $(".nav-box").show();
        },
        hide() {
            $('.nav-box').hide();
        },
        mouseenter() {
            $('.nav_list a').css('color', '#000'); // 鼠标经过字体变黑
            $('#header_warrper').css('background', 'rgba(255, 255, 255, 1)');
            $('.icon a .iconfont').css("color", "#666")
        },
        mouseleave() {
            $('.nav_list a ').css('color', '#fff'); // 鼠标移开字体变回白色
            $('#header_warrper').css('background', 'rgba(255, 255, 255, 0)');
            $('.icon a .iconfont').css("color", "white")
        }

    }
}())
index.init();


