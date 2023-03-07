let arrEmoji = [];
let arrEmojiTemp = [];

//removerItems();
verificarDadosExistentes();
pesquisa();

function montarArray(item, indice) {
    arrEmojiTemp[indice] = item;
}

function armazenarDados(data) {
    localStorage.setItem('arrEmoji', JSON.stringify(data));
}

function buscarEmojis() {
    fetch('https://emoji-api.com/emojis?access_key=990812c361e8365cc4c033befd8cda999a58748d')
    .then(res => res.json())
    .then(data => {
        data.forEach(
            montarArray
        );

        armazenarDados(arrEmojiTemp);
        
    });
}

function verificarDadosExistentes() {
    arrEmoji = JSON.parse(localStorage.getItem('arrEmoji'));
   
    if(arrEmoji.length == 0){
        console.log('funçao verificar dados existentes');
        buscarEmojis();
        console.log(arrEmoji.length);
    }
}

function removerItems() {
    localStorage.removeItem('arrEmoji');
}

function pesquisa(){
    arrEmoji.forEach(element => {
        if(element.group == 'travel-places'){
            console.log('asd');
        }
    });
}
