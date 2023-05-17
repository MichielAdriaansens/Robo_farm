# Robo_farm
A page that takes Json data and neatly displays it in 'cards' with a funny Robot image generated from an API.

Click link to check it out! 🤖
https://michieladriaansens.github.io/Robo_farm/


## log:
It was an old assignment, still using classes and constructors to make components.
So i updated it doing it the modern way with functional components, usestate, useref all that good stuff.
In particulair fixing the background resize bug was insightfull in how to deal with loops in React. 

### Bugs:
- __Background resizing__ 
    _problem:_ Resizing the canvas (background) would break the animation, made symbols rendered glitchy/random 
    instead of symbols streaming down. Instantiating multiple recursive animation loops.
    
    _solution:_ Whenever 'resize' Event gets triggered, set condition to break out of the recursive loop.
    Condition automaticly resets whenever 'Matrix' component gets refreshed.

