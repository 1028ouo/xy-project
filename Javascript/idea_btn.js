let noidea=document.getElementById("have_no_idea");
function pickdishes(){
        let final="想不到就<br>";
        let dish_array = ["牛肉麵","蝦仁炒蛋","辣炒年糕","韓式炸雞","溏心蛋","大阪燒","玉米濃湯","青醬雞肉義大利麵"];
        let dish = dish_array[Math.floor(0+Math.random()*dish_array.length)];
        final+=`<span class="random_dishes">${dish}</span>`;
        console.log(dish);
        final+=`<button onclick="pickdishes()" class="btn" style="margin-left:5px;">換一道</button>`;
        noidea.innerHTML=final;
}