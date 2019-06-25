var shopcar = (function () {
    return {
        init() {

            this.getJson()
            this.event();


        },
        event() {
            var _this = this;
            //数量加减
            var num = Number($("#shop_count").val());
            $("#add").click(function () {
                var obj1 = JSON.parse(localStorage.shopList)
                num += 1
                obj1[0].num = num
                _this.setData(obj1)
                _this.insertData(obj1)
                if (num >= 5) {
                    num = 5
                    $('#add').html("")
                    $(".reduce").html("-")
                }
                $(this).siblings("input").val(num);


            })
            $(".reduce").click(function () {
                num--
                if (num <= 1) {
                    num = 1
                    // obj1[0].num-=1
                    // console.log(obj1)
                    // _this.setData(obj1)
                    // _this.insertData(obj1)
                    $(".reduce").html("")
                    $('#add').html("+")
                }
                $(this).siblings("input").val(num)
            });
            $("#shop_count").on("input", function (e) {
                // _this.data.num =$(this).val();
                var target = e.target || e.srcElement;
                console.log($(this).val())
                //重新存储
                _this.setData(_this.data);
                // 重新渲染页面
                _this.insertData(_this.data);
            })
           $(".car").on("click","button",function (ev) {
                $(this).css("background","blue");
                var index = $(ev.delegateTarget).index();
                console.log(index);
               var obj = JSON.parse(localStorage.shopList);
               obj.splice(index,1);
               _this.setData(obj);
               $(ev.delegateTarget).remove()
               _this.insertData(obj)
           })
        },
        //获取数据
        getJson() {
            var _this = this
            var shopList = localStorage.shopList || '[]';
            _this.insertData(JSON.parse(shopList))
            $(".indent span").html(localStorage.name)
        },
        //渲染数据
        insertData(data) {
            arr = []
            this.data = data
            var num = $("#shop_count").val();
            var arr = [];
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                arr.push(`<li class="car">
                <div class="car_buy container">
                        <span class="more">加价购</span>
                        <span class="more_buy">另外再加15元起，即可换购超值商品</span>
                        <a href="shop_list.html">立即加购</a>
                    </div>
                    <div class="car_product">
                        <input class="mz-checkbox" type="checkbox">
                        <a href="#"><img src="images/i4_large.jpg"/></a>
                        <div class="shop_jieshao">
                            <p><a href="#">${item.name}</a></p>
                            <p><a href="#">${item.type}</a></p>
                        </div>
                    </div>


                    <div class="danjia">￥${item.price}</div>
                    <!--数量框-->
                    <dl class="buy_count">
                        <dt class="vm-metatit"></dt>
                        <dd class="clearfix">
                            <div class="mod-control">
                                <a href="javascript:" title="减少" class="reduce">-</a>
                                <input type="text" value="1" id="shop_count">
                                <a title="增加" href="javascript:;" id="add">+</a>
                            </div>

                        </dd>
                    </dl>
                    <div class="xiaoji">${item.price * item.num}</div>
                    <button class="delect"><a href="#">删除</a> </button></li>`)
            }
            $(".car_body").html(arr.join(''));
            // $(".hjjr #totalmoney").html(item.price*item.num)
        },
        setData(data) {
            var _this = this;
            localStorage.shopList = JSON.stringify(data);


        }
    }
}())
shopcar.init()