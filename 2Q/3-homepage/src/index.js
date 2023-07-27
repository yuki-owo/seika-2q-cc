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

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper1 = new Swiper('.swiper-1', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination-1',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar-1',
  },
});

let titleContainer1 = document.getElementById('swiper-title-1');
let titleElement1 = document.createTextNode('スライド' + swiper1.realIndex + 'を表示しています。')
titleContainer1.appendChild(titleElement1);

swiper1.on('slideChange', function () {
  console.log('slide changed');
  console.log(swiper1.realIndex);
  titleElement1.remove();
  titleElement1 = document.createTextNode('スライド' + swiper1.realIndex + 'を表示しています。')
  titleContainer1.appendChild(titleElement1);
});

const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination-2',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar-2',
  },
});

let titles = [
  "板チョコのイラスト（ルビー）",
  "板チョコのイラスト（ミルク）",
  "板チョコのイラスト（ホワイト）",
  "板チョコのイラスト（ダーク）",
]

let titleContainer2 = document.getElementById('swiper-title-2');
let titleElement2 = document.createTextNode(titles[swiper2.realIndex])
titleContainer2.appendChild(titleElement2);

swiper2.on('slideChange', function () {
  console.log('slide changed');
  console.log(swiper2.activeIndex);
  titleElement2.remove();
  titleElement2 = document.createTextNode(titles[swiper2.realIndex])
  titleContainer2.appendChild(titleElement2);
});