const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// render
const listTbl = $(".list-body");
const grid = $(".grid");
const list = $(".list");
const rectPlayed = $(".rect-played");

// Elements
const view = $(".view");
const player = $(".player");
const playBtn = $(".play");
const nextBtn = $(".next");
const prevBtn = $(".prev");
const aud = $(".audio");
const progress = $(".progress");
const curr = $(".curr");
const rem = $(".rem");
const volume = $(".volume-slider");
const playList = $(".playlist");
const modal = $(".modal");
const modalForm = $(".modal-form");
const formImage = $(".form-image");

const app = {
        db: [{
            id: 0,
            title: "All Of My Days",
            album: "Crash Landing On You (OST)",
            artist: "SeJeon",
            gerne: "Pop",
            path: "/Mp3Player/asset/mp3/song1.mp3",
            img: "/Mp3Player/asset/img/songs/song1.jpg",
        }, {
            id: 1,
            title: "Chúng Ta Sau Này",
            album: "Chúng Ta Sau Này (Single)",
            artist: "T.R.I",
            gerne: "V-Pop",
            path: "/Mp3Player/asset/mp3/song2.mp3",
            img: "/Mp3Player/asset/img/songs/song2.jpg",
        }, {
            id: 2,
            title: "Dù Chẳng Phải Anh",
            album: "Dù Chẳng Phải Anh (Single)",
            artist: "Đinh Mạnh Ninh",
            gerne: "Ballad",
            path: "/Mp3Player/asset/mp3/song3.mp3",
            img: "/Mp3Player/asset/img/songs/song3.jpg",
        }, {
            id: 3,
            title: "Giữ Lấy Làm Gì",
            album: "Giữ Lấy Làm Gì (Single)",
            artist: "MONSTAR",
            gerne: "R&B",
            path: "/Mp3Player/asset/mp3/song4.mp3",
            img: "/Mp3Player/asset/img/songs/song4.jpg",
        }, {
            id: 4,
            title: "Nếu",
            album: "Nếu (Single)",
            artist: "Reddy",
            gerne: "Lofi",
            path: "/Mp3Player/asset/mp3/song5.m4a",
            img: "/Mp3Player/asset/img/songs/song5.jpg",
        }, {
            id: 5,
            title: "No One Else",
            album: "More Than Blue (OST)",
            artist: "Lee Seung Chul",
            gerne: "Ballad",
            path: "/Mp3Player/asset/mp3/song6.mp3",
            img: "/Mp3Player/asset/img/songs/song6.jpg",
        }, {
            id: 6,
            title: "Răng Khôn",
            album: "Răng Khôn (Single)",
            artist: "Phí Phương Anh feat RIN",
            gerne: "V-Pop",
            path: "/Mp3Player/asset/mp3/song7.mp3",
            img: "/Mp3Player/asset/img/songs/song7.jpg",
        }, {
            id: 7,
            title: "Sunset",
            album: "Crash Landing On You (OST)",
            artist: "DAVICHI",
            gerne: "Ballad",
            path: "/Mp3Player/asset/mp3/song8.mp3",
            img: "/Mp3Player/asset/img/songs/song8.jpg",
        }, ],
        songs: [],
        pagedSongs: [],
        playedSongs: [],
        currentIndex: 0,
        isGrid: false,
        isPlaying: false,
        page: 1,
        renderList: function() {
                const htmls = app.pagedSongs.map((song) => {
                            return `
                <tr data-index = "${song.id}" 
                    class="song ${
                        app.currentIndex === song.id ? "playing" : null
                    }" 
                    style = "height: 51.4px"
                    >
                    <td>
                        ${
                            app.currentIndex === song.id
                                ? `<i class="fa-regular fa-circle-play ctl-icn"></i>`
                                : song.id + 1
                        }</i>
                    </td>
                    <td class="bl-cen">
                        <img class="pointer" src="${
                            song.img
                        }" style="height: 100%; display:block;object-fit:fill"/>
                    </td>
                    <td class="prim pointer">${song.title}</td>
                    <td>${song.artist}</td>
                    <td class="pointer">${song.album}</td>
                    <td class="pointer edit">
                        <i class="fa-solid fa-pencil edit-icn"></i>
                    </td>
                </tr>
                `;
        });
        listTbl.innerHTML = htmls.join("");
    },
    renderGrid: function () {
        const htmls = app.songs.map((song, index) => {
            return `
                <div class="song-card" data-index="${index}">
                    <div class="song-img" style="background-image: url(${
                        song.img
                    });background-size: 147px 147px">
                    </div>
                    <div class="float-play ${
                        app.currentIndex === index ? "white" : "light"
                    }">${
                app.currentIndex === index
                    ? `<i class="fa-solid fa-circle-play ctl-icn ">`
                    : `<i class="fa-solid fa-circle-play ctl-icn">`
            }</i></div>
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
    renderPlaying: function () {
        const htmls = `
        <div class="player-container" style="background-image: url(${app.currentSong.img});">\
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
        </div>
        `;
        player.innerHTML = htmls;
    },
    renderPlayedList: function () {
        const htmls = app.playedSongs.map((song) => {
            return `    
            <tr>
                <td>
                    <img src="${song.img}" alt="img" />
                </td>
                <td>
                    <p>${song.title}</p>
                    <p class="sub" style="margin-top: 5px">
                        ${song.artist}
                    </p>
                </td>
            </tr>
            `;
        });
        rectPlayed.innerHTML = htmls;
    },
    render: function () {
        if (app.isGrid) {
            $(".page-nav").classList.add("hidden");
            app.renderGrid();
        } else {
            $(".page-nav").classList.remove("hidden");
            app.renderList();
        }
    },
    defineProperties: function () {
        Object.defineProperty(app, "currentSong", {
            get: function () {
                return app.songs[app.currentIndex];
            },
        });
    },
    dublicateSong: () => {
        app.songs = app.db;
    },
    calcTime: function (currTime, duration) {
        const min = Math.floor(currTime / 60);
        const sec = Math.floor(currTime % 60);
        const reMin = Math.floor((duration - currTime) / 60);
        const reSec = Math.floor((duration - currTime) % 60);
        const mm = min < 9 ? `0${min}` : min;
        const ss = sec < 9 ? `0${sec}` : sec;
        const reMm = reMin < 9 ? `0${reMin}` : reMin;
        const reSs = reSec < 9 ? `0${reSec}` : reSec;

        curr.innerText = `${mm}:${ss}`;
        if (duration) {
            rem.innerText = `${reMm}:${reSs}`;
        }
    },
    addPlayed: (index) => {
        const playedSongs = app.songs.filter((song) => song.id === index);
        app.playedSongs = Array.from(
            new Set([...app.playedSongs, ...playedSongs]),
        );
    },
    openEdit: function (index) {
        const song = app.songs[index];
        const title = $("#title");
        const artist = $("#artist");
        const album = $("#album");
        const image = $(".form-image");
        const submit = $(".form-submit");
        submit.dataset.id = index;
        title.value = song.title;
        artist.value = song.artist;
        album.value = song.album;
        image.style.backgroundImage = `url(${song.img})`;
        image.style.backgroundSize = "100% 100%";
        setTimeout(() => {
            title.focus();
        }, 700);
    },
    handleEvents: function () {
        // Loaded
        window.onload = () => {
            progress.value = 1;
            volume.value = 1;
        };

        // Load-meta
        let dur; //duration of songs
        aud.onloadedmetadata = function () {
            dur = aud.duration;
        };
        // On scroll
        playList.onscroll = (e) => {};

        // View
        view.onclick = function () {
            app.isGrid = app.isGrid ? false : true;
            list.classList.toggle("hidden", app.isGrid);
            grid.classList.toggle("hidden", !app.isGrid);
            app.render();
        };

        // Click - play
        playBtn.onclick = function () {
            if (app.isPlaying) aud.pause();
            else aud.play();
        };
        // On click next-prev
        nextBtn.onclick = function () {
            app.currentIndex = app.currentIndex + 1;
            if (app.currentIndex > app.songs.length - 1) {
                app.currentIndex = 0;
                app.page = 1;
                app.pagination(app.page);
            }
            if (
                app.currentIndex != 0 &&
                app.currentIndex % app.pagedSongs.length === 0
            ) {
                app.page += +1;
                app.pagination(app.page);
            }
            app.loadCurrentSong();
            aud.play();
            app.renderPlaying();
            app.render();
        };
        prevBtn.onclick = function () {
            app.currentIndex = app.currentIndex - 1;
            if (app.currentIndex < 0) {
                app.currentIndex = app.songs.length - 1;
                app.page = Math.floor(app.songs.length / 4);
                app.pagination(app.page);
            }
            app.loadCurrentSong();
            aud.play();
            app.renderPlaying();
            app.render();
        };
        // On-play-pause

        aud.onplay = function () {
            app.addPlayed(app.currentIndex);
            const thumb = $(".playing-img-con");
            app.isPlaying = true;
            app.renderPlayedList();
            thumb.style.animation = `${dur / 2}s linear 0s 1 normal none spin`;
            playBtn.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`;
        };
        aud.onpause = function () {
            const thumb = $(".playing-img-con");
            thumb.style.animationPlayState = "paused";
            playBtn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
            app.isPlaying = false;
        };

        // While playing
        aud.ontimeupdate = function () {
            const percent = (aud.currentTime / dur) * 100;
            progress.value = percent;
            app.calcTime(aud.currentTime, dur);
        };
        // Volume change
        volume.oninput = () => {
            aud.volume = volume.value;
        };

        // Seeking
        progress.oninput = () => {
            aud.currentTime = (progress.value * dur) / 100;
        };

        // Play onclick
        // list
        playList.onclick = (e) => {
            const element = e.target;
            const parent = element.parentElement;
            if (
                element.classList.contains("edit") ||
                element.classList.contains("edit-icn")
            ) {
                const value = Number(
                    element.closest(".edit").parentElement.dataset.index,
                );
                app.openEdit(value);
                modal.classList.remove("hidden");
                modalForm.style.top = "50%";
                formImage.style.animation =
                    "spin 3s cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s";
            } else if (parent.dataset.index) {
                app.currentIndex = Number(parent.dataset.index);
                app.loadCurrentSong();
                app.renderPlaying();
                aud.play();
                app.render();
            } else if (element.classList.contains("fa-greater-than")) {
                app.page += 1;
                if (app.page > Math.floor(app.songs.length / 4)) {
                    app.page = 1;
                }
                $(".page-num").value = app.page;
                app.pagination(app.page);
                app.render();
            } else if (element.classList.contains("fa-less-than")) {
                app.page -= 1;
                if (app.page < 1) {
                    app.page = Math.floor(app.songs.length / 4);
                }
                app.pagination(app.page);
                app.render();
            }
        };
        // grid
        grid.onclick = (e) => {
            const index = Number(e.target.closest(".song-card").dataset.index);
            if (index === app.currentIndex) {
                if (app.isPlaying) {
                    aud.pause();
                } else {
                    aud.play();
                }
                app.render();
            } else {
                app.currentIndex = index;
                app.loadCurrentSong();
                app.renderPlaying();
                aud.play();
                app.render();
            }

            $$(".float-play")[app.currentIndex].innerHTML = app.isPlaying
                ? `<i class="fa-regular fa-circle-play"></i>`
                : `<i class="fa-regular fa-circle-pause"></i>`;
        };
        // modal
        modalForm.onclick = (e) => {
            e.preventDefault();
            if (e.target.classList.contains("form-submit")) {
                const id = e.target.dataset.id;
                const title = $("#title").value;
                const artist = $("#artist").value;
                const album = $("#album").value;
                app.updateSong({ id, title, artist, album });
                app.hideModal();
            } else if (e.target.classList.contains("form-cancel")) {
                app.hideModal();
            }
        };
        $(".close-modal").onclick = () => app.hideModal();
    },
    updateSong: (song) => {
        const id = song.id;
        app.songs[id].title = song.title;
        app.songs[id].artist = song.artist;
        app.songs[id].album = song.album;
        app.render();
    },
    hideModal: function () {
        formImage.style.animation = "none";
        modalForm.style.top = "-22%";
        modal.classList.add("hidden");
    },
    loadCurrentSong: function () {
        aud.src = app.currentSong.path;
    },
    pagination: function (page, perPage = 4) {
        app.pagedSongs = app.songs.slice(
            (page - 1) * perPage,
            (page - 1) * perPage + perPage,
        );

        $(".page-num").value = page;
    },
    start: function () {
        // Tao thuoc tinh cho thanh phan
        app.defineProperties();
        // Lay data
        app.dublicateSong();
        // phan trang
        app.pagination(app.page);

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