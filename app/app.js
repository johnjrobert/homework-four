function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#/", "");
  let homeID = "home";

  if (pageID == "") {
    pageID = homeID;
  } else {
    pageID = pageID;
  }

  MODEL.navToPage(pageID);
}

function initListeners() {
  route();
  $(window).on("hashchange", route);
}

function login() {
  let login = "admin";
  let password = "password";
  $(".login-nav").on("click", () => {
    $(".login").toggle();
  });
}

function loginSucc() {
  let userVal = $("username").val();
  console.log(userVal);
  // if()
  $(".sign-in-button").on("click", () => {
    alert("You are signed in!");
    $(".login").hide();
    document.getElementById("nav-change").innerHTML = "";
  });
}

//reads page, loads everything to be used.
$(document).ready(() => {
  route();
  initListeners();
  login();
  loginSucc();
});
