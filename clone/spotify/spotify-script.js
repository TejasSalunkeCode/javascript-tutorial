console.log("Welcome to spotify");

let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterplay=document.getElementById('masterPlay');
let myprogressBar=document.getElementById('myProgressBar');

let songs=[
    {songName: "salam-e-Ishq", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songName: "salam-e-Ishq", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songName: "salam-e-Ishq", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songName: "salam-e-Ishq", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songName: "salam-e-Ishq", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songName: "salam-e-Ishq", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
]

// audioElement.play();

//Handle Play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})


//Listen to Events
myprogressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
})




