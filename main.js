
const potvrdi = document.querySelector(".potvrdi");
const obrisati = document.querySelector('.brisi');

let parseobjekta = JSON.parse(localStorage.getItem('stringObjekta'));

const parent = document.getElementById('prostor');
const child = parent.childNodes;
let brojac = 0;



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

potvrdi.addEventListener("click", e => {

    let divPodaci = {
        sirina: document.getElementById('width').value + 'px',
        duzina: document.getElementById('height').value + 'px',
        boja: document.getElementById('boje').value,
        komentar: document.getElementById('komentar').value
    };
    kreirajDiv(divPodaci);



    let divCollection = [];
    console.log(divCollection)
    if (localStorage.divCollection == []) {

        let divCollection = JSON.parse(localStorage.getItem(divCollection))
        for (i = 0; i < localStorage.length; i++) {

            localStorage.getItem(divCollection[i])
            if (divPodaci.komentar == divCollection.komentar) {

                console.log('localStorage je ostao isti')
            }
        }
    }
    else {
        let divCollection = [];
        divCollection.push(divPodaci)
        localStorage.setItem(divPodaci.komentar, JSON.stringify(divCollection))
        console.log('localStorage je promenjen')
    }

})

obrisati.addEventListener("click", e => {
    localStorage.clear
    parent.innerHTML = '';
    // console.log(obrisati.textContent)
    // console.log(obrisati.innerHTML)
    // console.log(obrisati.outerHTML)
})
