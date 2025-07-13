export function renderNavbar() {
  const navbar = document.querySelector("#navbar");

  let title = document.createElement("h1");
  title.innerHTML = "Taskify.Do";
  title.id = "title";

  let navigation = document.createElement("div");
  let signinBtn = document.createElement("btn");
  signinBtn.textContent = "Sign In";
  signinBtn.className = "btn";
  signinBtn.type = "button";
  signinBtn.id = "signinBtn";

  navigation.append(signinBtn);

  navbar.append(title, navigation);
  return navbar;
}
