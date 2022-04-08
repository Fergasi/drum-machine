// Setup sounds
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const hiHat = new Audio('sounds/hi-hat.mp3');
const kickDrum = new Audio('sounds/kick-drum.mp3');
const snareDrum = new Audio('sounds/snare-drum.mp3');


// Make tock sound on fourth beat
let fourthBeat = 0;

// This function is called every 600ms
function update() {

    let counter = document.querySelector('.counter');
    let metronomeCounter = (fourthBeat % 4) + 1;

    //sounds checkboxes
    let metronome = document.querySelector('#metronome');
    let hiHatCheck = document.querySelector('#hi-hat');
    let kickDrumCheck = document.querySelector('#kick-drum');
    let snareDrumCheck = document.querySelector('#snare-drum');
    
    //sounds inputs - timing count
    let hiHatTiming = document.querySelector('#userInput-hi-hat');
    let kickDrumTiming = document.querySelector('#userInput-kick-drum');
    let snareDrumTiming = document.querySelector('#userInput-snare-drum');
    
    fourthBeat++;
   
    if(metronome.checked === true){
    
    counter.innerText = metronomeCounter;
    
    //plays 'tock' on fourth beat 
        if(fourthBeat % 4 === 0){
            tock.play();
        }
        else {tick.play();}
    }

    if(kickDrumCheck.checked === true){

        if(Number(kickDrumTiming.value) > 0){
            if (Number(kickDrumTiming.value) === metronomeCounter){
                kickDrum.play();
            }
        } else {kickDrum.play()}
       
    }
    if(snareDrumCheck.checked === true){

        if(Number(snareDrumTiming.value) > 0){
            if(Number(snareDrumTiming.value) === metronomeCounter){
               snareDrum.play();
            } 
        } else {snareDrum.play()}
       
    }
    if(hiHatCheck.checked === true){

        if(Number(hiHatTiming.value) > 0){
            if(Number(hiHatTiming.value) === metronomeCounter){
               hiHat.play();
            }
        }  else {hiHat.play()}
    }

}  

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);