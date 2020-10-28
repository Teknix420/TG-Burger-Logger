$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var changeDevour = $(this).data("changedevour");

        var changeDevourState = {
            devour: changeDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: changeDevourState
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerId").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });
});