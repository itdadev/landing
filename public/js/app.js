// const contactForm = document.querySelector('.recruitForm');
// const name = document.querySelector('#name');
// const phone = document.querySelector('#phone');
// const email = document.querySelector('#email');
// const files = document.querySelector('#files');
// const content = document.querySelector('#content');
// const apply = document.querySelectorAll('input[name="apply"]');

// contactForm.addEventListener('submit', (e) => {
//   e.preventDefault();


//   function radioValue() {
//     var apply_length = apply.length;

//     for (var i = 0; i < apply_length; i++) {
//       var applyNode = apply[i];

//       if (applyNode.checked == true) {

//         let formData = {
//           name: name.value,
//           phone: phone.value,
//           email: email.value,
//           apply: applyNode.value,
//           files: files.value,
//           content: content.value,
//         }
      
//         console.log(formData);
      
//         let xhr = new XMLHttpRequest();
      
//         xhr.open('POST', '/');
//         xhr.setRequestHeader('content-type', 'application/json');
//         xhr.onload = function () {
//           console.log(xhr.responseText);
      
//           if (xhr.responseText == 'success') {
//             alert('지원해주셔서 감사합니다!');
//             name.value = '';
//             phone.value = '';
//             email.value = '';
//             applyNode.value = '';
//             files.value = '';
//             content.value = '';
//           } else {
//             alert('지원 양식 전송 실패');
//           }
//         }
      
//         xhr.send(JSON.stringify(formData));
      
//       }
//     }
//   }

//   radioValue();

//   // console.log(applyNode.value);

// });