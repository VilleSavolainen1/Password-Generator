//Creating a 24 character password from randomly choosen letters and symbols
function Create() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
              'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '@', '_', '.', '!', '"', '#', '%', '&', '/', '(', ')', '=', '?', '*', '^',
              'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
              'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let password = '';
    for(let i = 0; i < 24; i++){
    password += letters[Math.round(Math.random() * 75)];
    }
    document.getElementById("password").value = password;
  } 

  export default Create;