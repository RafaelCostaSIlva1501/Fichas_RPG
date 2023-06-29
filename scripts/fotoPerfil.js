const inputFile = document.getElementById("addFoto");
const preview = document.getElementById("foto");
const saveButton = document.getElementById("foto");

inputFile.addEventListener("change", function() {
    const file = inputFile.files[0];
    
    if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        
        reader.addEventListener("load", function() {
            preview.src = reader.result;
        });
        
        reader.readAsDataURL(file);
    } else {
        alert("Por favor, selecione uma imagem válida");
        inputFile.value = "";
    }});
    
    saveButton.addEventListener("click", function() {});

    const inputFile2 = document.getElementById("addFoto");
    const preview2 = document.getElementById("foto");
    
    inputFile2.addEventListener("change", function() {
      const file = inputFile2.files[0];
    
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
    
        reader.addEventListener("load", function() {
          preview2.src = reader.result;
          // Armazena a foto selecionada no localStorage
          localStorage.setItem("selectedPhoto", reader.result);
        });
    
        reader.readAsDataURL(file);
      } else {
        alert("Por favor, selecione uma imagem válida");
        inputFile2.value = "";
      }
    });
    
    // Verifica se há uma foto armazenada no localStorage e a exibe
    const storedPhoto = localStorage.getItem("selectedPhoto");
    if (storedPhoto) {
      preview2.src = storedPhoto;
    }
    

