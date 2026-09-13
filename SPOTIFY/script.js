console.log("Welcome On Spotify Clone that's Make By Rakesh Rastogi");
//initialize the variable
let songindex = 0;
let audioElement = new Audio('songss/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songtime = document.getElementById('songtime');
let songs = [
    {songname: "It Is Unknown Song..", filepath: "songss/1.mp3", coverpath: "photos/cover.png"},
    {songname: "Apna bna le piya..", filepath: "songss/Apna Bna Le.mp3", coverpath: "photos/Apna Bna Le.jpg"},     
    {songname: "Mai rahoon ya na rah..", filepath: "songss/Main Rahoon Ya Na Rahoon.mp3", coverpath: "photos/cover.png"},
    {songname: "Moh Moh ke dhaage..", filepath: "songss/Moh Moh Ke Dhaage.mp3", coverpath: "photos/Moh Moh Ke Dhaage.jpg"},
    {songname: "Chaahu ma Ya Na..", filepath: "songss/Chahun Main Ya Naa.mp3", coverpath: "photos/Chahun Main Ya Naa.jpg"}
]

/////........
const formatTime = (time) => {

    if (isNaN(time)) {
        return "00:00";
    }

    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return `${minutes}:${seconds}`;
};
 
 
//handle play/pause click

 masterplay.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {

        // Song play
        audioElement.play();

        // Master icon -> pause
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

        // Sabhi song icons -> play
        makeallplays();

        // Current song icon -> pause
        let currentSong = document.getElementById(songindex);

        if (currentSong) {
            currentSong.classList.remove('fa-circle-play');
            currentSong.classList.add('fa-circle-pause');
        }

        gif.style.opacity = 1;

    } else {

        // Song pause
        audioElement.pause();

        // Master icon -> play
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');

        // Current song icon -> play
        let currentSong = document.getElementById(songindex);

        if (currentSong) {
            currentSong.classList.remove('fa-circle-pause');
            currentSong.classList.add('fa-circle-play');
        }

        gif.style.opacity = 0;
    }

});
// masterplay.addEventListener('click',()=>{
// if(audioElement.paused || audioElement.currentTime<=0){
//     audioElement.play();  
//      masterplay.classList.remove('fa-circle-play');
//     masterplay.classList.add('fa-circle-pause');
//     gif.style.opacity = 1;    
// }

// else{
//      audioElement.pause();
//       masterplay.classList.remove('fa-circle-pause');
//     masterplay.classList.add('fa-circle-play');  
//      gif.style.opacity = 0;
// }
// });

///////////...........

audioElement.addEventListener('timeupdate', () => {

    let progress = parseInt(
        audioElement.currentTime / audioElement.duration * 100
    );

    myprogressbar.value = progress;

    songtime.innerText =
        `${formatTime(audioElement.currentTime)} / ${formatTime(audioElement.duration)}`;
});

///////////......

myprogressbar.addEventListener('change',()=>{
        audioElement.currentTime = (myprogressbar.value * audioElement.duration)/100;
});

//sabhi icons ko reset krne ka functon..
// const makeallplays = ()=>{
//     Array.from(document.getElementsByClassName('playicon')).forEach((element)=>{
//         element.classList.remove('fa-circle-pause');
//         element.classList.add('fa-circle-play');
//     });
// };

//////////////
const makeallplays = () => {

    Array.from(
        document.getElementsByClassName('playicon')
    ).forEach((element) => {

        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    });
};
/////////////

// gaane ko click krne pr play pause logic
// Array.from(document.getElementsByClassName('playicon')).forEach((element) => {
//    element.addEventListener('click',(e)=>{
//     makeallplays();
//     songindex = parseInt(e.target.id);

//     //icon change
//     e.target.classList.remove('fa-circle-play');
//     e.target.classList.add('fa-circle-pause');

//     //sahi song path check krna..
//     audioElement.src = songs[songindex].filepath;

//     //Bottom baar pr gaane ka naam badalna ...
//     document.getElementById('mastersongname').innerText = songs[songindex].songname;
    
