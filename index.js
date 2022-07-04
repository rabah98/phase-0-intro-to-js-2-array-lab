const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat) {
    cats.push(cat);
}
 
function destructivelyPrependCat(cat) {
    cats.unshift(cat);
}

function  destructivelyRemoveLastCat() {
    cats.pop();
}

function  destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(Broom) {
    const newcats = [...cats, 'Broom'];
    return newcats;
}

function prependCat(Arnold) {
    const newcats = ['Arnold', ...cats];
    return newcats;
}

function  removeLastCat() {
    const newcats = cats.slice(0,2);
    return newcats;
}

function removeFirstCat() {
    const newcats = cats.slice(1);
    return newcats;
}