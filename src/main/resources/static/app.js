var stompClient = null;

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#messages").html("");
}

function connect() {
    var room = $("#room").val();
    var socket = new SockJS('/chat/'+room);
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/notifications/'+room, function (message) {
            showNotification(JSON.parse(message.body));
        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendMessage() {
    var room = $("#room").val();
    stompClient.send("/app/chatRoom/"+room, {},
        JSON.stringify({
            'name': $("#name").val(),
            'content': $("#content").val(),
            'room': $("#room").val()
        }));
}

function showNotification(message) {
    $("#messages").append(
        "<tr>" +
            "<td>" + message.name + "</td>" +
            "<td>" + message.content + "</td>" +
            "<td>" + message.room + "</td>" +
        "</tr>"
    );
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    setConnected(false);
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendMessage(); });
});