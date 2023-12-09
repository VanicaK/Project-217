const socket = io("/");

const user=prompt("enter name!")

$(function () {
    $("#send").click(function () {
        if ($("#chat_message").val().length !== 0) {
            console.log(user);
            socket.emit(user,"message", $("#chat_message").val());
            $("#chat_message").val("");
        }
    })
    $("#chat_message").keydown(function (e) {
        if (e.key == "Enter" && $("#chat_message").val().length !== 0) {
            socket.emit(user,"message", $("#chat_message").val());
            $("#chat_message").val("");
        }
    })
})

socket.on("createMessage", (message) => {
    $(".messages").append(`
        <div class="message">
            <span>${user}</span><span>${message}</span>
        </div>
    `)
});