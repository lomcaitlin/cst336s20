var pencilTotal = $("#pencil").val() * 6;
var eraserTotal = $("#eraser").val() * 4;


$("#pencil").keyup(function() {
    pencilTotal = $("#pencil").val() * 6;
    if (isNaN(pencilTotal)) {
        $("#pencilError").html("Not a number!");
        $("#pencilError").css("color", "red");
        $("#pencilError").css("font-weight", "bold");
        $("#pencilTotal").html("error");
        $("#pencilTotal").css("color", "red");
    }
    else {
        $("#pencilError").html("");
        $("#pencilTotal").html(`$${pencilTotal}`);
        $("#pencilTotal").css("color", "black");
    }
});

$("#eraser").keyup(function() {
    eraserTotal = $("#eraser").val() * 4;
    if (isNaN(eraserTotal)) {
        $("#eraserError").html("Not a number!");
        $("#eraserError").css("color", "red");
        $("#eraserError").css("font-weight", "bold");
        $("#eraserTotal").html("error");
        $("#eraserTotal").css("color", "red");
    }
    else {
        $("#eraserTotal").html(`$${eraserTotal}`);
        $("#eraserTotal").css('color', "black");
        $("#eraserError").html("");
    }
});

