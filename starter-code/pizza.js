// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";


  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function($green-pepper) {
    if (state.greenPeppers) {
      $green-pepper.style.visibility ="visible";
    }
    else {
      $green-pepper.style.visibility = "hidden";}
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}}


function renderWhiteSauce() {
  document.quesrySlecetorAll('.sauce-white').forEach(function($sauce){
    if (state.whiteSauce) {
      $sauce.classList.add('sauce');
      
    } else {
      
      $sauce.classList.remove('sauce');
    }
  }}
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`


function renderGlutenFreeCrust() {
  document.quesrySlecetorAll(".crust-gluten-free").forEach($crust=>{
    if (state.whiteSauceglutenFreeCrust) {
      $crust.classList.add('crust');
      
    } else {
      
      $crust.classList.remove('crust');
    }
  }}
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {

  var selector = '.btn';
$(selector).on('click', function(){
    $(selector).removeClass('btn');
    $(this).addClass('btn');
});
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {


  // Iteration 4: change the HTML of `<aside class="panel price">`
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`



document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`


document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`


document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !glutenFreeCrust
  renderEverything()
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`