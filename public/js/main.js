var image_count = 0;
var blanks = 0;
var images = [];

function showImage(path) {
    image_count++;
    var child_viewer = '<div><img id="image_viewer_' + image_count + '" src="' + path.target.result + '" class="img_window_size" style="display:block"/>' + '<button type="button" id="img_delete_' + image_count + '" class="btn btn-danger" onclick="deleteImage(id)"> Delete </button></div>';
    $('#viewer_div').append(child_viewer);
    console.log(path.target.result);
    images.push(path.target.result);
    console.log(images.length);
};

$('#uploader_btn').click(function() {
    //var filex = $('#uploader').val().split('\\').pop();
    var uploader_file = $('#uploader')[0].files[0];
    if (uploader_file) {
        var reader = new FileReader();
        reader.onload = showImage;
        reader.readAsDataURL(uploader_file);
    }
});

$('#img_url_btn').click(function() {
    var img_url = $('#img_url').val();
    if (img_url) {
        image_count++;
        var child_viewer = '<div><img id="image_viewer_' + image_count + '" src="' + img_url + '" class="img_window_size" style="display:block"/>' + '<button type="button" id="img_delete_' + image_count + '" class="btn btn-danger" onclick="deleteImage(id)"> Delete </button></div>';
        $('#viewer_div').append(child_viewer);
        images.push($('#img_url').val());
        console.log(images.length);
        $('#img_url').val('');
    }

});

function deleteImage(id) {
    var i = id.split('_')[2];
    console.log(id);
    $('#' + id).parent().remove();
    //images.splice(i-1,1);
    images[i - 1] = '';
    console.log(images.length);
    //image_count--;
    blanks++;
}

function saveData() {
    var collection_name = $('#img_group_name').val();

    images = images.filter(function(val) {
        return val !== '';
    });

    if (collection_name && images.length > 0) {
        $.ajax({
            type: 'POST',
            url: "/",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
                "album_id": collection_name,
                "sources": images
            }),
            error: function(error) {
                console.log(error);
            },
            success: function(data) {
                console.log('Success!')
            }

        });
    }
}

var resp_=['http://www.w3schools.com/angular/pic_angular.jpg','https://www.netgains.org/wp-content/uploads/2014/01/node_js.png'];

$(document).ready(function() {
    var link = window.location.href;
    console.log(link);
    if (link.split('/')[link.split('/').length - 1] !== '') {
        console.log('OK good');
        //make an AJAX call to retrieve data from album_id
        buildFromResponse(resp_);
    } else
        console.log('hey');
});



function buildFromResponse(resp) {
    image_count = resp.length;
    console.log(resp.length);
    images = resp;

    for (var i = 1; i <= image_count; i++) {
        var child_viewer = '<div><img id="image_viewer_' + i + '" src="' + images[i-1] + '" class="img_window_size" style="display:block"/>' + '<button type="button" id="img_delete_' + i + '" class="btn btn-danger" onclick="deleteImage(id)"> Delete </button></div>';
        $('#viewer_div').append(child_viewer);
    }
}
