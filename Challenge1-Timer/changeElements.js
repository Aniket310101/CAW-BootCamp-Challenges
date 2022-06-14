
function chageRingColorToRed(){
    document.querySelector('.ring').classList.add('ending');
}
    
function chageRingColorToGreen(){
    document.querySelector('.ring').classList.remove('ending');
}

export {chageRingColorToRed, chageRingColorToGreen};