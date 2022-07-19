window.addEventListener("load", () => {
  var filepicker = document.getElementById("file");
  filepicker.addEventListener("change", (evt) => {
    const files = filepicker.files;
    if (files && files.length) {
      for (let i = 0; i < files.length; i++) {
        const fileToRead = files[i];
        var reader = new FileReader();
        reader.onload = (e) => {
          let result = e.target.result;
          let name = files[i].name;
          console.log(name);
          console.log(result);
          document.getElementById("result").value = result;
          navigator.clipboard.writeText(result);
        };
        reader.readAsDataURL(fileToRead);
      }
    }
  });
});
