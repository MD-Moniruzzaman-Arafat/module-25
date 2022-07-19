// function clickBlue() {
//     document.body.style.backgroundColor = 'blue';
// }


// const yellowBtn = document.getElementById('yellow');
// yellowBtn.onclick = function () {
//     document.body.style.backgroundColor = 'yellow';
// }


// const yellowBtn = document.getElementById('yellow');
// yellowBtn.onclick = yellow;

// function yellow() {
//     document.body.style.backgroundColor = 'yellow';
// }


// const pinkButton = document.getElementById('pink');
// pinkButton.addEventListener('click', pinkBtn);
// function pinkBtn() {
//     document.body.style.backgroundColor = 'pink';
// }


// const pinkButton = document.getElementById('pink');
// pinkButton.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'pink';
// });


// document.getElementById('pink').addEventListener('click', function () {
//     document.body.style.backgroundColor = 'pink';
// });

// document.getElementById('btn').addEventListener('click', function () {
//     const inputFild = document.getElementById('inputText');
//     const comments = document.getElementById('comment');
//     comments.innerText = inputFild.value;
//     inputFild.value = '';
// })


// document.getElementById('btn').addEventListener('click', function () {
//     const inputFild = document.getElementById('inputText');
//     const p = document.createElement('p');
//     p.innerText = inputFild.value;
//     const div = document.createElement('div');
//     div.appendChild(p);
//     const container = document.getElementById('containar');
//     container.appendChild(div);
//     inputFild.value = '';
// })


// document.getElementById('delete-btn').addEventListener('click', function () {
//     document.getElementById('delete-item').style.display = 'none';
// })

// focus
// document.getElementById('delete-confirm').addEventListener('focus', function () {
//     console.log('focusd');
//     document.body.style.backgroundColor = 'red';
// })

// blur
// document.getElementById('delete-confirm').addEventListener('blur', function () {
//     console.log('blur');
//     document.body.style.backgroundColor = 'white';
// })

// keydown
// document.getElementById('delete-confirm').addEventListener('keydown', function () {
//     const inputFild = document.getElementById('delete-confirm');
//     console.log(inputFild.value);
// })


// keypress
// document.getElementById('delete-confirm').addEventListener('keypress', function () {
//     const inputFild = document.getElementById('delete-confirm');
//     console.log(inputFild.value);
// })

// keyup
// document.getElementById('delete-confirm').addEventListener('keyup', function (event) {
//     console.log(event.target.value)
//     const inputFild = document.getElementById('delete-confirm');
//     // if (inputFild.value == 'delete') {
//     //     document.getElementById('delete-btn').removeAttribute('disabled')
//     // }
//     if (event.target.value == 'delete') {
//         document.getElementById('delete-btn').removeAttribute('disabled');
//     } else {
//         document.getElementById('delete-btn').setAttribute('disabled', true);

//     }
// });

// change
// document.getElementById('delete-confirm').addEventListener('change', function () {
//     const inputFild = document.getElementById('delete-confirm');
//     console.log(inputFild.value);
// })


document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('item-2.1 click')
    // event.stopPropagation();
    event.stopImmediatePropagation();
})
document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('item-2.2 click')
    // event.stopPropagation();
})
document.getElementById('item-2').addEventListener('click', function (event) {
    console.log('item-2.3 click')
    // event.stopPropagation();
})

document.getElementById('item-container').addEventListener('click', function () {
    console.log('item-container click')
})

document.getElementById('section-container').addEventListener('click', function () {
    console.log('section-container click')
})