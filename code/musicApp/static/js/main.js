const playBtn = document.querySelector('.play-inner');
const nextBtn = document.querySelector('.play-forward');
const prevBtn = document.querySelector('.play-backward');
const song = document.getElementById('song');
const timerLeft = document.querySelector('.timer__left');
const timerRight = document.querySelector('.timer__right');
const playRepeat = document.querySelector('.play-repeat');
const rangeBar = document.getElementById('range');
const playList = document.querySelector('.playlist-list');
const shuffle = document.querySelector('.shuffle-song');
const volumeControllerLeft = document.querySelector('.fa-volume-mute');
const volumeControllerRight = document.querySelector('.fa-volume-up');
const valueVolume = document.querySelector('.volume');
displayTimer();
rangeBar.value = 0;
setInterval(displayTimer , 200); 
function formatTimer(number) {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number - minutes * 60);
    if (seconds < 10) return `${minutes}:0${seconds}`;
    else return `${minutes}:${seconds}`;
}
//==============================================
//              SET THỜI GIAN PHAT NHẠC
//==============================================
function displayTimer() {
    // alert(song.duration); thời gian bản nhạc
    // alert(song.currentTime); thời gian chạy dc
    const { duration, currentTime } = song;
    timerRight.textContent = formatTimer(duration);
    timerLeft.textContent = formatTimer(currentTime);
    rangeBar.max = duration;
    rangeBar.value = currentTime;
}
//==============================================
//                  HIỆU ỨNG FS
//==============================================
function FS(id){
    if(document.getElementById(id).className == "btn btn-dark"){
        $.ajax(
            {
                type:"GET",
                url: "/favoritesong/create",
                data:{
                         id: id
                },
                success: function( data ) 
                {
                    console.log(data)
                }
             })
             document.getElementById(id).style.backgroundColor = 'rgb(255, 128, 128)';
             document.getElementById(id).className = "btn btn-dark favoritesongColor";
    }
    else{
        //xoa
        $.ajax(
            {
                type:"GET",
                url: "/favoritesong/delete",
                data:{
                         id: id
                },
                success: function( data ) 
                {
                    console.log(data)
                }
             })
        document.getElementById(id).className = "btn btn-dark";
        document.getElementById(id).style.backgroundColor = 'rgb(255, 179, 179)';
    }
    
}

//set mặc định bài 1 phát đầu
let indexSong = 7;
document.getElementById('playlist7').className = "playlist playlist--hover active";

//==============================================
//                  Phát-dừng bài hát
//==============================================
let isPlaying = true;
playBtn.addEventListener('click', playPause)
function playPause() {
    if (isPlaying) {
        playBtn.innerHTML = `<i class="fas fa-pause-circle pause-icon main-icon main-icon--big"></i>`;
        song.play();
        isPlaying = false;
    } else{
        playBtn.innerHTML = `<i class="fas fa-play-circle play-icon main-icon main-icon--big"></i>`;
        song.pause();
        isPlaying = true;
    }
}

//==============================================
//                  Phát lại bài hát
//==============================================
var isRepeat = false;
playRepeat.addEventListener('click',  function() {
    if(playRepeat.style.color != 'yellow') {
        playRepeat.style.color = 'yellow';
        playRepeat.style.webkitTransform = 'rotate(360deg)';
        isRepeat = true;
    }else {
        playRepeat.style.color = '#676669';
        playRepeat.style.webkitTransform = 'rotate(0)';
        isRepeat = false;
    }
});

