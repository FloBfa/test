
alert("cookie==" + document.cookie)
let x = document.cookie;
let getting = browser.cookies.get(
  details                // object
)
alert("blooooo")
document.cookie = "username=Null Byte";
document.write(document.cookie);
document.cookie = "username=Johnny";
document.write(document.cookie);
