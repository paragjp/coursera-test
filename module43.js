var names = ["Parag", "John", "Aakash", "Jayant", "json", "Milind", "Ashish", "Jim", "Lata"];
for (var i = 0; i < names.length; i++) {
	 var firstLetter = names[i].charAt(0).toLowerCase();
	 // console.log(firstLetter);
	   if (firstLetter === 'j') {
    		byeSpeaker.speak(names[i]);
  		} else {
    		helloSpeaker.speak(names[i]);
  			}
		}