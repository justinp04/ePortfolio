document.addEventListener("DOMContentLoaded", function() {
    let sentenceWords = ["Will", "you", "be", "my", "valentine", "bbg?"];

    let tracker = 0;

    // Sleep for 1 second
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    document.getElementsByClassName("button").hidden = true;

    // Print each word in the sentence with a 1 second delay
    async function printWords() {
        for (let i = 0; i < sentenceWords.length; i++) {
            await sleep(1000);
            document.getElementById("text").textContent += sentenceWords[i] + " ";
        }
        await sleep(1000);
        document.getElementById("image").hidden = false;
        document.getElementById("yes-button").hidden = false;
        document.getElementById("no-button").hidden = false;
    }

    printWords();

    console.log("hello");

    document.getElementById("no-button").onclick = function() {
        console.log("no");
        switch( tracker )
        {
            case 0:
                document.getElementById("no-button").style.left = "75px";
                tracker++;
                break;
            case 1:
                document.getElementById("no-button").style.top = "75px";
                tracker++;
                break;
            case 2:
                document.getElementById("no-button").style.left = "0px";
                tracker++;
                break;
            case 3:
                document.getElementById("no-button").style.top = "0px";
                tracker = 0;
                break;
        }
    };

    document.getElementById("yes-button").onclick = function() {
        window.location.href = "/priv/yes.html";
    };
});