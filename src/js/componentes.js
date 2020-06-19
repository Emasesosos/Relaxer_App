/* CSS */
import './../css/componentes.css';
/* DOM */
const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

/* Breath Animation */
const breathAnimation = () => {

    text.innerText = 'Breathe In!';
    container.className = 'container grow';

    setTimeout(() => {

        text.innerText = 'Hold';

        setTimeout(() => {

            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';

        }, holdTime);

    }, breatheTime);

};
/* ************************************************************ */
const events = () => {
    console.log('Event Listeners');
    setInterval(breathAnimation, totalTime);
};
/* ************************************************************ */
const init = () => {
    console.log('Relaxer App');
    breathAnimation();
    events();
};
/* ************************************************************ */
export {
    init
}