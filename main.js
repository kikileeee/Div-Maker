
const potvrdi = document.querySelector(".potvrdi");
const obrisati = document.querySelector('.brisi');

let parseobjekta = JSON.parse(localStorage.getItem('stringObjekta'));

const parent = document.getElementById('prostor');
const child = parent.childNodes;
let brojac = 0;
let divCollection = [];



function kreirajDiv(divPodaci) {
    let block = document.createElement('li');
    block.className = 'block';
    document.querySelector("#prostor").append(block);
    block.style.backgroundColor = divPodaci.boja;

    let para = document.createElement('p');
    let paratekst = document.createTextNode(divPodaci.komentar);
    block.style.width = divPodaci.sirina;
    block.style.height = divPodaci.visina;

    para.appendChild(paratekst);
    block.appendChild(para);

}

let hta = localStorage.getItem(localStorage)
console.log(divCollection)
for (i = 0; i < divCollection.length; i++) {
    
    kreirajDiv(divCollection)
}

potvrdi.addEventListener("click", e => {

    let divPodaci = {
        sirina: document.getElementById('width').value + 'px',
        duzina: document.getElementById('height').value + 'px',
        boja: document.getElementById('boje').value,
        komentar: document.getElementById('komentar').value
    };
    kreirajDiv(divPodaci);
    
let divCollection = [];

    function uploadPodataka(divPodaci) {
        divCollection.push(JSON.stringify(divPodaci));
        localStorage.setItem(divPodaci.komentar, divCollection)

    }

    if (divCollection.length > 0) {
        console.log(localStorage.length)
        let divCollection = JSON.parse(localStorage.getItem(divCollection))
        for (i = 0; i < localStorage.length; i++) {
            console.log(i)
            localStorage.getItem(divCollection[i])
            if (divCollection.komentar == divPodaci.komentar) {
            }
            else {
                uploadPodataka(divPodaci)
            }
            console.log(localStorage.divCollection)
        }
    }
    else {
        uploadPodataka(divPodaci)
    }
})

obrisati.addEventListener("click", e => {
    localStorage.clear();
    parent.innerHTML = '';
    // console.log(obrisati.textContent)
    // console.log(obrisati.innerHTML)
    // console.log(obrisati.outerHTML)
})
