const moods = {
  happy:{
    music:"Dreamy Lo-fi & Upbeat Chill",
    quote:"Happiness is energy that quietly lights up everything around you.",
    energy:"Golden Positive Aura ☀️"
  },
  sad:{
    music:"Rainy Piano & Soft Ambient",
    quote:"Even storms eventually become sunsets.",
    energy:"Blue Reflection Aura 🌧️"
  },
  stressed:{
    music:"Deep Focus & Calm Waves",
    quote:"You don’t need to solve everything tonight.",
    energy:"Purple Recovery Aura 🌌"
  },
  excited:{
    music:"Synthwave & Future Bass",
    quote:"Your energy is louder than your doubts.",
    energy:"Electric Neon Aura ⚡"
  }
};

function generateMood(){
  const input = document.getElementById("moodInput").value.toLowerCase();

  let selected = moods.happy;

  if(input.includes("sad") || input.includes("lonely")){
    selected = moods.sad;
    document.body.style.background = "#0f172a";
  }
  else if(input.includes("stress") || input.includes("tired")){
    selected = moods.stressed;
    document.body.style.background = "#140f1f";
  }
  else if(input.includes("excited") || input.includes("motivated")){
    selected = moods.excited;
    document.body.style.background = "#0a0f1f";
  }
  else{
    document.body.style.background = "#09090f";
  }

  document.getElementById("music").innerText = selected.music;
  document.getElementById("quote").innerText = selected.quote;
  document.getElementById("energy").innerText = selected.energy;

  const card = document.getElementById("moodCard");
  card.animate([
    {transform:'scale(0.96)',opacity:0.5},
    {transform:'scale(1)',opacity:1}
  ],{
    duration:500,
    easing:'ease'
  });
}
