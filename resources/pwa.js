// register the Serviceworker

console.log('script is here')
if ('serviceWorker' in navigator) {

    navigator.serviceWorker
        .register('/sw.js')
        .then(() => { console.log('Service Worker Registered'); });
}



// -----------------------------------------------------------------------------------------------------------------------


// Code to handle install prompt on desktop

let installerBanner = document.getElementById('installbanner');
let installBtn = document.getElementById('install-btn');
let closeButton = document.getElementById('close-btn');

closeButton.addEventListener('click', ()=>{
    installerBanner.classList.remove('fade-in');
})




window.addEventListener('beforeinstallprompt', (e) => {
    let promt = e;

    installerBanner.classList.add('fade-in');
    
    installBtn.addEventListener('click',() => {
        promt.prompt(); // Throws if called more than once or default not prevented
      });
    // Wait for the user to respond to the prompt
    e.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
        } else {
            document.getElementById('text-banner').innerHTML= '<p>DAW Nordic Shop zum Startbildschirm hinzufügen</p><ol><li>Auf "Teilen" tippen</li><li>"Zum Home-Bildschirm" wählen</li></ol>'
            console.log('Unter Einstellungen kann die diese PWA auch manuell später installiert werden');
        }
        promt = null
    });
});