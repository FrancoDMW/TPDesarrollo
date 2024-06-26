window.onload = function () {
    var selectTemp = document.getElementById("selectTemp");
    var selectCap = document.getElementById("selectCap");
    let temp1 = ["Capitulo 1", "Capitulo 2", "Capitulo 3"];
    let temp2 = ["Capitulo 1", "Capitulo 2", "Capitulo 3", "Capitulo 4", "Capitulo 5", "Capitulo 6"];
    let temp3 = ["Capitulo 1", "Capitulo 2", "Capitulo 3", "Capitulo 4"];
    selectTemp.addEventListener("change", () => {
        selectCap.innerHTML = "";
        switch (selectTemp.value) {
            case "1":
                for (let i in temp1) {
                    let option = document.createElement("option");
                    option.value = i;
                    let texto = document.createTextNode(temp1[i]);
                    option.appendChild(texto);
                    selectCap.appendChild(option);
                }
                break;

            case "2":
                for (let i in temp2) {
                    let option = document.createElement("option");
                    option.value = i;
                    let texto = document.createTextNode(temp2[i]);
                    option.appendChild(texto);
                    selectCap.appendChild(option);
                }
                break;

            case "3":
                for (let i in temp3) {
                    let option = document.createElement("option");
                    option.value = i;
                    let texto = document.createTextNode(temp3[i]);
                    option.appendChild(texto);
                    selectCap.appendChild(option);
                }
                break;
            default:

                break;
        }

    });
}