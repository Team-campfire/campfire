// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// var eventCode = document.querySelector("#eventCode")
document.addEventListener('DOMContentLoaded', function () { window.setTimeout(document.querySelector('svg').classList.add('animated'), 1000); });

function makeid(length) {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!&%$#@*^';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('eventCode').innerHTML = makeid(8);
});

// event_code.innerHTML = makeid(8)
    // console.log(makeid(8));
