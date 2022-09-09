let clone = document.getElementById('clone');
let eliminer = document.getElementsByClassName('eliminer')[0];
let grandeDiv = document.getElementsByClassName('grandeDiv')[0];
let tab = document.querySelectorAll('.grandeDiv > div');
let hasard = Math.floor(Math.random() * ((tab.length)));
grandeDiv.style.display = 'flex';
grandeDiv.style.justifyContent = 'center';
grandeDiv.style.gap = '20px';
grandeDiv.style.flexWrap = 'wrap';
grandeDiv.style.padding = '15px'
document.getElementsByTagName('body')[0].style.padding = '300px';
document.getElementsByTagName('body')[0].style.paddingTop = '50px';
let nombre = +prompt("Combien d'élèves ?");
let nom;
for (let i = 0; i < nombre - 1; i++) {
    nom = document.createTextNode(`STUDENT ${i + 2}`)
    console.log(nom.textContent);
    let element = clone.cloneNode();
    element.innerHTML = nom.textContent;
    console.log(element.innerHTML);


    grandeDiv.appendChild(element)

}


tab = document.querySelectorAll('.grandeDiv > div');

let i = 0;
let newInput;

tab.forEach(element => {
    element.addEventListener('click', () => {



        newInput = document.createElement('input');
        newInput.value = '';
        element.innerText = '';
        element.appendChild(newInput);
        newInput.style.height = '35px';
        newInput.focus();
        element.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                element.innerText = newInput.value;
                newInput.remove();
            }
        });
    })
});

let compteur = 0;
let pluss = () => {
    compteur++
}

let timer;
let iteration;


let random = document.getElementsByClassName('random')[0];
let reload = document.getElementsByClassName('reload')[0];
random.addEventListener('click', () => {

    timer = setInterval(tirage, 250);
    iteration = setInterval(pluss, 250);
    compteur = 0;

})



let tirage = () => {
    tab = document.querySelectorAll('.grandeDiv > div');
    let hasard = Math.floor(Math.random() * ((tab.length - 1) + 1));
    tab[hasard].classList.add('bluff');
    setTimeout(() => {
        tab[hasard].classList.remove('bluff');

    }, "100")
    if (compteur > 10) {
        clearInterval(timer);
        clearInterval(iteration)

        tab[hasard].classList.add('choisi');
        console.log(tab[hasard].innerText);

        setTimeout(() => {
            tab[hasard].remove()
            eliminer.appendChild(tab[hasard]);
        }, "2000")
    }
}


let boutons = document.getElementsByClassName('boutons')[0];
boutons.style.margin = '20px'
eliminer.style.display = 'flex';
eliminer.style.justifyContent = 'center';
eliminer.style.gap = '20px';
eliminer.style.flexWrap = 'wrap';
eliminer.style.padding = '15px';

reload.addEventListener('click', () => {
    let divEliminer = document.querySelectorAll('.eliminer > div');
    divEliminer.forEach(element => {
        element.remove();
        grandeDiv.appendChild(element)
        element.classList.remove('choisi')
    });
});
