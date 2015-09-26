function isPalindrome(p) {
    var w = p.replace(/\s/g,"");

if (w == w.split('').reverse().join('')) {
        alert(w + ' is palindrome.');
    }
    else {
        alert(w + ' is not palindrome.');
    }
}

el = document.getElementById('form_id');
console.log(el);
 el.onsubmit = handlerSubmmit;

function handlerSubmmit(){
    isPalindrome(document.getElementById('my_input').value);
    return false;
}