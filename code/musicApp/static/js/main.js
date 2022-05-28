const playBtn = document.querySelector('.play-inner');
const nextBtn = document.querySelector('.play-forward');
const prevBtn = document.querySelector('.play-backward');
//const song = document.getElementById('song');
const timerLeft = document.querySelector('.timer__left');
const timerRight = document.querySelector('.timer__right');
const playRepeat = document.querySelector('.play-repeat');
const rangeBar = document.querySelector('.range');
const playList = document.querySelector('.playlist-list');
const shuffle = document.querySelector('.shuffle-song');
const volumeControllerLeft = document.querySelector('.fa-volume-mute');
const volumeControllerRight = document.querySelector('.fa-volume-up');
const valueVolume = document.querySelector('.volume');
// document.getElementById('main').addEventListener('load', play);

function play(){
    song = document.getElementById('song');
    song.play();
}
//set mặc định bài 1 phát đầu
 
//==============================================
//                  THÊM BÀI HÁT 
//==============================================
//==============================================
//          RESET LẠI KHI CHỌN BÀI HÁT
//==============================================
function resetSong(dir) {
    dir = Number (dir);
    playList.innerHTML =`
    <div class="playlist playlist-list__title">
        <p class="playlist__number">#</p>
        <p class="playlist__title">TITLE</p>
        <p class="playlist__artist">ARTIST</p>
        <p class="playlist__time">TIME</p>
    </div>`;
    
}
//==============================================
//                  Phát-dừng bài hát
//==============================================

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
//                  Đổi bài hát
//==============================================
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
playList.onclick = function(e) {
    
    const songNote = e.target.closest('.playlist--hover:not(.active)'); 
    let songNoteindex = songNote.getAttribute('data-index'); // lấy data-index
    indexSong = songNoteindex ;
    isPlaying = false;
    
    playBtn.innerHTML = `<i class="fas fa-pause-circle pause-icon main-icon main-icon--big"></i>`;
    song.play();
    resetSong(songNoteindex);

};
//==============================================
//              XÁO BÀI HÁT
//==============================================
shuffle.addEventListener('click', shuffleSong);
var isShuffle = false;
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
//                  HIỆU ỨNG TIM
//==============================================
const heartBtn = document.getElementById('heart');
heartBtn.addEventListener('click', function() {
    if (heartBtn.className == 'far fa-heart') {
        heartBtn.className = 'fas fa-heart';
        heartBtn.style.color = 'red';
    } else {
        heartBtn.className = 'far fa-heart';
        heartBtn.style.color = '#676669';
    }
})
displayTimer();
rangeBar.value = 0;
setInterval(displayTimer , 200); 

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
const barRight = document.querySelector('.bars-right');
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
barRight.addEventListener('click', function() {
    sideBar.classList.add('active');
    if (navBar.classList.contains('active')) {
        navBar.classList.remove('active');
    }
})
hideSideBar.addEventListener('click', function() {
    sideBar.classList.remove('active');
})


