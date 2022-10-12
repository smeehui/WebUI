const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const listTbl = $(".list-body");
const grid = $(".grid");
const list = $(".list");
const view = $(".view");
const player = $(".player-container");
const aud = $(".audio");
const playBtn = $(".play");
const nextBtn = $(".next");
const prevBtn = $(".prev");
const progress = $(".progress");

const app = {
    db: [{
        id: 1,
        title: "All Of My Days",
        album: "Crash Landing On You (OST)",
        artist: "SeJeon",
        gerne: "Pop",
        path: "/Mp3Player/asset/mp3/song1.mp3",
        img: "/Mp3Player/asset/img/songs/song1.jpg",
    }, {
        id: 2,
        title: "Chúng Ta Sau Này",
        album: "Chúng Ta Sau Này (Single)",
        artist: "T.R.I",
        gerne: "V-Pop",
        path: "/Mp3Player/asset/mp3/song2.mp3",
        img: "/Mp3Player/asset/img/songs/song2.m4a",
    }, {
        id: 3,
        title: "Dù Chẳng Phải Anh",
        album: "Dù Chẳng Phải Anh (Single)",
        artist: "Đinh Mạnh Ninh",
        gerne: "Ballad",
        path: "/Mp3Player/asset/mp3/song3.mp3",
        img: "/Mp3Player/asset/img/songs/song3.jpg",
    }, {
        id: 4,
        title: "Giữ Lấy Làm Gì",
        album: "Giữ Lấy Làm Gì (Single)",
        artist: "MONSTAR",
        gerne: "R&B",
        path: "/Mp3Player/asset/mp3/song4.mp3",
        img: "/Mp3Player/asset/img/songs/song4.jpg",
    }, {
        id: 5,
        title: "Nếu",
        album: "Nếu (Single)",
        artist: "Reddy",
        gerne: "Lofi",
        path: "/Mp3Player/asset/mp3/song5.mp3",
        img: "/Mp3Player/asset/img/songs/song5.m4a",
    }, {
        id: 6,
        title: "No One Else",
        album: "More Than Blue (OST)",
        artist: "Lee Seung Chul",
        gerne: "Ballad",
        path: "/Mp3Player/asset/mp3/song6.mp3",
        img: "/Mp3Player/asset/img/songs/song6.jpg",
    }, {
        id: 7,
        title: "Răng Khôn",
        album: "Răng Khôn (Single)",
        artist: "Phí Phương Anh feat RIN",
        gerne: "V-Pop",
        path: "/Mp3Player/asset/mp3/song7.mp3",
        img: "/Mp3Player/asset/img/songs/song7.jpg",
    }, {
        id: 8,
        title: "Sunset",
        album: "Crash Landing On You (OST)",
        artist: "DAVICHI",
        gerne: "Ballad",
        path: "/Mp3Player/asset/mp3/song8.mp3",
        img: "/Mp3Player/asset/img/songs/song8.jpg",
    }, ],
    songs: [{
        id: 1,
        title: "All Of My Days",
        album: "Crash Landing On You (OST)",
        artist: "SeJeon",
        gerne: "Pop",
        path: "/Mp3Player/asset/mp3/song1.mp3",
        img: "/Mp3Player/asset/img/songs/song1.jpg",
    }, {
        id: 2,
        title: "Chúng Ta Sau Này",
        album: "Chúng Ta Sau Này (Single)",
        artist: "T.R.I",
        gerne: "V-Pop",
        path: "/Mp3Player/asset/mp3/song2.mp3",
        img: "/Mp3Player/asset/img/songs/song2.jpg",
    }, {
        id: 3,
        title: "Dù Chẳng Phải Anh",
        album: "Dù Chẳng Phải Anh (Single)",
        artist: "Đinh Mạnh Ninh",
        gerne: "Ballad",
        path: "/Mp3Player/asset/mp3/song3.mp3",
        img: "/Mp3Player/asset/img/songs/song3.jpg",
    }, {
        id: 4,
        title: "Giữ Lấy Làm Gì",
        album: "Giữ Lấy Làm Gì (Single)",
        artist: "MONSTAR",
        gerne: "R&B",
        path: "/Mp3Player/asset/mp3/song4.mp3",
        img: "/Mp3Player/asset/img/songs/song4.jpg",
    }, {
        id: 5,
        title: "Nếu",
        album: "Nếu (Single)",
        artist: "Reddy",
        gerne: "Lofi",
        path: "/Mp3Player/asset/mp3/song5.m4a",
        img: "/Mp3Player/asset/img/songs/song5.jpg",
    }, {
        id: 6,
        title: "No One Else",
        album: "More Than Blue (OST)",
        artist: "Lee Seung Chul",
        gerne: "Ballad",
        path: "/Mp3Player/asset/mp3/song6.mp3",
        img: "/Mp3Player/asset/img/songs/song6.jpg",
    }, {
        id: 7,
        title: "Răng Khôn",
        album: "Răng Khôn (Single)",
        artist: "Phí Phương Anh feat RIN",
        gerne: "V-Pop",
        path: "/Mp3Player/asset/mp3/song7.mp3",
        img: "/Mp3Player/asset/img/songs/song7.jpg",
    }, {
        id: 8,
        title: "Sunset",
        album: "Crash Landing On You (OST)",
        artist: "DAVICHI",
        gerne: "Ballad",
        path: "/Mp3Player/asset/mp3/song8.mp3",
        img: "/Mp3Player/asset/img/songs/song8.jpg",
    }, ],
    currentIndex: 0,
    isGrid: false,
    isPlaying: false,
    renderPlaying: function() {},
    renderListSongs: function() {
        const htmls = app.songs.map((song, index) => {
            return `
            <tr class="song ${
                app.currentIndex === index ? "playing" : null
            }" style = "height: 51.4px">
                <td>
                    ${song.id}</i>
                </td>
                <td class="bl-cen">
                    <img class="pointer" src="${
                        song.img
                    }" style="height: 100%; display:block;object-fit:fill"/>
                </td>
                <td class="prim pointer">${song.title}</td>
                <td>4:58</td>
                <td class="pointer">${song.album}</td>
                <td class="pointer">
                    <i class="fa-solid fa-pencil"></i>
                </td>
            </tr>`;
        });
        listTbl.innerHTML = htmls.join("");
    },
    renderGridSongs: function() {
        const htmls = app.songs.map((song) => {
            return `
                <div class="song-card">
                    <div class="song-img">
                        <img src="${song.img}" alt="song-${song.id}" />
                    </div>
                    <div class="song-detl">
                        <div class="song-title">
                            ${song.title}
                        </div>
                        <div class="song-artist sub">${song.artist}</div>
                    </div>
                </div>
            `;
        });
        grid.innerHTML = htmls.join("");
    },
    renderPlaying: function() {
        const htmls = `
        <div class="playing-img-con" style="background-image: url(${app.currentSong.img});background-size: 200px 200px">
        </div>
        <div class="playing-det bl-cen">
            <div class="playing-detl bl-cen">
                <p class="playing-artist">${app.currentSong.artist}</p>
                <p class="playing-ttl">${app.currentSong.title}</p>
                <p class="playing-alb">
                ${app.currentSong.album}
                </p>
            </div>
        </div>
        `;
        player.innerHTML = htmls;
    },
    render: function() {
        if (app.isGrid) {
            app.renderGridSongs();
        } else {
            app.renderListSongs();
        }
    },
    defineProperties: function() {
        Object.defineProperty(app, "currentSong", {
            get: function() {
                return app.songs[app.currentIndex];
            },
        });
    },
    handleEvents: function() {
        // Load-meta
        let dur;
        aud.onloadedmetadata = function() {
            dur = aud.duration;
        };

        // Click
        view.onclick = function() {
            app.isGrid = app.isGrid ? false : true;
            console.log(app.isGrid);
            list.classList.toggle("hidden", app.isGrid);
            grid.classList.toggle("hidden", !app.isGrid);
            app.render();
        };

        // Click - play
        playBtn.onclick = function() {
            if (app.isPlaying) aud.pause();
            else aud.play();
        };
        // On next-prev
        nextBtn.onclick = function() {
            app.currentIndex = app.currentIndex + 1;
            if (app.currentIndex > app.songs.length - 1) {
                app.currentIndex = 0;
            }
            app.loadCurrentSong();
            aud.play();
            app.renderPlaying();
            app.render();
        };
        prevBtn.onclick = function() {
            app.currentIndex = app.currentIndex - 1;
            if (app.currentIndex < 0) {
                app.currentIndex = app.songs.length - 1;
            }
            app.loadCurrentSong();
            aud.play();
            app.renderPlaying();
            app.render();
        };
        // On-play-pause

        aud.onplay = function() {
            const thumb = $(".playing-img-con");
            app.isPlaying = true;
            thumb.style.animation = `${dur / 2}s linear 0s 1 normal none  spin`;
            playBtn.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`;
        };
        aud.onpause = function() {
            const thumb = $(".playing-img-con");
            thumb.style.animationPlayState = "paused";
            playBtn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
            app.isPlaying = false;
        };

        // While playing
        aud.ontimeupdate = function() {
            const percent = (aud.currentTime / dur) * 100;
            progress.value = percent;
        };
    },

    loadCurrentSong: function() {
        aud.src = app.currentSong.path;
    },
    start: function() {
        // Tao thuoc tinh cho thanh phan
        app.defineProperties();
        // Render cac thanh phan
        app.renderPlaying();
        app.render();
        // Xu ly xu kien
        app.handleEvents();
        // LoadSong
        app.loadCurrentSong();
    },
};
app.start();