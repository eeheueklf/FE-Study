document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    const window = document.getElementById('window');
    let reset = false;
    let oper = false;

    //window에 클릭한 값을 보여준다
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let value = button.textContent;
            let currentText = window.textContent;

            if (value === '=') { // 결과값 출력
                reset = true;
                try {
                    let result = eval(window.textContent);
                    window.textContent = result;
                } catch (error) {
                    window.textContent = 'Error';
                }
            }
            else{
                // AC 초기화
                if (value === 'AC') {
                    window.textContent = '0';
                } else if (value === 'del') { // del 지우기
                    if (currentText.length > 1) {
                        window.textContent = currentText.slice(0, -1);
                    } else {
                        window.textContent = '0';
                    }
                } else if(value === '+' || value === '-' || value === '*' || value === '/' || value === '%') {
                    // oper 두번 연속 입력되면 마지막 oper만 표시
                    if(oper){
                        window.textContent = currentText.slice(0, -1);
                    }
                    window.textContent += value;
                    oper = true;
                }
                else {
                    oper=false;
                    if (reset || window.textContent === '0' || window.textContent === 'Error') {
                        window.textContent = value;
                    } else {
                        window.textContent += value;
                    }
                }
                reset = false;
            }
        });
    });
});