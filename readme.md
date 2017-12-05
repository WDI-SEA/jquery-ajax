# AJAX Pokemons

You're about to write AJAX-backed JavaScript that will access an API and loop through/display data using `setInterval`.

You can make use of the [Pokemon API](https://pokeapi.co/), or if pokemon isn't your thing, you may find and substitute one of your choice. Your task is to use your JQuery skills to fetch a pokemon from the API and display an image and information about it.

## Getting Started

* Fork and clone this repository
* Run `npm install` to install dependencies
  * `npm start` - start the BrowserSync server
  * `npm run lint:css` - lint CSS
  * `npm run lint:js` - lint JS

## Hints

* Implement a jQuery AJAX request to the [Pokemon API](https://pokeapi.co/). Make sure that the data can be printed to the Chrome console before continuing.
* Before starting, try going to `https://pokeapi.co/api/v2/pokemon/1`. This gets you an individual pokemon with the id of 1 (Bulbasaur). Likewise, `https://pokeapi.co/api/v2/pokemon/2` will get you the pokemon with the id of 2 (Ivysaur).
* There are 150 original pokemon - gotta display 'em all?

## Requirements

* Use a counter to increment the pokemon id for each call to the API
* Once the data has been received from the API, list the name, image, and one other piece of info of your choice (e.g., a list of abilities) for each pokemon you display.

## Deliverable

Make a slideshow of pokemon appear on the page.

## Bonuses

* Go to [https://pokeapi.co/api/v2/pokemon/?limit=150](https://pokeapi.co/api/v2/pokemon/?limit=150) and use this info to create a full list of all original pokemon names in a sidebar.
* Add an animation for transitioning
* Add a stop button with `clearInterval`
* If you have a list of pokemon on the sidebar, enable clicking on them to skip to that particular pokemon.

## Additional Resources

* [jQuery AJAX Docs](http://api.jquery.com/jquery.ajax/)
* [Some useful jQuery DOM Manipulation Docs](http://api.jquery.com/prepend/)
* [The Poke API](https://pokeapi.co)

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
