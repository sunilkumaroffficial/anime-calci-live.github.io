var btn = document.querySelectorAll('.btn');
var screen = document.getElementById('screen');

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', (e) => {
        var btnText = e.target.innerText;

        if (btnText == "CE") {
            btnText = "";
            screen.value = screen.value.substr(0, screen.value.length - 1);
        }

        if (btnText == "÷") {
            btnText = "/";
        }

        if (btnText == "sin") {
            btnText = "";
            screen.value = Math.sin(screen.value);
        }

        if (btnText == "π") {
            btnText = "3.14";
        }

        // Applying factorial formula
        if (btnText == "X!") {
            btnText = "";

            var i, num, f;

            f = 1;

            num = screen.value;

            for (i = 1; i <= num; i++) {
                f = f * i;
            }

            i = i - 1;

            screen.value = f;
        }

        if (btnText == "X") {
            btnText = "*";
        }

        if (btnText == "cos") {
            btnText = '';
            screen.value = Math.cos(screen.value);
        }

        if (btnText == "log") {
            btnText = '';
            screen.value = Math.log(screen.value);
        }

        if (btnText == "e") {
            btnText = '2.718281828459045';
        }

        if (btnText == "tan") {
            btnText = '';
            screen.value = Math.tan(screen.value);
        }

        if (btnText == "xY") {
            btnText = '';
            screen.value = Math.pow(screen.value);
        }

        if (btnText == "√") {
            btnText = '';
            screen.value = Math.sqrt(screen.value);
        }

        screen.value += btnText;
    })
}

// caclulate screen value
var evalBtn = document.querySelector('.evalBtn')
evalBtn.addEventListener('click', () => {
    screen.value = eval(screen.value);
})