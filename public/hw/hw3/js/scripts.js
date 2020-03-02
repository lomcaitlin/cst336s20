let button = document.getElementById("submit");
button.addEventListener("click", weatherReport);

function weatherReport() {
    let result = document.getElementById("result");
    style = result.style;
    style.backgroundColor = "white";
    result.innerHTML = "";
    let name = $("#name").val();
    name = name.toLowerCase();
    $("input").val('');    
    $.ajax({
        method: "GET",
        url: `https://www.behindthename.com/api/lookup.json?name=${name}&key=ke516804607`,
        dataType: "json",
        success: function(data) {
            console.log(data);
            if (data.error) {
                console.log(data.error);
                name = data.error;
            }
            else {
                name = data[0].name;
                var gender = data[0].gender;
            }
            $("#result").append('<span id="searched"><strong>Name searched: </strong>' + name + '</span>');
            console.log(gender);
            if (gender == "m") {
                $("#result").css("background-color","#8CD1DC");
                $("#result").append(`<p id="gender">Gender: Male</p>`);
                $("#gender").css("text-decoration-line","underline");
                $("#gender").css("text-decoration-style", "double");
                $("#gender").css("text-decoration-color", "#ddd");
            }
            if (gender == "f") {
                $("#result").css("background-color", "#DC8CA8");
                $("#result").append('<p id="gender">Gender: Female</p>');
                $("#gender").css("text-decoration-line","underline");
                $("#gender").css("text-decoration-style", "double");
                $("#gender").css("text-decoration-color", "#ddd");

            }
            if (gender == "mf") {
                $("#result").css("background-color", "#C18CDC");
                $("#result").append('<p id="gender">Gender: Can be both!</p>');
                $("#gender").css("text-decoration-line","underline");
                $("#gender").css("text-decoration-style", "double");
                $("#gender").css("text-decoration-color", "#ddd");
            }
        }
    });
}