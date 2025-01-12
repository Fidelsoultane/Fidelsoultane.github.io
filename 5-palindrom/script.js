// Fonction pour vérifier si un texte est un palindrome
function isPalindrome(text) {
    // Supprimer les espaces et la ponctuation, convertir en minuscule
    const cleanedText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Comparer la chaîne avec son inverse
    return cleanedText === cleanedText.split('').reverse().join('');
}

// Fonction pour traiter l'événement de clic sur le bouton
document.getElementById('check-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value.trim();
    const resultElement = document.getElementById('result');
    
    if (!inputText) {
        alert('Please input a value');
    } else  {
         if (isPalindrome(inputText)) {
            resultElement.textContent = `${inputText} is a palindrome`;
        } else {
            resultElement.textContent = `${inputText} is not a palindrome`;
        }
    }
});