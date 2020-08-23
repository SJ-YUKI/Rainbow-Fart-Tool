debugger;

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

function finish() {

    var y = document.getElementById("Nam").value;

    var g = ['是我的仙女，我想给你从清晨点赞到日暮，从北极跨越到南极。你的可爱，你的音容笑貌，让我中毒一般上瘾。','今日份的美貌也正常营业啦！','这样的美貌是真实存在的吗？！','是相机也无法承载的美貌啊！','小仙女是直男收割机！','仙子下凡辛苦了！',',有人说你不好看，我二话不说给他买了只导盲犬！','又在持靓行凶了!'];

    var b = ['今天也是宇宙独一无二的帅气，与众不同的帅气，表里如一的帅气，迷倒万千少女的帅气，说了再见也还是挥之不去的帅气，世界第一未解之谜，万千科学家用尽一生，所有的科学道理也解释不出的帅气。 ','今日份的帅气也正常营业啦！','这样的帅气是真实存在的吗？！','是相机也无法承载的帅气啊！','真是英俊潇洒、风流倜傥、玉树临风、神勇威武、天下无敌、宇内第一无与伦比、谦虚好学、...简直是前不见古人后不见来者!','有人说你不好看，我二话不说给他买了只导盲犬！'];
    
    if (x == 1) {

        var i = Math.floor(Math.random() * g.length + 1)-1;

        document.getElementById("re").innerHTML = y + g[i];

    }

    else {

        var i = Math.floor(Math.random() * b.length + 1)-1;

        document.getElementById("re").innerHTML = y + b[i];

    }
}

function c1() {

    document.getElementById("body").style.backgroundColor = "#7c7c7c";

    document.getElementById("droptitle").style.color = "#7c7c7c";

    document.getElementById("Nam").style.color = "#F1D5E7";

    document.getElementById("model2").style.display = "inline-block";

    document.getElementById("model1").style.display = "none";

    document.getElementById("model2").style.marginTop = "21px";

}

function c2() {

    document.getElementById("body").style.backgroundColor = "#ffffff";

    document.getElementById("droptitle").style.color = "#ffffff";

    document.getElementById("Nam").style.color = "#929191";

    document.getElementById("model1").style.display = "inline-block";

    document.getElementById("model2").style.display = "none";

    document.getElementById("model1").style.marginTop = "21px";

}
