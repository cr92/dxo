var image_count=0;

function showImage(path) {
	image_count++;
    //$('#image_viewer').attr('src', path.target.result);
    //var child_viewer='<div><img id="image_viewer_'+image_count+'" src="'+path.target.result+'" style="display:block"/></div>';
    var child_viewer='<div><img id="image_viewer_'+image_count+'" src="'+path.target.result+'" class="img_window_size" style="display:block"/>'+'<button type="button" id="img_delete_'+image_count+'" class="btn btn-danger" onclick="deleteImage(id)"> Delete </button></div>';
    $('#viewer_div').append(child_viewer);
};

$('#uploader_btn').click(function () {
	//var filex = $('#uploader').val().split('\\').pop();
	image_count++;
    var uploader_file = $('#uploader')[0].files[0];
    if (uploader_file)
    {
    	var reader = new FileReader();
    	reader.onload = showImage;
    	reader.readAsDataURL(uploader_file);
    }
});

$('#img_url_btn').click(function () {
	image_count++;
    var img_url = $('#img_url').val();
    // $('#image_viewer').attr('src', img_url);
    // $('#image_viewer').css('display', 'block');
    if(img_url){
    var child_viewer='<div><img id="image_viewer_'+image_count+'" src="'+img_url+'" class="img_window_size" style="display:block"/>'+'<button type="button" id="img_delete_'+image_count+'" class="btn btn-danger" onclick="deleteImage(id)"> Delete </button></div>';
    $('#viewer_div').append(child_viewer);
    $('#img_url').val('');
}

});

function deleteImage(id)
{
	console.log(id);
	$('#'+id).parent().remove();
}

// function saveAllImages()
// {
//     alert('all saved');
// }


    $("#save_all_btn").click(function()
    {
            $.post('/xcd')
    }); 

