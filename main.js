document.getElementById('satisfaction-form').addEventListener('submit', event => {
   event.preventDefault();

   const name = document.getElementById('name-input').value;
   const firstname = document.getElementById('firstname-input').value;
   const satisfaction = document.getElementById('range-input').value;
   const comments = document.getElementById('comment-input').value;

   alert(`${firstname} ${name}, vous êtes satisfait.e.s à ${satisfaction}/5 de la formation et vous pensez que : ${comments}`);

});