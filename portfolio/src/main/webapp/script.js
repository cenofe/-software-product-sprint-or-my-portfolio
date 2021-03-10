// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomHoroscope() {
  const horoscopes =
      ["Your gracious, tender nature is likely to be extremely appreciated today. You may feel as if your head is so far up in the clouds that you can't get anything done. The truth of the matter is that the work you need to do is actually found up in those clouds."+ 
      " Trust that you've taken care of the foundation. The thing you need to do now is relax and let your fantasies lead the way.", "If you need to do errands, don't drag others along with you. Complete your mission solo. You will find that you're more efficient "+
      "if you don't have to carry the extra burden around. Not only will you get your chores done more quickly but you will also have time to think and process certain things without someone else's energy influencing your thinking.", "Don't take no for an answer today. "+
      "Chances are you won't have to. People will be more understanding of your situation and have compassion for your cause. Your inner strength will show through loud and clear, and you have the desire to make anything happen you want. There's a lucky star smiling on you "+
      "that's helping you tackle any project.", "It may be difficult to deal with people who seem spaced out and confused today. This confusion can be contagious. You will find that no matter how much logic you apply to the situation, if it doesn't feel right, it won't happen. "+
      "Things will flow naturally or they won't flow at all. Ease into the relaxed atmosphere of the day and don't worry if things don't happen as quickly as you'd like.", "Take your mind off your stressful duties and responsibilities today. This is a time for emotions and ego "+
      "to connect in harmony. Don't let other people's problems ruin your good mood. There's a need for you to consciously let your mind and body be at ease. Art and music will bring you a great deal of pleasure. Indulge in the things that make you truly happy.", "All the knowledge "+
      "in the world will be no match for the emotional energy in the air on a day like today. You may be carried away into a mystical realm where feelings take precedence over facts. Let go of reality for a while and free yourself from the hectic pace of everyday life. There's a strong "+
      "pull toward the fantasy realm today, so feel free to go there.", "Treat yourself to something special, whether a gourmet meal, new outfit, or latest gadget. Today is your day and you shouldn't deprive yourself of anything. There's a remarkable synchronicity of events that will lead "+
      "you to exactly the right place at the right time. There's a special warmth and sensitivity in the air that will put your mind and emotions at ease.", "There's an emotional, sensual feeling to the day that is sure to tickle your heart. Try not to be too abrasive when dealing with others. "+
      "The more serene you can be, the more doors you will be able to walk through. Be patient and don't feel like you need to be first in line. If you aren't sure of a situation, don't jump in headfirst.", "The different parts of your personality should work harmoniously today. "+ 
      "It's important that there be an equal amount of give and take in your world. If for some reason there's an imbalance in a certain area of your life, address the issue right away. It's important that you maintain equilibrium within yourself and with the people around you.", 
      "You probably aren't going to impress people with your fast talk and quick facts today. You will likely get further if you express the emotions that lie behind your words. It's more important to say what you feel than what you think. Even though this may go against your usual nature, "+
      "you will find that it's the best policy on a day like this.", "Your ego should be strengthened by your emotions, and vice versa, today. Be yourself in every capacity and situation. Things should flow quite smoothly for you as long as you keep the energy moving within you. Share your "+
      "feelings honestly with others and you will find that your inner vitality strengthens. No one will be able to speak against words that come straight from your heart.", "Like a surfer who wants to ride the endless wave, you must first prepare yourself before you jump into the ocean with your board. "+ 
      "Sit on the real or imaginary beach for a while and contemplate the tide. Watch the currents and see how other surfers fare under the prevailing conditions. You will find that the more preparation you do, the more secure you will be when you hit the water."];


  // Pick a random greeting.
  const horoscope = horoscopes[Math.floor(Math.random() * horoscopes.length)];

  // Add it to the page.
  const horoscopeContainer = document.getElementById('horoscope-container');
  horoscopeContainer.innerText = horoscope;
}