function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validateForm(ID) {
  const emailUser = document.getElementById("email-user");

  let IDWP = [
    "id-user",
    "name-user",
    "email-user",
    "address-user",
    "select-loai-nguoi-dung",
  ];

  let isValid = true;
  let elementWP = IDWP.map((item) => document.getElementById(`${item}`));

  for (var i = 0; i < IDWP.length; i++) {
    if (!elementWP[i].value || elementWP[i].value === "null") {
      console.log(elementWP[i].value);
      alert("Bạn nhập thiếu trường!");
      isValid = false;
      break;
    }
  }

  if (emailUser.value.trim() === "") {
    alert("Vui lòng nhập email!");
    isValid = false;
  } else if (!validateEmail(emailUser.value.trim())) {
    alert("Email không hợp lệ!");
    isValid = false;
  }

  if (Array.isArray(ID) && ID.length > 0) {
    let element = ID.map((item) => document.getElementById(`${item}`));
    for (var i = 0; i < ID.length; i++) {
      if (!element[i].value) {
        alert("Bạn nhập thiếu trường!");
        isValid = false;
        break;
      }
    }
  }

  return isValid;
}
