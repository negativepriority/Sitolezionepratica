document.addEventListener('DOMContentLoaded', function() { //Questa riga di codice aspetta che il 
  //documento sia completamente caricato prima di eseguire le funzioni contenute all'interno della funzione anonima.
 
 var cursor = document.querySelector('.cursor'); //var cursor = document.querySelector('.cursor');: Questa riga di codice 
 //seleziona l'elemento HTML con la classe ".cursor" e lo assegna alla variabile cursor.
 var cursorinner = document.querySelector('.cursor2'); // Questa riga di codice seleziona l'elemento HTML con la classe ".cursor2" e lo assegna alla variabile cursorinner.
 var a = document.querySelectorAll('a'); //: Questa riga di codice seleziona tutti gli elementi HTML <a> sulla pagina e li assegna alla variabile a.
 
 document.addEventListener('mousemove', function(e){ //document.addEventListener('mousemove', function(e){...});: Questa riga di codice aggiunge un event listener che ascolta 
 //il movimento del mouse sulla pagina e aggiorna la posizione dell'elemento cursor sulla pagina in base alla posizione del mouse.
   var x = e.clientX;
   var y = e.clientY;
   cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
   //Questa riga di codice utilizza la trasformazione CSS translate3d per spostare l'elemento cursor in base alla posizione del mouse.
 });
 
 document.addEventListener('mousemove', function(e){ //Questa riga di codice aggiunge un event listener che ascolta il movimento del mouse sulla pagina.
   var x = e.clientX;
   var y = e.clientY;
   cursorinner.style.left = x + 'px';
   cursorinner.style.top = y + 'px';
 });
 
 document.addEventListener('mousedown', function(){  //Questa riga di codice aggiunge un event listener che ascolta il click del mouse sulla pagina e 
 //aggiunge una classe CSS click all'elemento cursor e una classe CSS cursorinnerhover all'elemento cursorinner
   cursor.classList.add('click');
   cursorinner.classList.add('cursorinnerhover')
 });
 
 document.addEventListener('mouseup', function(){ // Questa riga di codice aggiunge un event listener che ascolta il rilascio del pulsante
 // del mouse sulla pagina e rimuove la classe CSS click dall'elemento cursor e la classe CSS cursorinnerhover dall'elemento cursorinner.
   cursor.classList.remove('click')
   cursorinner.classList.remove('cursorinnerhover')
 });
 
 a.forEach(item => { // Questa riga di codice cicla attraverso ogni elemento HTML <a> selezionato dalla variabile a e aggiunge event listeners che ascoltano il passaggio del mouse sopra e fuori da ogni elemento.
 //Quando il mouse passa sopra un elemento <a>, viene aggiunta una classe CSS hover all'elemento cursor. Quando il mouse esce dall'elemento <a>, la classe CSS hover viene rimossa dall'elemento cursor.
   item.addEventListener('mouseover', () => {
     cursor.classList.add('hover');
   });
   item.addEventListener('mouseleave', () => {
     cursor.classList.remove('hover');
   });
 })
       });

       