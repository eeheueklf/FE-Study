document.addEventListener("DOMContentLoaded", function() {
    const addPlanButton = document.querySelector('.addPlan');
    const todoList = document.querySelector('.todoList');
    const dateElements = document.querySelectorAll('.date');

    const dates = [];
    
    for (let i = 0; i < 7; i++) {
        const date = new Date();
        //날짜를 다음 날짜로 수정함
        date.setDate(date.getDate() + i);

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear().toString().slice(2); // 연도 마지막 두 자리만 표시(24년)
        dates.push(`${year}년 ${month}월 ${day}일`);
    }

    dateElements.forEach((element, index) => {
        element.textContent = dates[index];
    });

    // 새로운 할 일 항목 추가

    function addTodo() {
        const todoDiv = document.createElement('div');
        todoDiv.className = 'todo';
        todoDiv.innerHTML = '<input type="checkbox"><input type="text" placeholder=" 할 일">';
        todoList.appendChild(todoDiv);
    }

    // 버튼 클릭 이벤트 리스너
    addPlanButton.addEventListener('click', addTodo);
});
