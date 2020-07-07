// 當畫面元素(靜態元素)載入完成後才執行程式
// function(){ 要執行的動作 } => 函式
$(document).ready(function () {
    new Window().init();
    $(".navbar .nav-link").click(function () {
        //2.取的移動目標
        const target = $(this).attr("href");
        console.log(target);
        //3.取的移動目標的座標
        const position = $(target).offset().top;
        console.log(position);
        const nabarHeight = 56;
        $("html,body").stop().animate({
            scrollTop: position - navbarHeight
        }, 500);
    });
});
// 當畫面元素(靜態元素)載入完成後才執行程式
// function(){ 要執行的動作 } => 函式
// 畫面元素載入完成後要執行的程式
$(document).ready(function () {
    // 啟用WOW.js
    new WOW().init();
    // 1.設定.nav-link的點擊事件
    $('.navbar .nav-link, #g0BackBtn').click(function () {
        // 2. 取得移動目標 
        const target = $(this).attr('href');
        console.log(target);
        // 3. 取得移動目標的座標
        const position = $(target).offset().top;
        console.log(position);
        // 4. 使用動畫移動到目標的座標
        //.animate({},動畫的秒數) 千分之一秒 1500>>1.5秒
        const navbarHeight = 56;
        $('html, body').stop().animate({
            scrollTop: position - navbarHeight
        }, 500);
    });
});
// 畫面元素載入完成後要執行的程式
// 啟用WOW.js

// 1.設定.nav-link的點擊事件

// 2. 取得移動目標

// 3. 取得移動目標的座標

// 4. 使用動畫移動到目標的座標