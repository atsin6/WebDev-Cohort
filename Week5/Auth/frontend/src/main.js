import "./style.css";
import "./styles/signup.css";
import "./styles/navbar.css";

import { clearErrorMessagesHandler } from "./util/uiHandler";
import { renderHomepage } from "./components/homepage";
import { handleSignupSubmit } from "./handlers/signupSubmitHandler";
import { renderNavbar } from "./components/navbar";

renderNavbar();
renderHomepage();
clearErrorMessagesHandler();

const form = document.getElementById("myForm");
handleSignupSubmit(form);
