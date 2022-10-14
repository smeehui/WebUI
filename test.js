var arr = ["cam", "xoai", "chuoi", "quyt", "canh"];

function search(inp) {
    arr.forEach((fr) => {
        let temp = "";
        for (let i = 0; i < fr.length; i++) {
            temp += fr[i];
            if (!temp.localeCompare(inp)) {
                console.log(fr);
            }
        }
    });
}

search("c");