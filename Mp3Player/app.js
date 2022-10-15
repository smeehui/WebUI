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
const suffleBtn = $(".suffle");
const repeatBtn = $(".repeat");
const playList = $(".playlist");
const nextPage = $(".next-page");
const prevPage = $(".prev-page");
const upVol = $(".up-vol");
const downVol = $(".down-vol");
const sortID = $("#ID");
const sortTitle = $("#title");
const sortArtit = $("#artist");
const sortAlbum = $("#ablum");
const searchInp = $(".search-input");
const imgSubmit = $(".img-submit");

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
        searchSongs: "",
        pagedSongs: [],
        playedSongs: [],
        pagedSearchSongs: [],
        currentIndex: 0,
        elementsPerPage: 4,
        isGrid: false,
        isPlaying: false,
        isAsc: true,
        page: 1,
        isSuffle: false,
        isRepeated: false,
        isShowFull: false,
        isShortView: true,
        renderList: function(songs) {
                if (songs) {
                    const htmls = songs.map((song) => {
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
                        <td>
                            <img class="pointer" src="${
                                song.img
                            }" style="height: 100%; display:block;object-fit:fill"/>
                        </td>
                        <td class="prim pointer">${song.title}</td>
                        <td>${song.artist}</td>
                        <td>${song.gerne}</td>
                        <td class="pointer">${song.album}</td>
                        <td class="pointer edit">
                            <i class="fa-solid fa-pencil edit-icn"></i>
                        </td>
                    </tr>
        `;
            });
            listTbl.innerHTML = htmls.join("");
        } else {
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
                        <td>
                            <img class="pointer" src="${
                                song.img
                            }" style="height: 100%; display:block;object-fit:fill"/>
                        </td>
                        <td class="prim pointer">${song.title}</td>
                        <td>${song.artist}</td>
                        <td>${song.gerne}</td>
                        <td class="pointer">${song.album}</td>
                        <td class="pointer edit">
                            <i class="fa-solid fa-pencil edit-icn"></i>
                        </td>
                    </tr>
        `;
            });
            listTbl.innerHTML = htmls.join("");
        }
    },
    renderGrid: function () {
        const htmls = app.songs.map((song, index) => {
            return `
                <div class="song-card ${
                    app.currentIndex === index ? "current" : ""
                }" data-index="${index}">
                    <div class="song-img" style="background-image: url(${
                        song.img
                    });background-size: 147px 147px">
                    </div>
                    <div class="float-play">${
                        app.currentIndex === index
                            ? `<i class="fa-solid fa-circle-play ">`
                            : `<i class="fa-solid fa-circle-play ">`
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
        <div class="player-container" style="background-image: url(${
            app.currentSong.img
        }); transition : all .3s linear; ${
            app.isShortView ? "height: 220px" : "height:110px"
        }">
            <div class="playing-img-con" style="background-image: url(${
                app.currentSong.img
            });background-size: 200px 200px">
            <div class="cd-inside"></div>
            </div>
            <div class="playing-det bl-cen">
                <div class="playing-detl bl-cen">
                    <p class="playing-artist playing-desc">${
                        app.currentSong.artist
                    }</p>
                    <p class="playing-ttl playing-desc">${
                        app.currentSong.title
                    }</p>
                    <p class="playing-alb playing-desc">
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
            <tr data-id="${song.id}" class="rect-song pointer ${
                song.id === app.currentIndex ? "active" : ""
            } song">
                <td>
                    <img src="${song.img}" alt="img" />
                    <span ></span>
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
        rectPlayed.innerHTML = htmls.join("");
    },
    render: function (songs) {
        if (app.isGrid) {
            $(".page-nav").classList.add("hidden");
            app.renderGrid();
        } else {
            $(".page-nav").classList.remove("hidden");
            app.renderList(songs);
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
    addId: () => {
        app.songs.map((song, index) => {
            song.id = index;
            return song;
        });
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
            new Set([...playedSongs, ...app.playedSongs]),
        );
    },
    nextSong: () => {
        app.currentIndex++;
        if (app.currentIndex > app.songs.length - 1) {
            app.currentIndex = 0;
            app.page = 1;
            app.pagination();
        }
        if (
            app.currentIndex != 0 &&
            app.currentIndex % app.pagedSongs.length === 0
        ) {
            app.page += +1;
            app.pagination();
        }
        app.loadCurrentSong();
        aud.play();
        app.renderPlaying();
        app.render();
    },
    prevSong: () => {
        app.currentIndex--;
        if (app.currentIndex < 0) {
            app.currentIndex = app.songs.length - 1;
            app.page = Math.ceil(app.songs.length / app.elementsPerPage);
            app.pagination();
        } else if (
            app.currentIndex % app.pagedSongs.length ==
            app.pagedSongs.length - 1
        ) {
            app.page -= 1;
            app.pagination();
        }
        app.render();
        app.loadCurrentSong();
        aud.play();
        app.renderPlaying();
    },
    openEdit: function (index) {
        try {
            const song = app.songs[index];
            const image = $(".form-image");
            const submit = $(".form-submit");
            const del = $(".form-del");
            submit.dataset.id = index;
            del.dataset.id = index;
            formTitle.value = song.title;
            formArtist.value = song.artist;
            formAlbum.value = song.album;
            formGenre.value = song.gerne;
            mp3.dataset.url = song.path;
            image.style.backgroundImage = `url(${song.img})`;
            image.style.backgroundSize = "100% 100%";
            setTimeout(() => {
                formTitle.focus();
            }, 700);
        } catch (error) {}
    },
    deletSong: function (id) {
        const check = confirm("Do you really want to delete this song?");
        if (check) {
            app.songs.splice(id, 1);
            app.playedSongs.splice(id, 1);
            app.hideModal();
            app.pagination();
            app.render();
            app.renderPlayedList();
        } else {
            app.hideModal();
        }
    },
    suffle: () => {
        if (app.isSuffle) {
            for (let i = 0; i < app.songs.length; i++) {
                let j = Math.floor(Math.random() * (i + 1));
                var temp = app.songs[i];
                app.songs[i] = app.songs[j];
                app.songs[j] = temp;
            }
            app.pagination();
            app.render();
        } else {
            app.isAsc = false;
            app.sort("TITLE");
            app.pagination();
            app.render();
        }
    },
    repeat: () => {
        aud.loop = app.isRepeated ? true : false;
    },
    handleEvents: function () {
        // Loaded
        window.onload = () => {
            progress.value = 1;
            volume.value = 0.2;
        };

        // Load-meta
        let dur; //duration of songs
        aud.onloadedmetadata = function () {
            dur = aud.duration;
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
        // Volume changezd
        volume.oninput = () => {
            aud.volume = volume.value;
        };

        // Seeking
        progress.oninput = () => {
            aud.currentTime = (progress.value * dur) / 100;
        };
        // on next itself
        aud.onended = () => {
            app.nextSong();
        };
        // ===========CLICK=================
        // Click - play
        playBtn.onclick = function () {
            if (app.isPlaying) aud.pause();
            else aud.play();
        };
        // On click next-prev
        nextBtn.onclick = function () {
            app.nextSong();
        };
        prevBtn.onclick = function () {
            app.prevSong();
        };
        // Play onclick
        // list
        list.onclick = (e) => {
            const element = e.target;
            const parent = element.parentElement;
            // Opend edit form
            if (
                element.classList.contains("edit") ||
                element.classList.contains("edit-icn")
            ) {
                const value = Number(
                    element.closest(".edit").parentElement.dataset.index,
                );
                delBtn.classList.toggle("hidden");
                imgSubmit.classList.add("hidden");
                formImage.style.animation =
                    "spin 3s cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s";

                app.openModal();
                app.openEdit(value);
                //Play on click
            } else if (parent.dataset.index) {
                app.currentIndex = Number(parent.dataset.index);
                app.loadCurrentSong();
                app.renderPlaying();
                aud.play();
                app.render();
            }
        };
        // View
        view.onclick = function () {
            app.isGrid = app.isGrid ? false : true;
            if (app.isGrid) {
                view.classList.replace("fa-grip", "fa-list");
            } else {
                view.classList.replace("fa-list", "fa-grip");
            }
            list.classList.toggle("hidden", app.isGrid);
            grid.classList.toggle("hidden", !app.isGrid);
            if (app.searchSongs) {
                app.render(app.searchSongs);
            } else {
                app.render();
            }
        };
        // Page Change
        nextPage.onclick = () => {
            app.page += 1;
            if (app.page > Math.ceil(app.songs.length / app.elementsPerPage)) {
                app.page = 1;
            }
            $(".page-num").value = app.page;
            app.pagination();
            if (app.searchSongs) {
                app.pagination(app.searchSongs);
                app.render(app.pagedSearchSongs);
            } else {
                app.render();
            }
        };
        prevPage.onclick = () => {
            app.page -= 1;
            if (app.page < 1) {
                app.page = Math.ceil(app.songs.length / app.elementsPerPage);
            }
            app.pagination();
            if (app.searchSongs) {
                app.pagination(app.searchSongs);
                app.render(app.pagedSearchSongs);
            } else {
                app.render();
            }
        };
        // Sort

        sortID.onclick = (e) => {
            app.sort(e.target.innerText);
        };
        sortTitle.onclick = (e) => {
            app.sort(e.target.innerText);
        };
        sortAlbum.onclick = (e) => {
            app.sort(e.target.innerText);
        };
        sortArtit.onclick = (e) => {
            app.sort(e.target.innerText);
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
        };

        // Suffle repeat
        suffleBtn.onclick = () => {
            app.isSuffle = app.isSuffle ? false : true;
            suffleBtn.classList.toggle("active", app.isSuffle);
            app.suffle();
        };
        repeatBtn.onclick = () => {
            app.isRepeated = app.isRepeated ? false : true;
            repeatBtn.classList.toggle("active", app.isRepeated);
            app.repeat();
        };

        // Volumes
        upVol.onclick = () => {
            aud.volume += 0.1;
            volume.value = aud.volume;
        };
        downVol.onclick = () => {
            aud.volume -= 0.1;
            volume.value = aud.volume;
        };
        // modal
        modalForm.onclick = (e) => {
            const elClass = e.target.classList;
            if (elClass.contains("form-submit")) {
                e.preventDefault();
                const id =
                    e.target.dataset.id === "undefined"
                        ? app.songs.length + 1
                        : e.target.dataset.id;
                const title = formTitle.value;
                const artist = formArtist.value;
                const album = formAlbum.value;
                const genre = formGenre.value;
                const img = textInp.value.trim()
                    ? `"${textInp.value}"`
                    : formImage.style.backgroundImage.match(/".*"/g)[0];
                const newImg = img.slice(1, img.length - 1);
                const path = mp3.dataset.url ? mp3.dataset.url : " ";
                app.updateSong({
                    id,
                    title,
                    artist,
                    album,
                    genre,
                    newImg,
                    path,
                });
                app.hideModal();
            } else if (elClass.contains("form-cancel")) {
                app.hideModal();
            } else if (elClass.contains("form-del")) {
                app.deletSong(e.target.dataset.id);
            } else if (elClass.contains("form-image")) {
                $(".img-submit").classList.toggle("hidden");
            }
        };
        $(".close-modal").onclick = () => {
            delBtn.classList.add("hidden");
            $(".form").reset();
            imgSubmit.classList.toggle("hidden");
            app.hideModal();
        };
        // Recently played
        rectPlayed.onclick = (e) => {
            const songId = Number(e.target.closest(".rect-song").dataset.id);
            console.log(songId);
            app.currentIndex = songId;

            app.renderPlaying();
            app.loadCurrentSong();
            aud.play();
            app.render();
        };
        add.onclick = () => {
            app.openModal();
            app.openEdit();
        };
        // ===========INPUT===============
        searchInp.oninput = app.debounce((e) => {
            app.search(e.target.value);
        }, 500);
        viewRange.oninput = (e) => {
            const container = $(".player-container");
            const isChecked = e.target.checked;
            const icon = e.target.previousElementSibling.firstChild;
            if (isChecked) {
                Array.from($$(".playing-desc")).forEach((element) => {
                    element.style.margin = `0px 0px`;
                });
                container.style.height = "110px";
                icon.classList.replace("fa-arrow-up", "fa-arrow-down");
                app.elementsPerPage = 6;
                app.isShortView = false;
                app.pagination();
                app.render();
            } else {
                app.isShortView = true;
                Array.from($$(".playing-desc")).forEach((element) => {
                    element.style.margin = `10px 0px`;
                });
                app.elementsPerPage = 4;
                container.style.height = "220px";
                icon.classList.replace("fa-arrow-down", "fa-arrow-up");
                app.pagination();
                app.render();
            }
        };
        // Insert thumbnail
        // On hit enter at image input
        textInp.onkeyup = (e) => {
            e.preventDefault();
            if (e.key === "Enter" || e.keyCode === 13) {
                var url = textInp.value;
                $(".form-image").style.backgroundImage = `url(${url})`;
                $(".form-image").style.backgroundSize = "100% 100%";
            }
        };
        // On upload image
        fileInp.oninput = (e) => {
            let files = e.target.files;
            if (files[files.length - 1]) {
                let tmppath = URL.createObjectURL(files[files.length - 1]);
                $(".form-image").style.backgroundImage = `url(${tmppath})`;
                $(".form-image").style.backgroundSize = "100% 100%";
            }
        };
        // On upload audio
        mp3.oninput = (e) => {
            let files = e.target.files;
            console.log(files);
            if (files[files.length - 1]) {
                let tmppath = URL.createObjectURL(files[files.length - 1]);
                mp3.dataset.url = tmppath;
            }
        };
    },
    openModal: () => {
        modal.classList.remove("hidden");
        modalForm.style.top = "50%";
    },
    search: (inp) => {
        try {
            if (inp.trim()) {
                let regex = new RegExp(`${inp}+`, "i");
                let checkSongs = [];
                app.songs.forEach((song) => {
                    for (var [key, value] of Object.entries(song)) {
                        if (String(value).search(regex) !== -1) {
                            if (!value.match(/Mp3Player/g)) {
                                checkSongs.push(song);
                            }
                        }
                    }
                });
                app.searchSongs = Array.from(new Set(checkSongs));
                app.pagination(app.searchSongs);
                app.render(app.pagedSearchSongs);
            } else {
                app.searchSongs = "";
                app.pagination();
                app.render();
            }
        } catch (error) {}
    },
    updateSong: (song) => {
        const id = song.id;
        if (id <= app.songs.length) {
            console.log();
            app.songs[id].img = song.newImg;
            app.songs[id].title = song.title;
            app.songs[id].artist = song.artist;
            app.songs[id].album = song.album;
            app.songs[id].genre = song.genre;
            app.songs[id].path = song.path;
        }
        // Add new song
        else {
            const newSong = {
                id: id,
                title: song.title,
                artist: song.artist,
                album: song.album,
                gerne: song.genre,
                img: song.newImg,
                path: song.path,
            };
            app.songs.push(newSong);
        }
        if (app.searchSongs) {
            app.pagination(app.searchSongs);
            app.render(app.pagedSearchSongs);
        } else {
            app.pagination();
            app.render();
        }
    },
    hideModal: function () {
        formImage.style.animation = "none";
        modalForm.style.top = "-22%";
        modal.classList.add("hidden");
    },
    sort: (type) => {
        switch (type) {
            case "#":
                app.songs.sort((a, b) => b.id - a.id);
                app.pagination();
                app.render();
                break;
            case "TITLE":
                if (app.isAsc) {
                    app.isAsc = false;
                    app.songs.sort((a, b) => b.title.localeCompare(a.title));
                } else {
                    app.isAsc = true;
                    app.songs.sort((a, b) => a.title.localeCompare(b.title));
                }
                app.pagination();
                app.render();
                break;
            case "ARTIST":
                if (app.isAsc) {
                    app.isAsc = false;
                    app.songs.sort((a, b) => b.artist.localeCompare(a.artist));
                } else {
                    app.isAsc = true;
                    app.songs.sort((a, b) => a.artist.localeCompare(b.artist));
                }
                app.pagination();
                app.render();
                break;
            case "ALBUM":
                console.log(1);
                if (app.isAsc) {
                    app.isAsc = false;
                    app.songs.sort((a, b) => b.album.localeCompare(a.album));
                } else {
                    app.isAsc = true;
                    app.songs.sort((a, b) => a.album.localeCompare(b.album));
                }
                app.pagination();
                app.render();
            default:
                break;
        }
    },
    loadCurrentSong: function () {
        aud.src = app.currentSong.path;
    },
    debounce: (func, wait) => {
        let timeout;
        return function sumVal() {
            let context = this,
                args = arguments;
            let executeFunction = function () {
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(executeFunction, wait);
        };
    },
    pagination: function (songs) {
        if (songs) {
            app.addId();
            app.pagedSearchSongs = songs.slice(
                (app.page - 1) * app.elementsPerPage,
                (app.page - 1) * app.elementsPerPage + app.elementsPerPage,
            );
            $(".page-num").value = app.page;
        } else {
            app.addId();
            app.pagedSongs = app.songs.slice(
                (app.page - 1) * app.elementsPerPage,
                (app.page - 1) * app.elementsPerPage + app.elementsPerPage,
            );
            $(".page-num").value = app.page;
        }
    },
    start: function () {
        // Tao thuoc tinh cho thanh phan
        app.defineProperties();
        // Lay data
        app.dublicateSong();
        // phan trang
        app.pagination();

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