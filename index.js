window.addEventListener("load", () => {
  const form = document.getElementById("form");
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const confirmpassword = document.getElementById("confirmpassword");
  const birthday = document.getElementById("birthday");

  // regEx
  const regFirstname = /^[A-Za-záéíóúñÁÉÍÓÚÑ]{3,16}$/;
  const regLastname = /^[A-Za-záéíóúñÁÉÍÓÚÑ]{3,16}$/;
  const regUsername = /^[\wáéíóúñÁÉÍÓÚÑa-zA-Z0-9]{3,16}$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
  });

  const checkInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();
    const birthdayValue = birthday.value.trim();

    const setErrorFor = (input, message) => {
      const inputParent = input.parentElement;
      const small = inputParent.querySelector("small");

      small.innerText = message;
      inputParent.classList.add("form-field", "error");
      inputParent.classList.remove("form-field", "success");
    };

    const setSuccessFor = (input) => {
      const inputParent = input.parentElement;
      const small = inputParent.querySelector("small");

      small.innerText = "";
      inputParent.classList.remove("error");
      inputParent.classList.add("success");
    };

    !regFirstname.test(firstnameValue)
      ? setErrorFor(firstname, "Username is not valid")
      : setSuccessFor(firstname);

    !regLastname.test(lastnameValue)
      ? setErrorFor(lastname, "The last name cannot be empty")
      : setSuccessFor(lastname);

    !regUsername.test(usernameValue)
      ? setErrorFor(username, "Username is not valid")
      : setSuccessFor(username);

    if (passwordValue === "") {
      setErrorFor(password, "Password cannot be blank");
    } else if (passwordValue.length < 8) {
      setErrorFor(password, "Password must be at least 8 characters.");
    } else {
      setSuccessFor(password);
    }

    if (confirmpasswordValue === "") {
      setErrorFor(confirmpassword, "Please confirm your password");
    } else if (passwordValue !== confirmpasswordValue) {
      setErrorFor(confirmpassword, "Passwords doesn't match");
    } else {
      setSuccessFor(confirmpassword);
    }

    if (birthdayValue === "") {
      setErrorFor(birthday, "Please enter your birthday");
    } else {
      const currentDate = new Date();
      const selectedDate = new Date(birthdayValue);

      selectedDate > currentDate
        ? setErrorFor(birthday, "Please enter a valid birthday")
        : setSuccessFor(birthday);
    }
  };
});
