function copy_url_clipboard_target(event, clicked_id, result_id) {
    event.preventDefault();
    // Get the text field
    var copyText = document.getElementById(clicked_id);

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    document.getElementById( result_id ).innerHTML = "URL copied to clipboard";
    setTimeout(function() {
        document.getElementById( result_id ).innerHTML = "";
    },5000);
}

function copy_url_text_formate_clipboard_target(event, clicked_id) {
    event.preventDefault();

    var copyText = document.getElementById(clicked_id).value;
    navigator.clipboard.writeText(copyText);
    document.getElementById('pvfw-url-copied-message').innerHTML = 'URL copied to clipboard';
    setTimeout(function() {
        document.getElementById("pvfw-url-copied-message").innerHTML = "";
    },5000);
}

//image upload fields 
document.getElementById('pvfw_image_upload_image_button').addEventListener('click', function() {
    var mediaUploader;
    mediaUploader = wp.media({
        frame: 'post',
        state: 'insert',
        multiple: false
    });

    // Function to run when image is selected
    mediaUploader.on('insert', function() {
        var json = mediaUploader.state().get('selection').first().toJSON();
        document.getElementById('pvfw_image_image_url').value = json.url;
    });

    // Open media uploader
    mediaUploader.open();
});

// JavaScript to show/hide additional fields based on selected option
document.getElementById('pvfw_shortcode_option').addEventListener('change', function() {
    const embedFields = document.getElementById('embedFields');
    const linkFields = document.getElementById('linkFields');
    const imageFields = document.getElementById('imageFields');
    if (this.value === 'pvfw_embed') {
        embedFields.style.display = 'block';
    } else {
        embedFields.style.display = 'none';
    }
    if (this.value === 'pvfw_link') {
        linkFields.style.display = 'block';
    } else {
        linkFields.style.display = 'none';
    }
    if (this.value === 'pvfw_image_link') {
        imageFields.style.display = 'block';
    } else {
        imageFields.style.display = 'none';
    }
});





  


