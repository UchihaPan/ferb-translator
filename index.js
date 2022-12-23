var input = document.querySelector("#input-ctn")  
var translatebtn = document.querySelector("#translatebtn")  
var output = document.querySelector("#output-ctn")  


var serverURL ="https://api.funtranslations.com/translate/ferb-latin.json"



function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    var inputText = input.value  

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            console.log(json)
            var translatedText = json.contents.translated  
            output.innerText = translatedText   
           })
        .catch(errorHandler)
}  

translatebtn.addEventListener("click", clickHandler)