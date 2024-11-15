let albumPics = document.querySelectorAll('.album');
let songClips = document.querySelectorAll('.song');
let players = document.querySelectorAll('audio');

function hideAll() {
    songClips.forEach(function(el) {
        el.style.display = 'none';
    });
}

hideAll();

albumPics.forEach(function(el) {
    el.onclick = (e) => {
      // hide all the divs to ensure that only one will be open 
      hideAll();
      
      players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });
      // here is a switch statement to handle opening the right div
   
      switch (e.target.getAttribute('id')) {
        case 'eikal':
          document.querySelector('#valentine')
              .style.display = 'block';
          break;
        case 'bewitched_goddess':
          document.querySelector('#goddess')
              .style.display = 'block';
          break;
        case 'typical_of_me':
          document.querySelector('#wishyoulove')
          .style.display = 'block';
          break;
        case 'bewitched':
          document.querySelector('#fromthestart')
          .style.display = 'block';
          break;
      } // end of switch
      // switch does not need default for this 
      
    } // end of function for clicking
  
  }); // end of forEach()
  