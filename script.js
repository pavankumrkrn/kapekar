let count = 0
let text = ''
function createElement(element, className='', id=''){
    let elem = document.createElement(element);
    elem.setAttribute('class', className);
    elem.id = id;
    return elem;
}


//html appending

let container  = createElement('div','container');
let card = createElement('div','card mt-5');
let cardHeader = createElement('div','card-header');
cardHeader.innerText = "Kapekar's Constant";
let cardBody = createElement('div','card-body');
let form = createElement('form','form','form');
let label = createElement('label')
label.setAttribute('for', 'kNumber');
label.innerText = 'Enter Number'
let input = createElement('input', 'form-control', 'kNumber');
input.setAttribute('type', 'number');
input.setAttribute('name', 'kNumber');
input.setAttribute('required', 'true');
let button = createElement('button', 'btn btn-primary mt-3');
button.setAttribute('type', 'submit');
button.innerText = 'Check'
form.append(label, input, button);
cardBody.append(form);
card.append(cardHeader, cardBody);

let div  = createElement('div');
let para = createElement('p', 'h1 text-center mt-5', 'result');
div.append(para);
container.append(card, div);
document.body.append(container);

//end of html appending



document.getElementById('form').onsubmit = function (e) {
    e.preventDefault();
    count = 0;
    let formObject  = document.getElementById('form').elements;
    let num = formObject.kNumber.value 
    if(num.length > 4) {
        alert('Please Enter a 4 digit number');
    } else {
        if(isKapekarNumber(num) == 6174) {
        document.getElementById('result').setAttribute('style', 'color:green;')
        text = 'Hurray ! '+num+' is a kapekar Number'
    } else {
        document.getElementById('result').setAttribute('style', 'color:red;')
        text = 'Sorry !!! '+num+' is not a kapekar Number'
    }
    document.getElementById('result').innerText = text;
    document.getElementById('kNumber').value = ''
    }
    

}
function isKapekarNumber(num){
    count++;
    if(count > 7){
        return num;
    }
    let arr = num.split('').map(i=>+i);
    let asc = arr.sort((a,b)=>a-b).join('');
    let desc = arr.sort((a,b)=>b-a).join('');
    console.log(desc, asc, count, desc-asc)
    if(desc-asc === 6174){
        return desc-asc;
    } else {
        let str = ''
        let n = desc-asc
        str+=n
       return isKapekarNumber(str)
    }
}
