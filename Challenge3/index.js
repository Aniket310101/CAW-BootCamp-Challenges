const pianoKeys = document.querySelectorAll('a');

const urlGenerator = (index) => {
    return `./audio/key-${index + 1}.mp3`;
};

const playSoundAudio = (url) => {
    return () => {
        new Audio(url).play();
    };
};

pianoKeys.forEach((item, index) => {
    const url = urlGenerator(index);
    item.onclick = playSoundAudio(url);
});
