const userText = document.getElementById('inputText');
const speechBtn = document.getElementById('speech')

speechBtn.addEventListener('click', function (){
    speechText = userText.value;

    let speechDAte = new SpeechSynthesisUtterance();

    speechDAte.text = speechText;

    speechSynthesis.speak(speechDAte);
})