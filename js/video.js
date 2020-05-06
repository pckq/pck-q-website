function checkPassword(ele) {
  console.log(ele);
  let nonce = "pck-q";
  let predefinedHashed =
    "9e95549bf2ae38e8620821490bfa70ebada81abe541c9ee6a52624f884f349dd";
  console.log("checking ...");

  let pwd = ele.previousSibling.previousElementSibling.value;
  console.log("PWD: ", pwd);

  let hashed = CryptoJS.SHA256(pwd + nonce);
  console.log("Hashed pwd: ", hashed);

  if (hashed == predefinedHashed) {
    let parentNode = ele.parentNode.parentNode.parentNode;
    parentNode.style.display = "none";
  } else {
    let placeHolder = ele.previousSibling.previousElementSibling;
    placeHolder.value = "";
    placeHolder.placeholder = "  Wrong password";
    console.log("wrong password");
  }
}

window.onload = function () {
  document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    false
  );
  document.addEventListener(
    "keydown",
    function (e) {
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
      }
      if (
        e.keyCode == 83 &&
        (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
      ) {
        disabledEvent(e);
      }
      if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
      }
      if (event.keyCode == 123) {
        disabledEvent(e);
      }
    },
    false
  );

  function disabledEvent(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    } else if (window.event) {
      window.event.cancelBubble = true;
    }
    e.preventDefault();
    return false;
  }
};
