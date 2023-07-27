let SignIn = false;
let count = 0;

while (SignIn == false){
	let x = window.prompt("パスワードを入力してください")
	if (x == "password"){
		window.alert("サインイン成功")
		SignIn = true;
	} else {
		window.alert("パスワードが異なります")
		count++
	}
	if (count > 4){
		window.alert("サインイン失敗")
		break
	}
}
console.log(SignIn);