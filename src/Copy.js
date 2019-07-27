//Copying password to clipboard
const CopyPassword = () => {
    const input = document.getElementById("password");
    if(input.value === '') {
        alert("Generate password first!");
    }
    input.select();
    document.execCommand("copy");
  }

  export default CopyPassword;