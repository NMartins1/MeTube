let videolist = document.querySelectorAll('.video-list-container .list');
videolist.forEach(vid => {
    vid.onclick = () => {
        videolist.forEach(remove => { remove.classList.remove('active') });
        vid.classList.add('active');
        let src = vid.querySelector('.list-video').src;
        let title = vid.querySelector('.list-title').innerHTML;

        document.querySelector('.main-video-container .main-video').src = src;
        document.querySelector('.main-video-container .main-video').play();
        document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
    };
})