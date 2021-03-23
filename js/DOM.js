// Button Assignment
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

//Respnose & result assignment
const responseFirst = document.getElementById("responseFirst");
const responseLast = document.getElementById("responseLast");
const resultFirst = document.getElementById("resultFirst");
const resultLast = document.getElementById("resultLast");

// Loopback/Callback idk
function lastResponse(status) {
    if(status === "yes") {
        yesButton.innerText = "iya beneran";
        noButton.innerText = "ga lah, yakali";

        yesButton.onclick = () => {
            responseLast.innerHTML = "iya beneran";
            resultLast.innerHTML = "EEEEHHHHH????? MAKASIH CIPA AKHIRNYA PUNYA PACAR AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA PELUK CIPA";
        }
        
        noButton.onclick = () => {
            responseLast.innerHTML = "ga lah, yakali";
            resultLast.innerHTML = "ah, teryata, mana mungkin juga lu suka sama w";
        }
    }
    else if (status === "no") {
        yesButton.innerText = "maaf ya";
        noButton.innerText = "becanda, aku terima kok"

        yesButton.onclick = () => {
            responseLast.innerHTML = "maaf ya";
            resultLast.innerHTML = "well, udah biasa ditolak sih, jadi, ya, gitu, meski rada sakit juga dengernya";
        }
        
        noButton.onclick = () => {
            responseLast.innerHTML = "becanda, aku terima kok";
            resultLast.innerHTML = "EEEEHHHHH????? MAKASIH CIPA AKHIRNYA PUNYA PACAR AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA PELUK CIPA";
        }
    }
}


// main fumction
yesButton.onclick = () => {
    responseFirst.innerHTML = "Yes, Aku mau";
    resultFirst.innerHTML = "Beneran???";
    lastResponse("yes");
}

noButton.onclick = () => {
    responseFirst.innerHTML = "Maaf gabisa";
    resultFirst.innerHTML = "Ditolak ya....";
    lastResponse("no");
}