//==============================================
//          RESET LẠI KHI CHỌN BÀI HÁT
//==============================================
// function resetSong(dir) {
//     dir = Number (dir);
//     playList.innerHTML =`
//     <div class="playlist playlist-list__title">
//         <p class="playlist__number">#</p>
//         <p class="playlist__title">TITLE</p>
//         <p class="playlist__artist">ARTIST</p>
//         <p class="playlist__time">TIME</p>
//     </div>`;
//     for (var j = 0 ;j< musics.length; j++) {
//         playList.insertAdjacentHTML( 'beforeend',
//        `<div class="playlist playlist--hover ${j === dir ? 'active' : ''}" data-index=${musics[j].id}>
//             <p class=" playlist__number">${j === dir? '<i class="fas fa-volume-up"></i>' : `${musics[j].number}`}</p>
//             <p class=" playlist__title">${musics[j].title}</p>
//             <p class=" playlist__artist">${musics[j].artist}</p>
//             <p class=" playlist__time">${musics[j].time}</p>
//         </div>`)
//     }
// }
// function changeSong(dir) {
//     if (dir === 1) { //next
//         indexSong++;
//         if (indexSong >= musics.length) {
//             indexSong = 0;
//         }
//     } else if (dir === -1) { //prev
//         indexSong--;
//         if (indexSong < 0) {
//             indexSong = musics.length-1;
//         }
//     } else if(dir === 3) {
//         indexSong = Math.floor(Math.random() * 5);  
//     }
//     //resetSong(indexSong);
//     playBtn.innerHTML = `<i class="fas fa-pause-circle pause-icon main-icon main-icon--big"></i>`;
//     src = document.getElementById(`playlist-number${indexSong}`).innerHTML;
//     song.setAttribute('src', src); 
//     song.play();
// }

function changeSong(dir) {
    document.getElementById(`playlist${indexSong}`).className = "playlist playlist--hover";
    if (dir === 1) { //next
        indexSong++;
        if (indexSong >= 21) {
            indexSong = 7;
        }
    } else if (dir === -1) { //prev
        indexSong--;
        if (indexSong < 7) {
            indexSong = 20;
        }
    } else if(dir === 3) {
        indexSong = Math.floor((Math.random()+1) * 20) ;
        if(indexSong > 20 && indexSong >= 7) indexSong = indexSong - 20;
        if(indexSong < 7) indexSong = 7;  
    }
    //resetSong(indexSong);
    playBtn.innerHTML = `<i class="fas fa-pause-circle pause-icon main-icon main-icon--big"></i>`;
    console.log(indexSong);
    src = document.getElementById(`playlist-link${indexSong}`).innerText;
    document.getElementById(`playlist${indexSong}`).className = "playlist playlist--hover active";
    console.log(src);
    song.setAttribute('src', src);  
    song.play();
}

//==============================================
//                  Đổi bài hát
//==============================================
var isShuffle = false;
nextBtn.addEventListener('click',function() {
    if (isShuffle == true) changeSong(3);
    else changeSong(1);
});
prevBtn.addEventListener('click', function() {
    if (isShuffle == true) changeSong(3);
    else changeSong(-1);
});
//==============================================
//              SET THỜI GIAN PHAT NHẠC
//==============================================
function displayTimer() {
    // alert(song.duration); thời gian bản nhạc
    // alert(song.currentTime); thời gian chạy dc
    const { duration, currentTime } = song;
    timerRight.textContent = formatTimer(duration);
    timerLeft.textContent = formatTimer(currentTime);
    rangeBar.max = duration;
    rangeBar.value = currentTime;
}
//==============================================
//        FORMAT LẠI FORM THỜI GIAN CHẠY
//==============================================
function formatTimer(number) {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number - minutes * 60);
    if (seconds < 10) return `${minutes}:0${seconds}`;
    else return `${minutes}:${seconds}`;
}
//==============================================
//  Thay đổi khúc nhạc khi click chọn rangeBar
//==============================================
rangeBar.addEventListener('change',changeBar);
function changeBar() {
    song.currentTime = rangeBar.value; 
    console.log(rangeBar.value);
}
//==============================================
//       TỰ PHÁT BÀI TIẾP KHI KẾT THÚC
//==============================================
song.addEventListener('ended', function() {
    if (isRepeat == true) { // Phát lại bài hát
        isPlaying = true;
        playPause();
    } else changeSong(1); // Phát tiếp
});
//==============================================
//        CHỌN BÀI HÁT TRONG DANH SÁCH
//==============================================
function SelectSong(id){
    document.getElementById(`playlist${indexSong}`).className = "playlist playlist--hover";
    playBtn.innerHTML = `<i class="fas fa-pause-circle pause-icon main-icon main-icon--big"></i>`;
    console.log(id);
    indexSong = id;
    src = document.getElementById(`playlist-link${indexSong}`).innerText;
    document.getElementById(`playlist${indexSong}`).className = "playlist playlist--hover active";
    console.log(src);
    song.setAttribute('src', src);  
    song.play();
}
// playList.onclick = function(e) {
    
