
 function createSeats(type) {
     switch (type) {
         case 1:
             create2d();
             break;
         case 2:
             create3d();
             break;
         case 3:
             createIMAX3d();
     default:
     }
     
 }
 
function create2d() {
    var id = 0;
    for (var k = 0; k < 10; k++) {
        for (var i = 0; i < 22; i++) {
            jQuery('<div/>', {
                class: 'seat',
                id: id,
                text: i + 1,
                onclick: 'javascript:mark(' + id + ');',
            }).appendTo('#2dBody');
            $("#" + id).css({
                top: 10 + 25 * k + "px",
                left: i * 25 + "px"
            });
            id++;
        }
    }
}

function create3d() {
    var id = 1000;
    for (var k = 0; k < 8; k++) {
        for (var i = 0; i < 8; i++) {
            jQuery('<div/>', {
                class: 'seat',
                id: id,
                text: i + 1,
                onclick: 'javascript:mark(' + id + ');',
            }).appendTo('#3dBody');
            $("#" + id).css({
                top: 10 + 25 * k + "px",
                left: i * 25 + "px",
            });
            id++;
        }
    }
}

function createIMAX3d() {
    var id = 2000;
    for (var k = 0; k < 10; k++) {
        for (var i = 0; i < 10; i++) {
            jQuery('<div/>', {
                class: 'seat',
                id: id,
                text: i + 1,
                onclick: 'javascript:mark(' + id + ');',
            }).appendTo('#IMAX3dbody');
            $("#" + id).css({
                top: 10 + 25 * k + "px",
                left: i * 25 + "px",
            });
            id++;
        }
    }
}
 
 function mark(val) {
     $("#" + val).css("background-color", "red");
 }
