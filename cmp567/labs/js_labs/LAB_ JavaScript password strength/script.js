// Your solution goes here 
function isStrongPassword(password){
    let p_len = password.length >= 8;
    let pw = password.indexOf("password") <0;
    let uc = false;
    for(char of password){
        let ascii_num = char.charCodeAt(0)
        if(ascii_num >64 && ascii_num <91){
            uc = true;
        }
        }
    if(p_len && pw && uc){
        return true;
    }else{
        return false;
    }
}