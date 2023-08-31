let songindex=0;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');

let songcontent = Array.from(document.getElementsByClassName("songcontent"));

// ... (other code)

let songs = [
   { songName: "Tu Aake Dekh Le", filePath: "songs/1.mp3", coverPath: "cover/cover1.jpg" },
   { songName: "Gone Girl", filePath: "songs/2.mp3", coverPath: "cover/badshah.jpeg" },
   { songName: "Adimirin", filePath: "songs/3.mp3", coverPath: "cover/karan.jpeg" },
   { songName: "Banda Ban Ja", filePath: "songs/4.mp3", coverPath: "cover/banda ban ja.jpeg" },
   { songName: "Tera Hone Laga ", filePath: "songs/5.mp3", coverPath: "cover/tera hone laga hu.jpeg" },
   { songName: "Zara Sa", filePath: "songs/6.mp3", coverPath: "cover/zara.jpeg" },
 ]
 
 // ... (other code)
 
songcontent.forEach((element,i) =>
 {
   
   element.getElementsByTagName("img")[0].src=songs[i].coverPath;
   element.getElementsByClassName("songname")[0].innerText=songs[i].songName;

})

 masterplay.addEventListener('click',()=>
  {
     if(audioElement.paused || audioElement.currentTime<=0)
       {
          audioElement.play();
          masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
           gif.style.opacity=1;        
        }
     else
        {
           audioElement.pause();
           masterplay.classList.remove('fa-pause-circle');
           masterplay.classList.add('fa-play-circle');
           gif.style.opacity=0;
          }
    })
//audioEvent
//listen music event 
audioElement.addEventListener('timeupdate', () => {
   console.log('timeupdate');
   let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
   console.log(progress);
   myprogressbar.value = progress;
 })
 
 myprogressbar.addEventListener('change', () => {
   audioElement.currentTime = (myprogressbar.value * audioElement.duration) / 100; // Corrected this line
 })
 
 const makeAllplay = () => {
   Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
     element.classList.remove('fa-pause-circle');
     element.classList.add('fa-play-circle');
   })
 }
 
 Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
   element.addEventListener('click', (e) => {
     makeAllplay();
        
     songindexindex=parseInt(e.target.id);

     e.target.classList.remove('fa-play-circle');
     e.target.classList.add('fa-pause-circle');
     audioElement.src=`songs/${songindexindex+1}.mp3`;
     mastersongname.innerText=songs[songindex].songName;
     audioElement.currentTime =0;
     audioElement.play();
     masterplay.classList.remove('fa-play-circle');
     masterplay.classList.add('fa-pause-circle');
     
   })
 })

 document.getElementById('next').addEventListener('click', () => {
   if (songindex >= 5) { // Changed from 6 to 5 since array indices are zero-based
     songindex = 0;
   } else {
     songindex += 1;
   }
 
   audioElement.src = songs[songindex].filePath; // Changed from index to songindex
   mastersongname.innerText = songs[songindex].songName; // Make sure you have this element with the ID mastersongname
   audioElement.currentTime = 0;
   audioElement.play();
   masterplay.classList.remove('fa-play-circle');
   masterplay.classList.add('fa-pause-circle');
 });
 
 document.getElementById('previous').addEventListener('click', () => {
   if (songindex <= 0) {
     songindex = 5; // Changed from 0 to 5 to loop back to the last song
   } else {
     songindex -= 1;
   }
 
   audioElement.src = songs[songindex].filePath; // Changed from index to songindex
   mastersongname.innerText = songs[songindex].songName; // Make sure you have this element with the ID mastersongname
   audioElement.currentTime = 0;
   audioElement.play();
   masterplay.classList.remove('fa-play-circle');
   masterplay.classList.add('fa-pause-circle');
 });
 