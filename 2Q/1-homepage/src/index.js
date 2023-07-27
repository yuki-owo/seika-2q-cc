const validator = new JustValidate(document.querySelector('#basic_form'));

validator
  .addField(document.querySelector('#basic_name'), [{
      rule: 'required',
	errorMessage: '必須入力項目です。',
    },{
      rule: 'minLength',
      value: 3,
	errorMessage: '3文字以上で入力してください。',
    },{
      rule: 'maxLength',
      value: 15,
	errorMessage: '最大入力文字数は15文字です。',
	},
  ])
  .addField(document.querySelector('#basic_email'), [{
      rule: 'required',
	errorMessage: '必須入力項目です。',
    },{
      rule: 'email',
	errorMessage: '形式が正しくありません。',
    },
  ])
  .addField(document.querySelector('#basic_password'), [{
      rule: 'required',
	errorMessage: '必須入力項目です。',
    },{
      rule: 'password',
	errorMessage: 'パスワードは8文字以上で入力してください。その際に数字を1文字以上含める必要があります。',
	},
  ])
  .addField(document.querySelector('#basic_age'), [{
      rule: 'required',
	errorMessage: '必須入力項目です。',
    },{
      rule: 'number',
	errorMessage: '数字で入力してください。',
    },{
      rule: 'minNumber',
      value: 18,
	errorMessage: '18以上の数字を入力してください。',
    },{
      rule: 'maxNumber',
      value: 150,
	errorMessage: '150以下の数字を入力してください。',
    },
	])
  .addField(document.querySelector('#basic_address'), [
	{
	  rule: 'required',
	  errorMessage: '必須入力項目です。',
	},
	])
	.onSuccess((event) =>{
		let formData = new FormData(event.target);
		console.log(formData.get("name"));
		console.log(formData.get("email"));
		console.log(formData.get("password"));
		console.log(formData.get("age"));
		console.log(formData.get("address"));
	});