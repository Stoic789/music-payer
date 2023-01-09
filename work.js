//const playPauseButton = document.getElementById("play-pause");
const previousButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const shufflebtn = document.getElementById("shuffle");
const volumeBar = document.getElementById("volume-bar");
const progressBar = document.getElementById("progress-bar");
const title = document.getElementById("title");
const artist = document.getElementById("Artist");
const poster = document.getElementById("poster");
const wave = document.getElementById("wave");
const cont= document.getElementById("container");
const player= document.getElementById("player");


let play = document.getElementById("play");
let pause = document.getElementById("pause");



let isPlaying = false;
let index = 0;
let shuffle = false;

const songs = [
  {
    song: "Resource/lofi.mp3",
    name:"Lofi",
    artist: "Unknown",
    image: "Resource/image1.png"
  },
  {
    song: "Resource/Trap.mp3",
    name:"Trap",
    image:"Resource/ghost-face.png",
    artist: "Unknown",
  },
  {
    song: "Resource/RAPSTAR.mp3",
    name:"RAPSTAR",
    artist:"POLO G",
    image:"Resource/Rapstar.png",
  },
  {
    song: "Resource/this.feelings.mp3",
    name:"This Feelings",
    artist:"The Chainsmokers",
    image:"Resource/this.feelings.jfif",
  },
  {
    song: "Resource/this.feelings.mp3",
    name:"This Feelings",
    artist:"The Chainsmokers",
    image:"Resource/this.feelings.jfif",
  },
];

loadTrack(index);



const track = new Audio();
track.src = songs[index].song;

function loadTrack()
{  

    
    poster.style.backgroundImage = "url(" + songs[index].image + ")";
    player.style.backgroundImage = "url(" + songs[index].image + ")";
    cont.style.backgroundImage ="url(" + songs[index].image + ")";
    title.textContent = songs[index].name;
    artist.textContent = songs[index].artist;
    random_bg_color();
}


function pauseplay()
{  
      
    loadTrack();

    if (isPlaying) {
        play.style.display = "none";
        pause.style.display = "block";
        
    
       
    
        track.play();
        isPlaying = false;
      } else {
        pause.style.display = "none";
        play.style.display = "block";
    
       
    
        track.pause();
       
        isPlaying = true;
        
      }
     
}

play.addEventListener("click", pauseplay);
pause.addEventListener("click",pauseplay);




shufflebtn.addEventListener("click",() =>
{
       shuffle=!shuffle;
}
);


 

 function nextTrack() { 
    

   if(index < songs.length - 1 && shuffle === false){
    index += 1;
   }else if(index < songs.length - 1 && shuffle === true){
    let random_index = Math.floor(Math.random() * songs.length);
    index = random_index;
    }else{
    index = 0;
    } 



   
  
    track.src = songs[index].song;
    
    poster.src = songs[index].image;
  
    artist.textContent = songs[index].artist;
    title.textContent = songs[index].title;
  
    isPlaying = true;
    pauseplay();
  }

  nextButton.addEventListener("click",nextTrack);
  progressBar.addEventListener('transitionend', (event) => {
    if (event.propertyName === 'width') {
      progressBar.style.width = '0%';
      playNextSong();
    }
  });
  
  
  

  function previous()
  {
    index--;
    if (index < 0) {
        index = songs.length - 1;
      }
    
      track.src = songs[index].song;
    
    poster.src = songs[index].image;
  
    artist.textContent = songs[index].artist;
    title.textContent = songs[index].title;
  
    isPlaying = true;
    pauseplay();
  }

  previousButton.addEventListener("click",previous);

  function toggleButton(shuffle){
    if(shuffle.value ==='true'){
      shuffle.value = 'false';
      

    }else{
      button.value = 'true';
      shufflebtn.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    }
  }
  shufflebtn.addEventListener('click',()=>{
    if (shuffle = false)    {
      document.idName.remove("shuffle");
    }
    else{
      document.idName.add("shuffle")
    }
    
    shuffle = !shuffle
  });







  volumeBar.addEventListener("input", () => {
    track.volume = volumeBar.value /100;
  });

  track.addEventListener("timeupdate", () => {
    progressBar.value = (track.currentTime / track.duration) * 100;
  });

   function random_bg_color(){
    let hex = [ '0', '1', '2', '3', '4','5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    
    wave.style.background=gradient;
}


for (let e of document.querySelectorAll('input[type="range"].volumeslider')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}



 