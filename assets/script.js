const sectionLogin = document.getElementById("login__sec");
const sectionRegister = document.getElementById("register");
const sectionDescription = document.getElementById("description");
const sectionLoginPanel = document.getElementById("login__panel");
const buttonLoginHeader = document.getElementById("login__button");
const buttonRegisterHeader = document.getElementById("register__button");
const formLogin = document.getElementById("content__login");
const formRegister = document.getElementById("content__register");
const buttonLogin = document.getElementById("submit__login");
const buttonRegister = document.getElementById("submit__register");
// Funções que controlam as sessões.
function showLogin() {
    sectionRegister.style.top = "-200vh";
    sectionLogin.style.top = "0";
}
document.getElementById("login__button").addEventListener("click", showLogin);

function hideLogin() {
    sectionLogin.style.top = "-200vh";
}
document.getElementById("hide__login").addEventListener("click", hideLogin);

function showRegister() {
    sectionRegister.style.top = "0";
    sectionLogin.style.top = "-200vh";
}
document.getElementById("register__button").addEventListener("click", showRegister);

function hideRegister() {
    sectionRegister.style.top = "-200vh";
}
document.getElementById("hide__register").addEventListener("click", hideRegister);

function exitPanel() {
    sectionLoginPanel.style.top = "-200vh";
    sectionDescription.style.top = "30%";
    buttonLoginHeader.style.display = "";
        buttonRegisterHeader.style.display = "";
    document.location.reload();
}
// Animações de entrada dos formulários
function openForm() {
    formLogin.classList.add("animate__fadeInDownBig");
    formRegister.classList.add("animate__fadeInDownBig");
}

function closeForm() {
    formLogin.classList.remove("animate__fadeInDownBig");
    formRegister.classList.remove("animate__fadeInDownBig");
}



// Clique no background do form login para fechar.
window.addEventListener('mouseup',function(backLogin){
    if(backLogin.target == login__sec && backLogin.target.parentNode != login__sec){
        hideLogin();
        closeForm();
    }
}); 
// Clique no background do form cadastro para fechar.
window.addEventListener('mouseup',function(backRegister){
    if(backRegister.target == register && backRegister.target.parentNode != register){
        hideRegister();
        closeForm();
    }
}); 
// Pegando usuário e senha através da url do cadastro.
var url = window.location.href;
var urlLocal = new URL(url);
var registerMail = urlLocal.searchParams.get("email__register");
var registerPass = urlLocal.searchParams.get("password__register");
console.log(registerMail);
console.log(registerPass);
// Verificando digitação correta no cadastro.
function verifyRegister(e) {
    var emailR = document.getElementById("email__register").value;
    var passR = document.getElementById("password__register").value;
    var passC = document.getElementById("password__confirm").value;
    var submit = false;
    if(emailR == ""){
        alert("Digite um e-mail.");
    }else if(emailR.indexOf("@")==-1 || emailR.indexOf(".")==-1){
        alert("Digite um e-mail válido.");
    }else if(passR == ""){
        alert("Digite uma senha.");
    }else if(passC == ""){
        alert("Confirme sua senha.");
    }else if(passC !== passR){
        alert("As senhas precisam ser iguais.");
    }else{
        alert("Cadastro realizado com sucesso!");
        submit = true;
    }
    if(submit === false) {
        e.preventDefault();
    }
}
document.getElementById("submit__register").addEventListener("click", verifyRegister);
// Verificando usuário e senha no login.
function checkLogin() {
    var emailLogin = document.getElementById("email__login").value;
    var passLogin = document.getElementById("password__login").value;
    if(emailLogin == ""){
        alert("Digite seu e-mail.");
    }else if(passLogin == "") {
        alert("Digite sua senha.");
    }else if(emailLogin === registerMail && passLogin === registerPass){
        alert("Login realizado com sucesso!");
        sectionLoginPanel.style.top = "0";
        buttonLoginHeader.style.display = "none";
        buttonRegisterHeader.style.display = "none";
        sectionDescription.style.top = "-200vh";
        hideLogin();
    }else{
        alert("Usuário ou senha não encontrados.");
    }
}
document.getElementById("submit__login").addEventListener("click", checkLogin);
// Animações form login
function showLabelMail() {
    var labelMail = document.getElementById("label__email");
    var inputMail = document.getElementById("email__login");
    labelMail.style.display = "block";
    labelMail.classList.add("animate__fadeInUp");
    inputMail.classList.add("animate__fadeInDown");
    inputMail.classList.remove("animate__fadeInUp");
    inputMail.setAttribute("placeholder", "");
    buttonLogin.style.display = "block";
    buttonLogin.classList.add("animate__fadeInUp");
}

