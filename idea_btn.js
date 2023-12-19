let noidea=document.getElementById("have_no_idea");
function pickdishes(){
        let final="想不到就<br>";
        final+=`牛肉麵`;  //這邊之後加之後我們有的食譜，先來碗牛肉麵嘻嘻
        final+=`<button onclick="pickdishes()" style="margin-left:5px;">換一道</button>`;
        noidea.innerHTML=final;
}