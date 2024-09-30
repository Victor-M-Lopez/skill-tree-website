let exitBtn = document.querySelector('.exit_btn');
let exitBtn2 = document.querySelector('.exit_btn-2');

let project1 = document.getElementById('project_1');
let completeBtn = document.getElementById('complete_btn');
let node1 = document.getElementById('project-1');
let line1 = document.getElementById('line-1');
let line2 = document.getElementById('line-2');

let completeBtn2 = document.getElementById('complete_btn-2');
let node2 = document.getElementById('project-2');
let project2 = document.getElementById('project_2');
let line3 = document.getElementById('line-3');

node1.addEventListener('click', function () {
	project1.classList.add('show');
	project1.classList.remove('no-show');
	project1.style.height = '500px';
	project1.style.overflow = 'scroll';
});

exitBtn.addEventListener('click', function () {
	project1.style.height = '100px';
	project1.classList.add('no-show');
	project1.classList.remove('show');
	project1.style.overflow = 'hidden';
});

node1.addEventListener('mouseover', function () {
	project1.classList.toggle('show');
});

node1.addEventListener('mouseout', function () {
	project1.classList.toggle('show');
});

completeBtn.addEventListener('click', function () {
	project1.classList.add('no-show');
	project1.classList.remove('show');
	node1.style.fill = 'yellow';
	line1.style.stroke = 'yellow';
	line2.style.stroke = 'yellow';
});

// node 2
exitBtn2.addEventListener('click', function () {
	project2.style.height = '100px';
	project2.classList.add('no-show');
	project2.classList.remove('show');
	project2.style.overflow = 'scroll';
});

node2.addEventListener('click', function () {
	project2.classList.add('show');
	project2.classList.remove('no-show');
	project2.style.height = '500px';
	project2.style.overflow = 'scroll';
});

node2.addEventListener('mouseover', function () {
	project2.classList.toggle('show');
});

node2.addEventListener('mouseout', function () {
	project2.classList.toggle('show');
});

completeBtn2.addEventListener('click', function () {
	project2.classList.add('no-show');
	project2.classList.remove('show');
	node2.style.fill = 'yellow';
	line3.style.stroke = 'yellow';
});
