$("#submit").on("click", randomFour);
var key = "15450300-8689de85a05ab8af4132e7434";

function firstFour() {
    // variables
    let keyword = $("#keyword").val().toLowerCase();
    let orientation = $("#orientation").val();

    console.log(keyword);
    console.log(orientation);

    $("#pics").html("");

    $.ajax({
        method: "GET",
        url: `https://pixabay.com/api/?key=${key}&q=${keyword}&orientation=${orientation}`,
        dataType: "json",
        success: function(data) {
            console.log(data.hits);
            for (let i = 0; i < 4; i++) {
                $("#pics").append("<div class='picBox'><p class='likes'>Likes: " + data.hits[i].likes + "</p><img class='pic' src='" + data.hits[i].webformatURL + "'>");
                console.log(data.hits[i].likes);
            }
        }
    
    });
}

function randomFour() {
    // variables
    let keyword = $("#keyword").val().toLowerCase();
    let orientation = $("#orientation").val();

    console.log(keyword);
    console.log(orientation);

    $("#pics").html("");

    $.ajax({
        method: "GET",
        url: `https://pixabay.com/api/?key=${key}&q=${keyword}&orientation=${orientation}`,
        dataType: "json",
        success: function(data) {
            console.log(data.hits);
            let length = Object.keys(data.hits).length;
            console.log("length: " + length);
            var done = [];
            for (let i = 0; i < 4; i++) {
                let itemNum = Math.floor((Math.random() * length-1) + 1);
                while (true) {
                    let pass = true;
                    itemNum = Math.floor((Math.random() * length-1) + 1);
                    for (let j = 0; j < done.length; j++) {
                        if (itemNum === done[j]) {
                            pass = false;
                        }
                    }
                    if (pass == true) {
                        done[i] = itemNum;
                        break;
                    }
                }
                console.log("itemNum: " + itemNum);
                $("#pics").append("<div class='picBox'><p class='likes'>Likes: " + data.hits[itemNum].likes + "</p><img class='pic' src='" + data.hits[itemNum].webformatURL + "'>");
                console.log("likes: " + data.hits[itemNum].likes);
            }
        }
    
    });
}