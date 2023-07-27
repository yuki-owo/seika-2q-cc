const list = [];

function addlist(){
	let x = window.prompt("項目を入力してください")

	// list[list.length] = x;

	list[list.length] = "・" + x;
}

// function printlist(){
// 	for (let i = 0;i < list.length; i++){
// 		console.log("・"+list[i]);
// 	}
// }

function printlist(){
	console.log(list.join("\n"))
}