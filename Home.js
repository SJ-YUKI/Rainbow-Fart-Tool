var x;

function input() {

    document.getElementById("Nam").style.color = "#fdcff2";

    document.getElementById("Nam").value = "";

}

function boy() {

    x = 0

    document.getElementById("droptitle").innerHTML = "男生";

}

function girl() {

    x = 1

    document.getElementById("droptitle").innerHTML = "女生"

}

function finish(){

    var y = document.getElementById("Nam").value;

    if(x == 1){

        document.getElementById("re").innerHTML = "因为" + y + "你是我的仙女，所以我想给你从清晨点赞到日暮，从北极跨越到南极。你的可爱，你的音容笑貌，让我中毒一般上瘾。我喜欢你。"

    }

    else{

        document.getElementById("re").innerHTML = "今天的" + y +"也是宇宙独一无二的帅气，与众不同的帅气，表里如一的帅气，迷倒万千少女的帅气，说了再见也还是挥之不去的帅气，世界第一未解之谜，万千科学家用尽一生，所有的科学道理也解释不出的帅气。 "
    
    }
}
