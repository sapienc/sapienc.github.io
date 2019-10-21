window.onload = function() {
    let list_block = document.getElementById('list-block');

    for(let i = 0; i < 10; i++) {
        let list_elem = document.createElement('li');
        list_elem.className = "list-item";
        list_block.appendChild(list_elem);
        list_elem.innerHTML = "Elem № " + (i + 1);
    }
};