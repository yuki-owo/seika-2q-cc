document.getElementById('sendBtn').addEventListener('click', function(event) {
	let formArray = [];
	let errors = false;
	let firstErrorElement = null;
  
	let enterRadio = document.getElementById('enterRadio');
	let inqRadio = document.getElementById('inqRadio');
	let radioValue = enterRadio.checked ? enterRadio.value : inqRadio.checked ? inqRadio.value : '';
	let gradeValue = document.getElementById('grade').value;
	let facultyValue = document.getElementById('faculty').value;
	let nameValue = document.getElementById('name').value;
	let emailValue = document.getElementById('email').value;
	let contentValue = document.getElementById('content').value;
  
	let fields = [
	    {element: 'enterRadio', value: radioValue, message: "'入部きぼう' か '問い合わせ' を選んでください", errorElement: 'err-radio'},
	    {element: 'grade', value: gradeValue, message: "学年を選んでください", errorElement: 'err-grade'},
	    {element: 'faculty', value: facultyValue, message: "学部を選んでください", errorElement: 'err-faculty'},
	    {element: 'name', value: nameValue, message: "名前を入力してください", errorElement: 'err-name'},
	    {element: 'email', value: emailValue, message: "メールアドレスを入力してください", errorElement: 'err-mail'},
	];
  
	for (let field of fields) {
	    let element = document.getElementById(field.element);
	    let errorElement = document.getElementById(field.errorElement);
	    element.classList.remove('invalid');
	    errorElement.innerHTML = '';
	    if (!field.value) {
		  element.classList.add('invalid');
		  errorElement.innerHTML = field.message;
		  errors = true;
		  if (firstErrorElement == null) {
			firstErrorElement = element;
		  }
	    }
	}
  
	let email = document.getElementById('email');
	let regex = /^\S+@\S+\.\S+$/;
	if (!regex.test(email.value)) {
	    email.classList.add('invalid');
	    document.getElementById('err-mail').innerHTML = "有効なメールアドレスを入力してください";
	    errors = true;
	    if (firstErrorElement == null) {
		  firstErrorElement = email;
	    }
	}
  
	if (errors) {
	    firstErrorElement.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
	    event.preventDefault();
	} else {
	    formArray.push({
		  'type': radioValue,
		  'grade': gradeValue,
		  'faculty': facultyValue,
		  'name': nameValue,
		  'email': emailValue,
		  'content': contentValue
	    });
  
	    console.log(formArray);
	}
  });
  