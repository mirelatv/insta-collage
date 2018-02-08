'use strict';

var begin = function begin() {

    //ondragover :funcion 1 previniendo el comportamiento de arrastar un elemento que  no es una  caracteristica comun
    var allowDrop = function allowDrop(ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = 'copy';
        return false;
    };

    // ondragstar:function 2 obteniendo o arrastrando el elemento 
    var drag = function drag(ev) {
        ev.dataTransfer.setData('text', ev.target.id);
    };

    //ondrop:fucntion 3 soltando el elemento

    var drop = function drop(ev) {
        ev.preventDefault();

        var data = ev.dataTransfer.getData('text');
        ev.target.appendChild(document.getElementById(data));
    };

    document.addEventListener('dragstart', drag);
    document.addEventListener('drop', drop);
    document.addEventListener('dragover', allowDrop);
};

window.addEventListener('load', begin);