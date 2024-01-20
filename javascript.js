let message = prompt("hello, please enter your password that zander gave you")

switch(message) {
    case 'S293821':
    location.assign("./pages/Sanedafox.html")
    break;

    case 'M596921':
    location.assign("./pages/Minx.html")
    break;

    case 'F381928':
        location.assign("./pages/Fooxy.html")
    break;

    case 'Z493819':
        location.assign("./pages/Zero.html")
    break;

    case 'K283726':
        location.assign("./pages/Kieco.html")
    break;

    case 'V584923':
        location.assign("./pages/Vivian.html")
    break;

    default:
        alert("wrong password... please try again")
}


