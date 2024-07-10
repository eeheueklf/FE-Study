document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    const window = document.getElementById('window');

    //window에 클릭한 값을 보여준다
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let value = button.textContent;
            let preValue

            if (value === 'AC') {
                window.textContent = '0';
            } else if (value === 'del') {
                let currentText = window.textContent;
                if (currentText.length > 1) {
                    window.textContent = currentText.slice(0, -1);
                } else {
                    window.textContent = '0';
                }
            } else if (value === '=') {
                try {
                    let result = eval(window.textContent);
                    window.textContent = result;
                } catch (error) {
                    window.textContent = 'Error';
                }
            } else {
                if (window.textContent === '0' || window.textContent === 'Error') {
                    window.textContent = value;
                } else {
                    if(preValue|| preValue === '='){
                        window.textContent = value;
                    }
                    window.textContent += value;
                }
            }
            preValue = value;

        });
    });
});