document.addEventListener('DOMContentLoaded', function () {






    // listy z parametrami do wyboru
    var ulArray = document.getElementsByClassName('list_panel');

    var ul1 = ulArray[0];

    var ul2 = ulArray[1];

    var ul3 = ulArray[2];


    // etykiety do list
    var listLabelArray = document.getElementsByClassName('list_label');

    var listLabel1 = listLabelArray[0];

    var listLabel2 = listLabelArray[1];

    var listLabel3 = listLabelArray[2];



    // drop down list

    var arrows = document.querySelectorAll('.list_arrow');

    //lista 1
    arrows[0].addEventListener('click', function() {

        ul2.classList.remove('visible');
        ul3.classList.remove('visible');

        ul1.classList.toggle('visible');

    });

    //lista 2
    arrows[1].addEventListener('click', function() {

        ul1.classList.remove('visible');
        ul3.classList.remove('visible');

        ul2.classList.toggle('visible');

    });

    //lista 3
    arrows[2].addEventListener('click', function() {

        ul1.classList.remove('visible');
        ul2.classList.remove('visible');

        ul3.classList.toggle('visible');

    });




    var title = document.querySelectorAll('.title');

    var titleName = title[0];

    var titleValue = title[1];


    var color = document.querySelectorAll('.color');

    var colorName = color[0];

    var colorValue = color[1];

    var pattern = document.querySelectorAll('.pattern');

    var patternName = pattern[0];

    var patternValue = pattern[1];

    var transportData = document.querySelectorAll('.transport');

    var transportDescription = transportData[0];

    var transportValue = transportData[1];

    var transportLabel = document.querySelector('.checkbox label');

    var sum = 0;

    var sumDiv = document.querySelector('div.sum');

    sumDiv.innerText = sum + ' zł';

    var chairPrice = 0;
    var colorPrice = 0;
    var patternPrice = 0;
    var transportPrice = 0;


    // zdjęcie wybranego krzesła

    var trackChairName = "";
    var trackColor = "";
    var trackPattern = "";
    var track = "";

    var chairImage = document.getElementById('choosen_chair');


    var button = document.querySelector('.green_button');
    var alert = document.querySelector('.alert');


    // wybór wartości z list

    // lista nr 1 - krzesła

    var listPanelLi1 = ul1.querySelectorAll('li');

    for (var i=0; i<3; i++) {

        listPanelLi1[i].addEventListener('click', function() {

           alert.innerText = "";

           ul1.classList.remove('visible');

           var chairName = this.innerText;

           listLabel1.innerText = chairName;
           listLabel1.style.color = '#24baa0';

           chairPrice = parseInt(this.dataset.price);

           titleName.innerText = 'Chair ' + chairName;

           titleValue.innerText = chairPrice;

           sum = chairPrice + colorPrice + patternPrice + transportPrice;

           sumDiv.innerText = sum + ' zł'

           trackChairName = chairName.toLowerCase();

           if (trackColor === "") {
               trackColor = 'black';
           }
           if (trackPattern === "") {
               trackPattern = 'material';
           }

           track = "url(images/" + trackChairName + "_" + trackColor + "_" + trackPattern + ".png" + ")";
           chairImage.innerText = "";
           chairImage.style.backgroundImage = track;

        });
    }



    // lista nr 2 - kolory


    var listPanelLi2 = ul2.querySelectorAll('li');

    for (var i=0; i<3; i++) {

        listPanelLi2[i].addEventListener('click', function() {

            alert.innerText = "";

            ul2.classList.remove('visible');

            if ( trackChairName === "") {
                chairImage.innerText = "Najpierw proszę wybrać model krzesła";
                chairImage.style.color = "#24baa0";
            }  else         {

                var colorNameChoosen = this.innerText;

                listLabel2.innerText = colorNameChoosen;
                listLabel2.style.color = '#24baa0';

                colorPrice = parseInt(this.dataset.price);

                colorName.innerText = colorNameChoosen;

                colorValue.innerText = colorPrice;

                sum = chairPrice + colorPrice + patternPrice + transportPrice;

                sumDiv.innerText = sum + ' zł'

                trackColor = this.dataset.color;

                track = "url(images/" + trackChairName + "_" + trackColor + "_" + trackPattern + ".png" + ")";

                chairImage.style.backgroundImage = track;

            }


        });
    }

    // lista nr 3 - tkanina


    var listPanelLi3 = ul3.querySelectorAll('li');

    for (var i=0; i<2; i++) {

        listPanelLi3[i].addEventListener('click', function() {

            alert.innerText = "";

            ul3.classList.remove('visible');

            if ( trackChairName === "") {
                chairImage.innerText = "Najpierw proszę wybrać model krzesła";
                chairImage.style.color = '#24baa0';
            } else {

                var patternChoosen = this.innerText;

                listLabel3.innerText = patternChoosen;
                listLabel3.style.color = '#24baa0';

                patternPrice = parseInt(this.dataset.price);

                patternName.innerText = patternChoosen;

                patternValue.innerText = patternPrice;

                sum = chairPrice + colorPrice + patternPrice + transportPrice;

                sumDiv.innerText = sum + ' zł';

                trackPattern = this.dataset.pattern;

                track = "url(images/" + trackChairName + "_" + trackColor + "_" + trackPattern + ".png" + ")";

                chairImage.style.backgroundImage = track;

            }


        });
    }


    // transport

    var checkboxTransport = document.getElementById('transport');



    checkboxTransport.addEventListener('click', function() {

       if (checkboxTransport.checked) {

           transportPrice = parseInt(checkboxTransport.dataset.transportPrice);

           sum = chairPrice + colorPrice + patternPrice + transportPrice;

           sumDiv.innerText = sum + ' zł';

           transportDescription.innerText = 'transport';

           transportValue.innerText = '200';

           transportLabel.style.color = '#24baa0';


       }  else {

           transportPrice = 0;

           sum = chairPrice + colorPrice + patternPrice + transportPrice;

           sumDiv.innerText = sum + ' zł';

           transportDescription.innerText = "";

           transportValue.innerText = "";

           transportLabel.style.color = "#cecece";
       }


    });



    // złożenie zamówienia



    button.addEventListener('click', function(event) {

       if ( (trackChairName === "") || (colorName.innerText ==="") || (patternName.innerText==="")) {

           event.preventDefault();
           alert.innerText = "Proszę wybrać wszystkie 3 parametry: model + kolor + materiał";

       }
    })







});