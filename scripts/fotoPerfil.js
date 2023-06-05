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