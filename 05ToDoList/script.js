document.addEventListener("DOMContentLoaded", function() {
    const addPlanButton = document.querySelector('.addPlan');
    const todoList = document.querySelector('.todoList');
    const currentDateElem = document.getElementById('currentDate');

    //오늘 날짜 표시
    const date = new Date();
    let day = + date.getDate(); 
    let month = date.getMonth() + 1;
    let year = date.getFullYear().toString().slice(2); // 연도 마지막 두 자리만 표시(24년)
    let currentDate = `${year}년 ${month}월 ${day}일`;
    currentDateElem.textContent = currentDate;

    // 새로운 할 일 항목 추가 함수

    function addTodo() {
        const todoDiv = document.createElement('div');
        todoDiv.className = 'todo';
        todoDiv.innerHTML = '<input type="checkbox"><input type="text" placeholder=" 할 일">';
        todoList.appendChild(todoDiv);
    }

    // 버튼 클릭 이벤트 리스너
    addPlanButton.addEventListener('click', addTodo);
});
