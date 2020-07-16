$(document).ready(function(){
    $("#pryChange").click(function(){
    $("#pryCh").removeClass("bg-primary").addClass("bg-success");
    });
});

$(document).ready(function(){
    $("#dangChange").click(function(){
    $("#dangCh").removeClass("bg-danger").addClass("bg-light");
    });
});

$(document).ready(function(){
    $("#warnChange").click(function(){
    $("#warnCh").removeClass("bg-warning").addClass("bg-secondary");
    });
});

$(document).ready(function(){
    $("#ligChange").click(function(){
    $("#pryCh").removeClass("bg-primary").addClass("bg-danger"),
    $("#dangCh").removeClass("bg-danger").addClass("bg-dark"),
    $("#warnCh").removeClass("bg-warning").addClass("bg-primary");
    });
});