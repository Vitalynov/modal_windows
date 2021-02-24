function ibg() {

    let ibg = document.querySelectorAll(".ibg");

    ibg.forEach((item, i) => {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    });
}

ibg();