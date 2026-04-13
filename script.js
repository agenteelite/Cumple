const startBtn = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const videoContainer = document.getElementById('video-container');
const introVideo = document.getElementById('intro-video');
const mainSurprise = document.getElementById('main-surprise');
const bgMusic = document.getElementById('bg-music');
const lyricText = document.getElementById('lyric-text');
const lyricContainer = document.getElementById('lyric-container');

// NUEVO: Variables para el libro
const bookWrapper = document.getElementById('book-wrapper');
const bookMusic = document.getElementById('book-music');

const lyricsData = [
    { time: 1, text: "Esta es tu sorpresa..." },
    { time: 5, text: "Espero que te guste mucho." },
    { time: 8, text: "¡Feliz cumpleaños, mi amor!" },
    { time: 12, text: "Te amo con todo mi corazón." },
    { time: 14, text: "" },   
    // Comienzo de la canción (aprox. 10.5s - 11s)
    { time: 15, text: "Eres demasiado buena para ser verdad" },
    { time: 18, text: "No puedo quitar mis ojos de ti" },
    { time: 22, text: "Sería como tocar el cielo" },
    { time: 27, text: "Tanto que te quiero abrazar" },
    { time: 30, text: "Al fin el amor ha llegado" },
    { time: 35, text: "Y le agradezco a Dios estar vivo" },
    { time: 38, text: "Eres demasiado buena para ser verdad" },
    { time: 42, text: "No puedo quitar mis ojos de ti" },
    { time: 47, text: "Perdona mi forma de mirar" },
    { time: 50, text: "No hay nada con qué comparar" },
    { time: 55, text: "Tu mirada me debilita" },
    { time: 58, text: "No quedan palabras por decir" },
    { time: 62, text: "Pero si sientes lo que yo siento" },
    { time: 66.5, text: "Por favor dime que esto es real" },
    { time: 70.5, text: "Eres demasiado buena para ser verdad" },
    { time: 74.5, text: "No puedo quitar mis ojos de ti" },
    { time: 79, text: ""},
    // El Coro (I love you, baby)
    { time: 96, text: "Te amo, nena" },
    { time: 98, text: "Y si no te molesta..." },
    { time: 101, text: "Te necesito, nena" },
    { time: 102, text: "Para calentar una noche fría" },
    { time: 104, text: "Te amo, nena" },
    { time: 107, text: "Confía en mí cuando lo digo" },
    { time: 111, text: "Oh, linda nena" },
    { time: 114, text: "No me decepciones, te lo ruego" },
    { time: 116, text: "Oh, linda nena" },
    { time: 118, text: "Ahora que te encontré, quédate" },
    { time: 120, text: "Y déjame amarte, nena" },
    { time: 123, text: "Déjame amarte..." },
    // 
    { time: 126.5, text: "" },
    //
    { time: 127, text: "Eres demasiado buena para ser verdad" },
    { time: 130, text: "No puedo quitar mis ojos de ti" },
    { time: 135, text: "Debe ser como tocar el cielo" },
    { time: 139, text: "Quiero abrazarte mucho" },
    { time: 143, text: "Por fin el amor ha llegado" }, 
    { time: 148, text: "Y doy gracias a Dios por estar vivo" }, 
    { time: 151, text: "Eres demasiado buena para ser verdad" },
    { time: 155, text: "No puedo quitar mis ojos de ti" },
    //Se repite el coro
    { time: 168, text: "Te amo, nena" },
    { time: 171, text: "Y eso está bien" },
    { time: 173, text: "Te necesito, nena" },
    { time: 175, text: "Para calentar mis noches solitarias" },
    { time: 177, text: "Te amo, nena" },
    { time: 179, text: "Confía en mí cuando lo digo" },
    { time: 184, text: "Oh, linda nena" },
    { time: 187, text: "No me abandones, te lo ruego" },
    { time: 189, text: "Oh, linda nena" },
    { time: 191, text: "Ahora que te encontré, quédate" },
    { time: 193, text: "Oh, linda nena" },
    { time: 195, text: "Confia en mi cuando lo digo" },
    { time: 200, text: "Te necesito nena" },
    { time: 202, text: "¿Cuando vendrás por mi?" },
    { time: 205, text: "Oh, linda nena" },
    { time: 206, text: "Ahora que te he encontrado, quédate" },
    { time: 209, text: "Y déjame amarte, nena" },
    { time: 212, text: "Déjame amarte..." },
    { time: 215, text: "" }
];

// 1. Al hacer clic en el botón
startBtn.addEventListener('click', () => {
    startScreen.classList.add('fade-out'); 
    
    setTimeout(() => {
        startScreen.classList.add('hidden'); 
        videoContainer.classList.remove('hidden'); 
        introVideo.play();
    }, 1000);
});

// 2. Al terminar el video de bienvenida
introVideo.addEventListener('ended', () => {
videoContainer.classList.add('fade-out'); 

    setTimeout(() => {
        videoContainer.classList.add('hidden'); 
        mainSurprise.classList.remove('hidden'); 
        mainSurprise.classList.add('fade-in'); 
        bgMusic.play();  
    }, 1000);

});

// 3. Sincronizador de letras
bgMusic.ontimeupdate = () => {
    const time = bgMusic.currentTime;
    
    const activeLine = lyricsData.reduce((prev, curr) => {
        return (time >= curr.time) ? curr : prev;
    }, null);

    if (activeLine && lyricText.innerText !== activeLine.text) {
        lyricText.classList.remove('fade-in');
        
        setTimeout(() => {
            lyricText.innerText = activeLine.text;
            if (activeLine.text !== "") {
                lyricText.classList.add('fade-in');
            }
        }, 300);
    }
};

// 4. NUEVO: Al terminar la canción principal (Aparece el Libro)
bgMusic.addEventListener('ended', () => {
    // 1. Ocultar las letras suavemente
    lyricContainer.classList.add('fade-out');

    setTimeout(() => {
        lyricContainer.classList.add('hidden');
        
        // 2. Mostrar el libro
        bookWrapper.classList.remove('hidden');
        
        // Pequeño retraso para que la animación de entrada funcione correctamente
        setTimeout(() => {
            bookWrapper.classList.add('fade-in-book');
        }, 50);
        
        // 3. Iniciar la música de fondo del libro
        bookMusic.play(); 
    }, 1000);
});