function hideLabelMail() {
    var labelMail = document.getElementById("label__email");
    var inputMail = document.getElementById("email__login");
    labelMail.style.display = "none";
    labelMail.classList.remove("animate__fadeInUp");
    inputMail.classList.remove("animate__fadeInDown");
    inputMail.classList.add("animate__fadeInUp");
    inputMail.setAttribute("placeholder", "Informe seu e-mail...");
}

function showLabelPass() {
    var labelPass = document.getElementById("label__pass");
    var inputPass = document.getElementById("password__login");
    labelPass.style.display = "block";
    labelPass.classList.add("animate__fadeInUp");
    inputPass.classList.add("animate__fadeInDown");
    inputPass.classList.remove("animate__fadeInUp");
    inputPass.setAttribute("placeholder", "");
}

function hideLabelPass() {
    var labelPass = document.getElementById("label__pass");
    var inputPass = document.getElementById("password__login");
    labelPass.style.display = "none";
    labelPass.classList.remove("animate__fadeInUp");
    inputPass.classList.remove("animate__fadeInDown");
    inputPass.classList.add("animate__fadeInUp");
    inputPass.setAttribute("placeholder", "Informe sua senha...");
}
// Animações form cadastro
function showLabelMailR() {
    var labelMail = document.getElementById("label__email__r");
    var inputMail = document.getElementById("email__register");
    labelMail.style.display = "block";
    labelMail.classList.add("animate__fadeInUp");
    inputMail.classList.add("animate__fadeInDown");
    inputMail.classList.remove("animate__fadeInUp");
    inputMail.setAttribute("placeholder", "");
    buttonRegister.style.display = "block";
    buttonRegister.classList.add("animate__fadeInUp");
}

function hideLabelMailR() {
    var labelMail = document.getElementById("label__email__r");
    var inputMail = document.getElementById("email__register");
    labelMail.style.display = "none";
    labelMail.classList.remove("animate__fadeInUp");
    inputMail.classList.remove("animate__fadeInDown");
    inputMail.classList.add("animate__fadeInUp");
    inputMail.setAttribute("placeholder", "Informe seu e-mail...");
}

function showLabelPassR() {
    var labelPass = document.getElementById("label__pass__r");
    var inputPass = document.getElementById("password__register");
    labelPass.style.display = "block";
    labelPass.classList.add("animate__fadeInUp");
    inputPass.classList.add("animate__fadeInDown");
    inputPass.classList.remove("animate__fadeInUp");
    inputPass.setAttribute("placeholder", "");
}

function hideLabelPassR() {
    var labelPass = document.getElementById("label__pass__r");
    var inputPass = document.getElementById("password__register");
    labelPass.style.display = "none";
    labelPass.classList.remove("animate__fadeInUp");
    inputPass.classList.remove("animate__fadeInDown");
    inputPass.classList.add("animate__fadeInUp");
    inputPass.setAttribute("placeholder", "Informe sua senha...");
}

function showLabelPassRc() {
    var labelPassR = document.getElementById("label__pass__rc");
    var inputPassR = document.getElementById("password__confirm");
    labelPassR.style.display = "block";
    labelPassR.classList.add("animate__fadeInUp");
    inputPassR.classList.add("animate__fadeInDown");
    inputPassR.classList.remove("animate__fadeInUp");
    inputPassR.setAttribute("placeholder", "");
}

function hideLabelPassRc() {
    var labelPassR = document.getElementById("label__pass__rc");
    var inputPassR = document.getElementById("password__confirm");
    labelPassR.style.display = "none";
    labelPassR.classList.remove("animate__fadeInUp");
    inputPassR.classList.remove("animate__fadeInDown");
    inputPassR.classList.add("animate__fadeInUp");
    inputPassR.setAttribute("placeholder", "Informe sua senha...");
}
