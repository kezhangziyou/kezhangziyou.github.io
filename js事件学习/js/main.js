//抓取 按钮 和 标题 的引用并将其存放在变量里：
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	//函数包含了一个 prompt() 函数， 会弹出一个对话框， 只不过 prompt() 需要用户输入数据,
	//用户点击 OK 后将数据存储在变量里
	localStorage.setItem('name', myName);
	//localStorage 的 setItem() 函数来创建并将数据存储在 'name'参数里，将数据存储在浏览器里以供后续调用
	myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}
if (!localStorage.getItem('name')) {//如果name不存在，运行setUserName()函数
	setUserName();
} else {
	var storedName = localStorage.getItem('name');//存在直接提取即可。
	myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}
//点击时， setUserName() 函数就会运行,点击按钮来设置新的 name 。
myButton.onclick = function() {
	setUserName();
}