//     const songNote = e.target.closest('.playlist--hover:not(.active)'); 
//     playBtn.innerHTML = `<i class="fas fa-pause-circle pause-icon main-icon main-icon--big"></i>`;
//     console.log(playList.querySelector("a"));
//     indexSong = playList.querySelector("a").id;
//     console.log(indexSong);
//     src = document.getElementById(`playlist-link${indexSong}`).innerText;
//     document.getElementById(`playlist${indexSong}`).className = "playlist playlist--hover active";
//     console.log(src);
//     song.setAttribute('src', src);  
//     song.play();

// };
//==============================================
//              XÁO BÀI HÁT
//==============================================
shuffle.addEventListener('click', shuffleSong);
function shuffleSong() {
    if (isShuffle == false) {
        isShuffle = true;
        shuffle.style.color = 'yellow';
        changeSong(3);
    }
    else{
        isShuffle = false;
        shuffle.style.color = '#676669';
    }
}

//==============================================
//                  ÂM THANH NHẠC
//==============================================
let isVolume = true;
valueVolume.max = 1;

volumeControllerRight.onclick = function() {
    song.volume = 1;
    valueVolume.value = 1;
    isVolume = true;
}
volumeControllerLeft.onclick = function() {
    song.volume = 0;
    valueVolume.value = 0;
    isVolume = false;
}
valueVolume.onchange = function() {
    song.volume = valueVolume.value; 
}
//==============================================
//                  DARK THEME
//==============================================
const ball = document.querySelector('.ball');
const blackThemeBtn = document.querySelector('.check');
const blackThemeCanvas = document.getElementById('container');
blackThemeBtn.addEventListener('click', function() {
    if (blackThemeCanvas.classList.contains('dark-theme')) {
        blackThemeCanvas.classList.remove('dark-theme');
        ball.style.left = '2px';
    }
    else  {
        blackThemeCanvas.classList.add('dark-theme');
        ball.style.left = '22px'
    }
});

//==============================================
//                  MOBILE JS
//==============================================

const barLeft = document.querySelector('.bars-left');
// const barRight = document.querySelector('.bars-right');
const sideBar = document.querySelector('#sidebar');
const navBar = document.querySelector('#navbar');
const hideNavBar = document.querySelector('.js-hide-navbar');
const hideSideBar = document.querySelector('.js-hide-sidebar');

barLeft.addEventListener('click', function() {
    navBar.classList.add('active');
    if (sideBar.classList.contains('active')) {
        sideBar.classList.remove('active');
    }
})
hideNavBar.addEventListener('click', function() {
    navBar.classList.remove('active')
})
// barRight.addEventListener('click', function() {
//     sideBar.classList.add('active');
//     if (navBar.classList.contains('active')) {
//         navBar.classList.remove('active');
//     }
// })
hideSideBar.addEventListener('click', function() {
    sideBar.classList.remove('active');
})
document.getElementById("mic").addEventListener('click', function(){
    const contactServer = () => {
        var url = "ws://192.168.1.49";
        const socket = new WebSocket(url + ":3000");

        socket.onopen = function() {
        socket.send('Listen');
        }
        socket.addEventListener('message', function (event) {
            command = event.data;
            console.log(command);
            switch (command) {
            case "play":
                playBtn.innerHTML = `<i class="fas fa-pause-circle pause-icon main-icon main-icon--big"></i>`;
                song.play();
                isPlaying = false;
                break;
            case "stop":
                playBtn.innerHTML = `<i class="fas fa-play-circle play-icon main-icon main-icon--big"></i>`;
                song.pause();
                isPlaying = true;
                break;
            default:
                alert("Khong nhan dien duoc!!!");
                break;
            }
        });
      }
})


