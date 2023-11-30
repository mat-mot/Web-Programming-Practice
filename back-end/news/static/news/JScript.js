let count = 0;
let hovered = false;
function middle_news_slide_timer(){
    if (!hovered)
    {
        const parent = document.getElementById("middle_news").children;
        if (count % 3 === 2) {
            parent[0].style.display = "block";
            parent[1].style.display = "none";
            parent[2].style.display = "none";
        } else if (count % 3 === 0) {
            parent[0].style.display = "none";
            parent[1].style.display = "block";
            parent[2].style.display = "none";
        } else if (count % 3 === 1) {
            parent[0].style.display = "none";
            parent[1].style.display = "none";
            parent[2].style.display = "block";
        }
        count++;
    }
}
function middle_news_slide_mouseover () {
    hovered = true;
}
function middle_news_slide_mouseleave () {
    hovered = false;
}
function right_news_heather(item_number) {
    const parent = document.getElementById("right_news").children;
    const children = parent[0].children
    if(item_number.id === "h1")
    {
        children[0].style.opacity="1"
        children[1].style.opacity="0.4"
        children[2].style.opacity="0.4"
        parent[1].style.display="block";
        parent[2].style.display="none";
        parent[3].style.display="none";
    }
    else if (item_number.id === "h2")
    {
        children[0].style.opacity="0.4"
        children[1].style.opacity="1"
        children[2].style.opacity="0.4"
        parent[1].style.display="none";
        parent[2].style.display="block";
        parent[3].style.display="none";
    }
    else if (item_number.id === "h3")
    {
        children[0].style.opacity="0.4"
        children[1].style.opacity="0.4"
        children[2].style.opacity="1"
        parent[1].style.display="none";
        parent[2].style.display="none";
        parent[3].style.display="block";
    }
}
function login_clicked (){
    if (!document.getElementById("login"))
    {
        document.body.innerHTML += "<div id='login'></div>"
        let div = document.getElementById("login");
        div.style.position = "absolute";
        let wid = (window.screen.width-400)/2;
        let hei = (window.screen.height-430)/2;
        div.style.top = hei.toString() + 'px';
        div.style.right = wid.toString() + 'px';
        div.style.width = "400px";
        div.style.height = "350px";
        div.style.background = "white";
        div.style.border = "25px solid #964b2d";
        let inner = "<div style='margin: 20px; display: inline-flex; float: right'>" +
            "<h3 style='width: 270px'>ورود به سایت</h3><a onclick='login_main_page_clicked()' href='#' " +
            "style='color: #964b2d'><h3>صفحه اصلی</h3></a>" +
            "</div><div id='login_input' style='margin-top: 100px; text-align: center'><input type='text' " +
            "placeholder='ایمیل یا شماره تلفن' style='width: 300px; padding: 10px 20px; margin: 10px 20px'>" +
            "<input type='text' style='width: 300px; padding: 10px 20px; margin: 10px 20px' placeholder='کلمه عبور'>" +
            "<button type='submit' style='background-color: #964b2d; color: white; border: none;" +
            " border-radius: 5px; width: 60px; height: 40px; float: left; margin: 10px 30px;" +
            " padding: 10px 20px'>ورود</button></div>";
        div.innerHTML += inner;
    }
}
function login_main_page_clicked () {
    document.getElementById("login").remove();
}
function oopen(id){
    const item = document.getElementById(id);
    const heather = item.children[0];
    const details = item.children[1];
    heather.style.opacity = '0.7';
    heather.children[1].classList.add('d-none');
    heather.children[2].classList.remove('d-none');
    details.classList.remove('openanimation');
    void details.offsetWidth;
    details.classList.add('openanimation');
    details.style.maxHeight = '150px';
}
function cloose(id){
    const item = document.getElementById(id);
    const heather = item.children[0];
    const details = item.children[1];
    heather.style.opacity = '1';
    heather.children[1].classList.remove('d-none');
    heather.children[2].classList.add('d-none');
    details.classList.remove('closeanimation');
    void details.offsetWidth;
    details.classList.add('closeanimation');
    details.style.maxHeight = '1px';
}