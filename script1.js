const items = document.getElementsByClassName('item');
// for (const item of items) {
//     item.addEventListener('click', function () {
//         document.getElementById('item-container').removeChild(item)
//     })
// }

// for (const item of items) {
//     item.addEventListener('click', function (event) {
//         event.target.parentNode.removeChild(event.target)
//     })
// }

document.getElementById('item-container').addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target)
})

document.getElementById('add-btn').addEventListener('click', function () {
    const p = document.createElement('p');
    p.innerText = 'new item added';
    p.classList.add('item');
    const itemContainer = document.getElementById('item-container');
    itemContainer.appendChild(p);
})

