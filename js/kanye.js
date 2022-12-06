
const loadQuote = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = quoto => {
    const blockQuote = document.getElementById('quoto');
    blockQuote.innerText = quoto.quote;
}