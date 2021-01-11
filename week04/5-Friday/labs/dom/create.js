var div = document.createElement('div');
div.innerHTML=" hellow world"

var ancor= document.createElement('a');
ancor.textContent = "google"
ancor.setAttribute('href', 'http://google.com')

var body= document.querySelector('body');

body.appendChild(div);

div.appendChild(ancor);