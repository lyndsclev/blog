const blogTitleField = document.querySelector('.title'); 
const articleField = document.querySelector('.article'); 

// banner 
const bannerImage = document.querySelector('#banner-upload'); 
const banner = document.querySelector('.banner'); 
let bannerPath; 

const publishBtn = document.querySelector('.publish-btn'); 
const uploadInput = document.querySelector('#image-upload'); 

// change event to upload inputs and process upload 
bannerImage.addEventListener('change', () => {
    uploadImage(bannerImage, "banner"); 
}); 

uploadInput.addEventListener('change', () => {
    uploadImage(uploadInput, "image"); 
}); 

// uploadImage function 
const uploadImage = (uploadFile, uploadType) => {
    const [file] = uploadFile.files; 
    if(file && file.type.includes("image")) {
        const formdata = new FormData(); 
        formdata.append('image', file); 

        fetch('/upload', {
            method: 'post', 
            body: formdata
        })
        .then(res => res.json())
        .then(data => {
            if(uploadType == "image") {
                addImage(data, file.name); 
            } else {
                bannerPath = `${location.origin}/${data}`; 
                banner.style.backgroundImage = `url("${bannerPath})`; 
            }
        })
    } else {
        alert("Upload image only"); 
    }
}; 

// addImage function 
const addImage = (imagepath, alt) => {
    let curPos = articleField.selectionStart; 
    let textToInsert = `\r![${alt}](${imagepath})\r`; 
    articleField.value = articleField.value.slice(0, curPos) + textToInsert + articleField.value.slice(curPos);
};