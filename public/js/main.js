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

let nom1 = document.createTextNode('Adil')
let nom2 = document.createTextNode('Soulaiman')
let nom3 = document.createTextNode('Siham')
let nom4 = document.createTextNode('Anthony')
let nom5 = document.createTextNode('Gary')
let nom6 = document.createTextNode('Cyril')
let nom7 = document.createTextNode('Amandine')
let nom8 = document.createTextNode('Quentin')
let nom9 = document.createTextNode('Bastien')
let nom10 = document.createTextNode('Kylian')
let nom11 = document.createTextNode('Junior')

    
    let element1 = clone.cloneNode();
    let element2 = clone.cloneNode();
    let element3 = clone.cloneNode();
    let element4 = clone.cloneNode();
    let element5 = clone.cloneNode();
    let element6 = clone.cloneNode();
    let element7 = clone.cloneNode();
    let element8 = clone.cloneNode();
    let element9 = clone.cloneNode();
    let element10 = clone.cloneNode();
    let element11 = clone.cloneNode();
    element1.appendChild(nom1)
    element2.appendChild(nom2)
    element3.appendChild(nom3)
    element4.appendChild(nom4)
    element5.appendChild(nom5)
    element6.appendChild(nom6)
    element7.appendChild(nom7)
    element8.appendChild(nom8)
    element9.appendChild(nom9)
    element10.appendChild(nom10)
    element11.appendChild(nom11)
    grandeDiv.appendChild(element1);
    grandeDiv.appendChild(element2);
    grandeDiv.appendChild(element3);
    grandeDiv.appendChild(element4);
    grandeDiv.appendChild(element5);
    grandeDiv.appendChild(element6);
    grandeDiv.appendChild(element7);
    grandeDiv.appendChild(element8);
    grandeDiv.appendChild(element9);
    grandeDiv.appendChild(element10);
    grandeDiv.appendChild(element11);
    document.getElementById('clone').remove()
    
    
   
let deletee = document.getElementsByClassName('delete')[0];

let count = 0;
let accord ;


deletee.addEventListener('click',()=>{
if (count == 0) {
    deletee.style.backgroundColor = 'green';
    accord = true;
}

if (count == 1) {
    deletee.style.backgroundColor = 'red';
    accord = false;
    count -=2
}
count++
})


document.querySelectorAll('.grandeDiv > div').forEach(element => {
    element.addEventListener('click',()=>{

        if (accord === true) {
            element.remove()
        }
    })
});





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