//     //Audio play
//     audioElement.currentTime = 0;
//     audioElement.play();
//     gif.style.opacity = 1;

//     //Master play icon ko pause icon me badlna..
//     masterplay.classList.remove('fa-circle-play');
//     masterplay.classList.add('fa-circle-pause');
    
//    });
// });

 Array.from(document.getElementsByClassName('playicon')).forEach((element) => {

    element.addEventListener('click', (e) => {

        let clickedIndex = parseInt(e.target.id);

        // Same song par click
        if (songindex === clickedIndex && !audioElement.paused) {

            // Pause
            audioElement.pause();

            // Current icon -> play
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');

            // Master -> play
            masterplay.classList.remove('fa-circle-pause');
            masterplay.classList.add('fa-circle-play');

            gif.style.opacity = 0;

        } else {

            // Sabhi icons reset
            makeallplays();

            // Naya song index
            songindex = clickedIndex;

            // Song change
            audioElement.src = songs[songindex].filepath;

            // Song name change
            document.getElementById('mastersongname').innerText =
                songs[songindex].songname;

            // Start from beginning
            audioElement.currentTime = 0;

            // Play
            audioElement.play();

            // Current icon -> pause
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');

            // Master -> pause
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');

            // GIF show
            gif.style.opacity = 1;
        }

    });

});
/////////////////////////////


// document.getElementById('next').addEventListener('click',()=>{
//     if(songindex>=9){
//        songindex = 0 
//     }
//     else{
//         songindex += 1;
//     }
//      audioElement.src = songs[songindex].filepath;
//      document.getElementById('mastersongname').innerText = songs[songindex].songname;
//       audioElement.currentTime = 0;
//     audioElement.play();
//     songtime.innerText = "00:00 / 00:00";
//      masterplay.classList.remove('fa-circle-play');
//     masterplay.classList.add('fa-circle-pause');
    
// })
document.getElementById('next').addEventListener('click', () => {

    // Next song
    if (songindex >= songs.length - 1) {
        songindex = 0;
    } else {
        songindex += 1;
    }

    // Sabhi icons ko play karo
    makeallplays();

    // New song load
    audioElement.src = songs[songindex].filepath;

    // Song name
    document.getElementById('mastersongname').innerText =
        songs[songindex].songname;

    // Start from beginning
    audioElement.currentTime = 0;

    // Play
    audioElement.play();

    // Master icon -> pause
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

    // New song ka icon -> pause
    let currentSong = document.getElementById(songindex);

    if (currentSong) {
        currentSong.classList.remove('fa-circle-play');
        currentSong.classList.add('fa-circle-pause');
    }

    // Timer reset
    songtime.innerText = '00:00 / 00:00';

    // GIF show
    gif.style.opacity = 1;

});

// document.getElementById('previous').addEventListener('click',()=>{
//     if(songindex<=0){
//        songindex = 0 
//     }
//     else{
//         songindex -= 1
//     }
//      audioElement.src = songs[songindex].filepath;
//      document.getElementById('mastersongname').innerText = songs[songindex].songname;
//       audioElement.currentTime = 0;
//     audioElement.play();
//      masterplay.classList.remove('fa-circle-play');
//     masterplay.classList.add('fa-circle-pause');
// })
document.getElementById('previous').addEventListener('click', () => {

    // Previous song
    if (songindex <= 0) {
        songindex = songs.length - 1;
    } else {
        songindex -= 1;
    }

    // Sabhi icons reset
    makeallplays();

    // Previous song load
    audioElement.src = songs[songindex].filepath;

    // Song name
    document.getElementById('mastersongname').innerText =
        songs[songindex].songname;

    // Start from beginning
    audioElement.currentTime = 0;

    // Play
    audioElement.play();

    // Master icon -> pause
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

    // Current song icon -> pause
    let currentSong = document.getElementById(songindex);

    if (currentSong) {
        currentSong.classList.remove('fa-circle-play');
        currentSong.classList.add('fa-circle-pause');
    }

    // Timer reset
    songtime.innerText = '00:00 / 00:00';

    // GIF show
    gif.style.opacity = 1;

});
 
 