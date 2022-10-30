<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AJAX test</title>
    </head>
    <body>
        <h1 id="text"></h1>
        <button id="btn">Change</button>
        <?php
        echo "I love you"
        ?>
        <script>
            btn.onclick = function () {
                const xhttp = new XMLHttpRequest();
                xhttp.onload = function () {
                    console.log(this);
                    text.innerText = this.responseText;
                };
                xhttp.open("GET", "Text.txt");
                xhttp.send();
            };
        </script>
    </body>
</html>