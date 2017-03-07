var socket;
var modal_contr = false
$(document).ready(function () {
    // Create a socket
//    socket = new WebSocket('ws://' + window.location.host + '/ws/join?uname=' + $('#uname').text());
    socket = new WebSocket('ws://' + window.location.host + '/ws/nodeadd');
    // Message received on the socket
	$(".modal .box-title").text("实时信息")
    socket.onmessage = function (event) {
		if (modal_contr == false){
			$(".modal").show(1000);
			clearinfo();
			modal_contr = true;
		}
		var data = event.data;
		$(".modal .box-body").html($(".modal .box-body").html() + data + '<br/>')
        console.log(data);

    };
	socket.onclose = function (event) {
		console.log("socket closed");
		$(".modal #ms_title").append(addclose);
		aabbcc = function() {
				location.href = '/' + pro_id + '/' + env_sign + '/nodelist'
			}
	}

    // Send messages.
    var postConecnt = function () {
        var uname = $('#uname').text();
        var content = $('#sendbox').val();
        socket.send(content);
        $('#sendbox').val("");
    }

    $('#sendbtn').click(function () {
        postConecnt();
    });
	
	function clearinfo(){
		$(".modal .box-body").html("");
	}
});