const pianoKeys = document.querySelectorAll("a");

function urlGenerator(index){
    return `./audio/key-${index+1}.mp3`;
}


pianoKeys.forEach((item, index)=>{
    let url = urlGenerator(index);
    console.log(url);
    item.onclick = playSoundAudio(url)
})


function playSoundAudio(url){
    return function(){
        new Audio(url).play();
    }
}
