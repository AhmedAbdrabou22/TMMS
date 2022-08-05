let fi = document.getElementById('upload');
let totalSize = document.getElementById('divTotalSize');
let size = document.getElementById('size');
fi.onchange = (evt) => {
    const [file] = fi.files;
    console.log(fi.files[0].name);
    console.log(fi.files[0].size);
    totalSize.innerHTML = fi.files[0].name;
    size.innerHTML = fi.files[0].size;
};