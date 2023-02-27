var strings = ["curious", "passionate", "dedicated", "hardworking"];

var i = 0,
    j = -1,
    fwd = true,
    str = strings[0],
    text = "";

(function type() {
    if (i == 0) {
        fwd = true;
        j++;
    }

    if (j >= strings.length) {
        j = 0;
    }

    str = strings[j];
    if (fwd) {
        text = str.slice(0, ++i);
    }
    
    if (!fwd) {
        text = str.slice(0, --i);
    }

    if (text === str) {
        fwd = false;
    }

    document.getElementById('typing').innerHTML = text;

    setTimeout(type, 100);
}())