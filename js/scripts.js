'use strict';

//hermetyzacja
(function(){
    //konstruktor
    function Calculator(button, result) {
        this._button = document.querySelectorAll(button);
        this._resPlace = document.querySelector(result);
        this._assignEvents(this._button);
    }
    Calculator.prototype._assignEvents = function(button){ 
        button.forEach(this._click, this);
    }

    Calculator.prototype._click = function(button){
        button.addEventListener('click', this._calculate.bind(this));
    }
    Calculator.prototype._calculate = function(button){
        var buttonValue = button.target.value;
        if (buttonValue === 'C') {
            this._resPlace.value = '';
        }
        else if (buttonValue === '=') {
            this._resPlace.value = eval(this._resPlace.value);
        }
        else {
            this._resPlace.value += buttonValue;
        }
        return this._resPlace.value;   
    } 
    var obliczenia = new Calculator ('input[type ="button"]', '#result');
})();

// to jest przerobiony kalkulator BMI