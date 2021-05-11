// Load all already existing divs from localStorage on page load
let divCollection = JSON.parse(localStorage.getItem('divCollection')) || [];
for (i = 0; i < divCollection.length; i++) {
    kreirajDiv(divCollection[i]);

}

function sacuvajULocalStorage(divPodaci) {
    let pravi = true;
    // Check if div with inputed text already exists and don't create another one if it does
    for (i = 0; i < divCollection.length; i++) {
        if (divCollection[i].komentar == divPodaci.komentar) {
            pravi = false;
            alert('Taj id vec postoji!');
            break;
        }
    }
    if (pravi) {
        divCollection.push(divPodaci);
        localStorage.setItem('divCollection', JSON.stringify(divCollection));
        kreirajDiv(divPodaci);
    }
}

function kreirajDiv(divPodaci) {
    let block = document.createElement('li');
    block.className = 'block';
    $('#prostor')[0].append(block);
    block.style.backgroundColor = divPodaci.boja;
    let para = document.createElement('p');
    let paratekst = document.createTextNode(divPodaci.komentar);
    block.style.width = divPodaci.sirina;
    block.style.height = divPodaci.duzina;

    para.appendChild(paratekst);
    block.appendChild(para);

    for (n = 0; n < 3; n++) {
        if ((Object.values(divCollection[i].voce))[n]) {

            let slika = document.createElement('img');
            slika.src = 'img/' + ((Object.keys(divCollection[i].voce))[n]) + '.png';
            block.appendChild(slika);
        }
    }
};

// Potvrdi button
$('.potvrdi')[0].addEventListener("click", e => {
    // Take values from from, create div on page and save it to localStorage
    let divPodaci = {
        sirina: $('#width')[0].value + 'px',
        duzina: $('#height')[0].value + 'px',
        voce: {
            jabuka: $('#jabuka')[0].checked,
            kruska: $('#kruska')[0].checked,
            limun: $('#limun')[0].checked
        },
        boja: $('#boje')[0].value,
        komentar: $('#komentar')[0].value
    };
    sacuvajULocalStorage(divPodaci);
});

// Brisi button

$('.brisi')[0].addEventListener("click", e => {
    localStorage.clear();
    $('#prostor')[0].innerHTML ='';
});