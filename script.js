document.addEventListener('DOMContentLoaded', function() {
    const revealButton = document.getElementById('revealButton');
    const secretMessage = document.getElementById('secretMessage');

    revealButton.addEventListener('click', function() {
        secretMessage.classList.toggle('hide');
        if(secretMessage.classList.contains('hide')){
          revealButton.textContent = 'Clique aqui!'
        }else{
          revealButton.textContent = 'Esconder'
        }
    });
});
