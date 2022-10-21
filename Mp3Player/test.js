const Main = () => {
    const songs = [
        {
            id: 0,
            title: "All Of My Days",
            album: "Crash Landing On You (OST)",
            artist: "SeJeon",
            gerne: "Pop",
            path: "/Mp3Player/asset/mp3/song1.mp3",
            img: "/Mp3Player/asset/img/songs/song1.jpg",
        },
        {
            id: 1,
            title: "Chúng Ta Sau Này",
            album: "Chúng Ta Sau Này (Single)",
            artist: "T.R.I",
            gerne: "V-Pop",
            path: "/Mp3Player/asset/mp3/song2.mp3",
            img: "/Mp3Player/asset/img/songs/song2.jpg",
        },
        {
            id: 2,
            title: "Dù Chẳng Phải Anh",
            album: "Dù Chẳng Phải Anh (Single)",
            artist: "Đinh Mạnh Ninh",
            gerne: "Ballad",
            path: "/Mp3Player/asset/mp3/song3.mp3",
            img: "/Mp3Player/asset/img/songs/song3.jpg",
        },
        {
            id: 3,
            title: "Giữ Lấy Làm Gì",
            album: "Giữ Lấy Làm Gì (Single)",
            artist: "MONSTAR",
            gerne: "R&B",
            path: "/Mp3Player/asset/mp3/song4.mp3",
            img: "/Mp3Player/asset/img/songs/song4.jpg",
        },
        {
            id: 4,
            title: "Nếu",
            album: "Nếu (Single)",
            artist: "Reddy",
            gerne: "Lofi",
            path: "/Mp3Player/asset/mp3/song5.m4a",
            img: "/Mp3Player/asset/img/songs/song5.jpg",
        },
        {
            id: 5,
            title: "No One Else",
            album: "More Than Blue (OST)",
            artist: "Lee Seung Chul",
            gerne: "Ballad",
            path: "/Mp3Player/asset/mp3/song6.mp3",
            img: "/Mp3Player/asset/img/songs/song6.jpg",
        },
        {
            id: 6,
            title: "Răng Khôn",
            album: "Răng Khôn (Single)",
            artist: "Phí Phương Anh feat RIN",
            gerne: "V-Pop",
            path: "/Mp3Player/asset/mp3/song7.mp3",
            img: "/Mp3Player/asset/img/songs/song7.jpg",
        },
        {
            id: 7,
            title: "Sunset",
            album: "Crash Landing On You (OST)",
            artist: "DAVICHI",
            gerne: "Ballad",
            path: "/Mp3Player/asset/mp3/song8.mp3",
            img: "/Mp3Player/asset/img/songs/song8.jpg",
        },
    ];
    return { songs: songs };
};
const app = Main();
console.log(app.songs);
