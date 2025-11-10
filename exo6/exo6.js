function countVowels(str) {
    let count = 0
    const vowels = "aeiou"

    for (let i = 0; i<str.length; i++){
        if (vowels.includes(str[i].toLowerCase())){
            count++
        }
    }
    return count;
}
function countVowelsText() {
    let input = document.getElementById('stringInput').value;
    let vowelsCount = countVowels(input);
    document.getElementById('result').textContent="Nombre de voyelles : "+vowelsCount
}