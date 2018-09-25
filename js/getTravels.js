xhr = new XMLHttpRequest();

xhr.onload = function () {
    if(xhr.status === 200){
        var responseObject = JSON.parse(xhr.responseText);
        var content = '';

        for(var i = 0; i < responseObject.destination.length; i++) {
            content +=
                '<a href="visasida.html" class="info">\n' +
                '<article>\n' +
                '<h1>' + responseObject.destination[i].name + '</h1>\n' +
                '<img src="img/small/' + responseObject.destination[i].img + '" alt="' + responseObject.destination[i].name +'">\n';
                if(responseObject.destination[i].popular === "true"){
                    content += '<div class="popular">Populär!</div>';
                }
                content += '<div class="infoText">\n' +
                 responseObject.destination[i].text +
                '</div>\n' +
                '</article>\n' +
                '</a>';
        }
        document.getElementById('main').innerHTML = content;
    }
}

xhr.open('GET', 'data/resemal.json', true);
xhr.send(null);