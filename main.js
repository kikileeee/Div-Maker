
const potvrdi = document.querySelector(".potvrdi");
const obrisati = document.querySelector('.brisi');

let parseobjekta = JSON.parse(localStorage.getItem('stringObjekta'))

const parent = document.getElementById('prostor');
const child = parent.childNodes;
let brojac = 0


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

for (let i = 0; i < localStorage.length; i++) {

    document.body.append(localStorage.getItem(localStorage.key(i)));


}

potvrdi.addEventListener("click", e => {

    let divPodaci = {
        sirina: document.getElementById('width') + 'px',
        duzina: document.getElementById('height') + 'px',
        boja: document.getElementById('boje'),
        komentar: document.getElementById('komentar')
    };
    kreirajDiv(divPodaci);
    localStorage.getItem
    brojac += 1
    let stringObjekta = JSON.stringify(objekat)

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem.name = 'stringObjekta' + brojac) {
            brojac += 1
        }
        else {
            localStorage.setItem('stringObjekta' + brojac, stringObjekta)
        }
    } e.preventDefault();

})

obrisati.addEventListener("click", e => {
    e.preventDefault();
    parent.innerHTML = '';
    // console.log(obrisati.textContent)
    // console.log(obrisati.innerHTML)
    // console.log(obrisati.outerHTML)
})
