let input = document.getElementById('input');
let box = document.getElementsByClassName('box')[0];
console.log(input)
var counter = 0;
console.log(arr)
document.addEventListener('keydown', (e) => {
    if (input == document.activeElement) {
        counter++
        let t = getTimer(() => {
            if (counter2 == counter) {
                box.innerHTML = '';
                for (const iterator of arr) {
                    if (iterator.name.indexOf(input.value) > 0) {
                        let div = document.createElement('div');
                        div.classList.add('item');
                        div.innerText = iterator.name;
                        box.appendChild(div);
                    }
                }
                if (box.innerHTML == '') {
                    box.style.display = 'none';
                } else {
                    box.style.display = 'block';
                }
            }
        });
    }
})
var counter2 = 0;
function getTimer(callback) {
    return setTimeout(() => {
        counter2++;
        callback();
    }, 400);
}