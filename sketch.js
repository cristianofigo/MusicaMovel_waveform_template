let clock_global = 0;
//let score = function(){};
var wavesurfer = WaveSurfer.create({
    container: document.querySelector('#waveform'),
    waveColor: '#D92828',
    progressColor: '#95D928',
    backend: 'MediaElement',
    interact: true, //clicar na onda traz o playhead
    plugins: [
        WaveSurfer.regions.create({
            regionsMinLength: 2,
            regions: [
                {
                    start: 110,
                    end: 130,
                    loop: true,
                    drag: true,//não arrasta região de loop
                    color: '#C728D9A0'
                }
            ],
            
        })
    ]
});
wavesurfer.load('https://ia800602.us.archive.org/16/items/ImprovisoCwb/improviso_glerm_figo.ogg');

let region = Object.values(wavesurfer.regions.list)[0];
//region.playLoop();


Tone.Transport.scheduleRepeat((time) => {
let region = Object.values(wavesurfer.regions.list)[0];
region.playLoop();
  clock_global = Tone.Transport.position;//timeline
  console.log(clock_global);
  score();
    }, "2m");

Tone.Transport.start();
//Tone.Transport.stop() && wavesurfer.stop();









