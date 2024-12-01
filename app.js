let songList = document.getElementById('song-list')
let Progress = document.getElementById('progress')
let playBtn = document.getElementById('play-btn')
let Backword = document.getElementById('backword')
let Forword = document.getElementById('forword')

let songs=[
    {
        name :'song1',
        id : 1
    },
    {
        name :'song2',
        id : 2   
    },
    {
        name :'song3',
        id : 3
    },
    {
        name :'song4',
        id : 4
}]

let audio = new Audio('./assets/song1.mp3')

//showing the song list in ul
for (let song of songs){
    let li = document.createElement('li')
    li.innerText = song.name
    li.setAttribute('id',song.id)
    li.classList.add('song-item')
    songList.append(li)
}

//changing icon of playbtn and playing song

playBtn.addEventListener('click', ()=>{
    audio.paused ? audio.play() : audio.pause()
    if(playBtn.children[0].classList.contains('fa-play')){
        playBtn.children[0].classList.remove('fa-play')
        playBtn.children[0].classList.add('fa-pause')
    }else{
        playBtn.children[0].classList.remove('fa-pause')
        playBtn.children[0].classList.add('fa-play')
    }
})

// showing current progress

audio.addEventListener('timeupdate',()=>{
    let currentTime = audio.currentTime * 100 / audio.duration
    Progress.value = currentTime
})

//updating time according to progressbar
Progress.addEventListener('change',()=>{
    let updateTime = Progress.value *audio.duration /100
    audio.currentTime = updateTime
})

// playing song on the click on it

songList.addEventListener('click',(event)=>{
    let songId = event.target.getAttribute('id')
    audio.src= `./assets/song${songId}.mp3`
    audio.currentTime = 0
    audio.play()
    playBtn.children[0].classList.add('fa-pause')
    playBtn.children[0].classList.remove('fa-play')
})

// Forword.addEventListener('click',(event)=>{
//     let songNO = event.target.getAttribute('id')
//     Number(songNO) 
//     if(songs.length != songNO){
//         songNO++
//     }else{
//         songNO=1
//     }
//     audio.src= `./assets/song${songNO}.mp3`
//     // audio.currentTime = 0
//     audio.play()
// })