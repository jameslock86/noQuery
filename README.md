# Learn To Code: Intro to DOM manipulation with javascript

You may want to do some fancy stuff in your web page or web app, and heard that jQuery is the way to do it. NOPE. That might have been true several years ago, but these days, most modern browsers support everything you need to do most things without loading the entire jQuery library in.

This tutorial borrows heavily from [You Might Not Need jQuery](http://youmightnotneedjquery.com/). To continue learning, visit their site and explore!

## What is jQuery?

jQuery is a JavaScript library that was released in 2006. It is described on their site thusly:

```
[jQuery] makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.
 ```

Back in 2006, different web browsers (IE, Opera, Firefox, Safari, Netscape, and eventually, Chrome) implemented javascript inconsistently, so javascript didn't behave the same on everyone's browser. jQuery allowed developers to write code once that would (mostly) work across all the different browsers.

Nowadays, all the major browsers more or less agree on how javascript should behave, and we can use the standard features of javascript (and some CSS) to do everything people would use jQuery to do.

## What is the DOM?

The DOM (or Document Object Model) is the way that browsers turn your HTML into javascript objects that you can use and manipulate through code. Really, it's just what it says on the tin: a *Model* of your HTML page (or *Document*) composed of a bunch of javascript *Objects* in a tree structure.

## Pre-requisites 

This tutorial assumes that you're already familiar with the basics of HTML, CSS, and javascript. If you need to brush up on your fundamental web development skills, run through the following courses for a quick refresher:

- [Introduction to HTML and CSS](http://github.com/galvanizeOpenSource/learn-to-code-html-css)
- [Introduction to JavaScript](http://github.com/galvanizeOpenSource/learn-to-code-javascript)

You should haved a modern web browser (like [Google Chrome](http://chrome.google.com) or [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)) installed—they have developer tools that you can use to inspect the elements of your web page.

You'll also need a good text editor to work on your code. We recommend [Visual Studio Code](https://code.visualstudio.com/) or [Atom](https://atom.io/).

## Let's get started!

Start off by cloning this repo to your computer. Grab the https link from the green "Clone or Download" button in the upper right, or directly from [here](https://github.com/marcmajcher/noQuery.git).

Go into your terminal, change to the directory you want to download the repo into, and type `git clone https://github.com/marcmajcher/noQuery.git`. (If you don't have git installed, try downloading and unzipping the [zip file](https://github.com/marcmajcher/noQuery/archive/master.zip).)

Once you've got the repo downloaded, change into that directory and open up the `index.html`, `script.js`, and `style.css` files in your text editor.

### Set up your html file to load your javascript and styling

Before we dive in to coding, we'll need to wire up our javascript and CSS files to our HTML index page. When you start off, your HTML file will be relatively barebones, and look like this: 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Demo of noQuery</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
</head>

<body>
    <div class="container">
        <h1>Welcome to noQuery!</h1>
    </div>
</body>

</html>
```

We need to make two changes to make our stuff work. First, we'll link up our styling by adding our CSS file to the page with a `<link>` element. Right before the end of the `<head>`, add the link, like this:

```html
<head>
    <!-- ... everything else ... -->
    <link rel="stylesheet" href="style.css">
</head>

```

(There's already another link to another CSS file there; that's okay, that's just using something called `skeleton` to add a base level of prettiness to our web page.)

Next, we'll hook up our javascript to our page. At the bottom, just after our `</body>` tag, add this line of HTML:

```html
<script src="script.js"></script>
```

Notice two things: we're putting our script after our HTML, so it won't execute until the HTML loads, and, more importantly, we don't have to include the jQuery library! :)

Your page should now look more like this:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Demo of noQuery</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <h1>Welcome to noQuery!</h1>
    </div>
</body>
<script src="script.js"></script>

</html>
```

Now we're ready to begin!

## Your first task: Ready the Document!

Let's begin by familiarizing ourselves with the the general syntax of jQuery. \n

#### JQuery is so "money" (nobody talks like that anymore)

**You can invoke jQuery in generally two ways:**
- `jQuery.` - the "super" jQuery object that invokes all other objects to point to your jQuery library in your JavaScript file.
- `$` - Become familiar with this symbol - it is the alias for `jQuery`. Its appearance in a JavaScript file or an HTML script tag implies that jQuery will be used on this line and the blocks that follow. One would say that this is the reason jQuery is so .... money!

After invoking jQuery, the syntax follows the JavaScript standard of "Define, Declare, Call". Behold, the first function you declare: "Document, Ready"!
```javascript
$( document ).ready(function() {
     // insert the rest of your code here.
});
```
It is not wise to manipulate a page unless the elements are completely loaded. This is why we put our JavaScript invocations near the bottom to allow for the page to load first. in jQuery, we start that process with "Document, Ready", and the rest of your code will be initialized here.

**Remember:** we've set up our page so that jQuery will be running on a different file, not the HTML one. *Why should we get into the practice of coding this way?*

#### Now what? Let's create an alert!

Let's add the following code to your `$( document ).ready` function:
```javascript
     window.alert("The document is ready! (jQuery is working!)");
```
This should create a pop-up window saying "The document is ready!" (You'll need to allow pop-ups in your browser.)

Add the code to look like the following, then save and refresh your browser.
```javascript
$( document ).ready(function() {
     window.alert("The document is ready! (jQuery is working!)");
});
```
**Note:** is this alert pops up, that means your JavaScript code is working. This is one way to check if that is the case. (What are some more conventional ways to check this?)

## More functionality: On-Click Events!

In jQuery, events are methods that happen with the user's interaction. There are a LOT of them in the jQuery library, but we're going to start with a common on: `click`.

First, let's create something in our HTML for the user to click on. Insert the following code somewhere in the `<body>`:

```html
<button type="button">This is a button.</button>
```

This is a button in HTML, set to the browser's default settings. Add it to your `<body>`.

Save your HTML file and refresh your browser. It should now appear. How do we make this button interact with the jQuery?

**Choose your selector!** Capture `button` in the jQuery's selector:
```javascript
     $('button')
```
**Declare the method!** Cite the jQuery method we want to use. In this case, we're using `.click` so that something happens when you click the button:
```javascript
     $('button').click()
```
**Define the method!** We are going to create a JavaScript function within the `.click` method to do a specific function for this `event` with an empty parameter. For simplicity, let's create another alert.
```javascript
     $('button').click(function() {
          window.alert("Nice clicking, there, friend!");
     });
```     
**Save and check!** Put it all in the `$( document ).ready()`, save your JS file, and refresh the browser. Did it work?
```javascript
$( document ).ready(function() {
     window.alert("The document is ready!");
     // new code below
     $('button').click(function() {
          window.alert("Nice clicking, there, friend!");
     });
});
```
Now you know the general process of using jQuery. Let's try something new!

## Adding and Removing Classes in jQuery

Let's face it - your button is ugly. We can make it look better. We're going to create three things:

1. A link that will add our button with new styles  
2. A link that will remove the styles
3. A link that will toggle between having the two styles


#### Back to CSS

Fortunately, your CSS file already has a class called `.super-button` that can instantly improve the quality of yours:
```css
.super-button {
    color: #fff;
    background-color: #0275d8;
    border-color: #0275d8;
    padding: .75rem 1.25rem;
    font-size: 1.25rem;
    line-height: 1.333333;
    border-radius: .3rem;
    border: 1px solid transparent;
}    
```
Don't worry if you don't fully understand what's happening here, but if you're interested, we're sampling the [Bootstrap large button](http://v4-alpha.getbootstrap.com/components/buttons/) class.

#### Create the first link: #Add-Class

Add the following code into the `<body>` of your HTML. It is a link with text, but for now it lacks function.
```html
<div>
     <a>Add Class</a>
</div>     
```
We'll need to give this link an `id` so that it matches up with the jQuery we'll create later. I suggest `#add-class`.
```html
<div>
     <a id="add-class">Add Class</a>
</div>
```
Now we're ready to set up our jQuery function. Add the following script into your `$( document ).ready()` function:
```javascript
     $( '#add-class' ).click(function() {
     });
```
Right now ths function does nothing when you click on it. Add the following script to this new function:
```javascript
     $( '#add-class' ).click(function() {
          $( 'button' ).addClass('super-button');
     });
```
Let's slow down for a second. What we've done is set up our jQuery file so that when you click on an element with the ID `#add-class`, it will add the CSS styles under `.super-button` to that `button`. Make sense?

*Gut check: what if we added more buttons? What would happen if we clicked this link?*

Save all of your code and refresh your browser. Test the link. Did it work?

#### Create the second link: #Remove-Class

Let's keep the party going. Let's add a link that will remove the class. First step: adding the HTML below the last link.
```html
<div>
     <a id="remove-class">Remove Class</a>
</div>
```
We're now working with a new ID `#remove-class`. Let's make sure it has something to work with in the jQuery file. Add the following code in your `$( document ).ready()` function.
```javascript
     $( '#remove-class' ).click(function(){
          $( 'button' ).removeClass('super-button');
     });
```
Notice the new event handler `.removeClass` - if you click on this new link, you'll remove the class you've just added (but only if you've added it).

*Gut check: what if you never clicked on the first link? What would be the effect of clicking this one?*

#### Create just one more link: #Toggle-Class

Creating a button to do one thing and another to undo it is... kind of lame. Fortunately, in jQuery, there's another method you can use to `toggle` back and forth between `add` and `remove`: the conveniently named `.toggleClass()`.

First step: create a third link in your HTML with the ID `toggle-class`.
```html
<div>
     <a id="toggle-class">Toggle Class</a>
</div>
```
Second step:
```javascript
     $( '#toggle-class' ).click(function(){
          $( 'button' ).toggleClass('super-button');
     });
```
Save your changes and refresh your browser. Did it work?

Now you know how to add classes and IDs in HTML that you can interact with in jQuery!

## Can you deal with `$( this )`?

Earlier, we asked what would happen if your selector contained `button`, and **spoiler alert** the jQuery method changes every instance of `button` on the page. What if we just wanted to change the very thing we clicked on instead?

Let's create a few `<div>` fields with a class with style attributes that's already in your CSS: `.click-this`.

```html
<div class="click-this">
Click this #1!
</div>
<div class="click-this">
Click this #2!
</div>
<div class="click-this">
Click this #3!
</div>
```
Good! Now move over to your `custom.js` file and add the following jQuery code into the `$( document ).ready()` function block. Notice something different in one of the selectors?

```javascript
     $( '.click-this' ).click(function(){
          $( this ).toggleClass('click-this');
     });
```
The selector `this` is a cool jQuery selector that affects the same element in the selector above it. It will only impact that particular element, even if they share the same class!

Save your changes, refresh your browser, and test whether this works on all three `<div>`s.

## Time to dive into the DOM!

As started earlier, the **Document Object Model** or **DOM** for short is how your HTML is structured to allow for jQuery and other languages to move or *traverse* through them to find what they need in a page.

![alt text](http://www.w3schools.com/jquery/img_travtree.png "DOM Traverse Tree from W3Schools")

**Illustration from W3Schools.com explained:**
- The `<div>` element is the parent of `<ul>`, and an ancestor of everything inside of it
- The `<ul>` element is the parent of both `<li>` elements, and a child of `<div>`
- The left `<li>` element is the parent of `<span>`, child of `<ul>` and a descendant of `<div>`
- The `<span>` element is a child of the left `<li>` and a descendant of `<ul>` and `<div>`
- The two `<li>` elements are siblings (they share the same parent)
- The right `<li>` element is the parent of `<b>`, child of `<ul>` and a descendant of `<div>`
- The `<b>` element is a child of the right `<li>` and a descendant of `<ul>` and `<div>`

In other words, elements follow an implicit family tree-style hierarchy of "parent" and "child", of "ascendant" and "descendant". If they are are equivalent in hierarchy, they are known as "siblings."

In jQuery, we can write code for a `parent` element that impacts the `child`. Let's use the example where this comes in most handy: **the list**.

Create a list with the following HTML code in your `index.html` file. Add a button at the bottom.
```html
<li>This is a list!
     <ul>Item #1</ul>
     <ul>Item #2</ul>
     <ul>Item #3</ul>
</li>
<button></button>
```

#### Remove the children (settle down...)

Let's create a jQuery function that deletes the children elements of the list.

**Gut check:** one of our functions may be conflicting with the one we're about to make. I'm going to disable it with double dashes before each line:
```javascript
    // $( 'button' ).click(function() {
     //    window.alert("Nice clicking there, my friend!");
    // });
```
You can delete it or disable it - we won't be using it again.

First, we have to create an ID for the list: `item-list`. We also need an ID for the button: `delete-item`. Name the button as well.
```html
<li id="item-list">This is a list!
     <ul>Item #1</ul>
     <ul>Item #2</ul>
     <ul>Item #3</ul>
</li>
<button id="delete-list">Delete list</button>
```

Next, we go into our `custom.js` file and add yet another jQuery function:

```javascript
     $( '#delete-list' ).click(function() {
          $( '#item-list' ).children().remove();
     });
```

What's happening here is that when you click on the button with ID `#delete-item`, it will look for the ID `item-list`, then for one of its children elements, and remove it. Save all of your changes and try it out yourself.

Did the entire list get deleted? If so, it worked!

Notice how we had to **chain** the methods of `.children()` and `.remove()` in order to make this work. This is part of the fun of working in an *object-oriented language* in dot notation!

*Gut check: what if we just wanted to remove one of the items at a time? Can you do it without creating an entirely new jQuery function?*

#### Let's get back at our parents instead! (Settle down...)

Create a new method where if you click on one of the items of the list, it will do something to the parent element. This time, let's change the text of that element to something else. We're going to make this conditional to any `<ul>` element.

```javascript
     $( 'ul' ).click(function() {
          $( this ).parent();
      });
```

This time, let's add a method `.text("We just changed the text! Take that, parents!");` to this function.

```javascript
     $( 'ul' ).click(function() {
          $( this ).parent().text("We just changed the text! Take that, parents!")>;
      });
```

Save your work and refresh your browser. What happened? *and at what cost...?*

#### Play into the sibling rivalry instead!

The `<ul>` elements are siblings of one another. Let's click on one element and change the others! We'll need to modify our current block so that there are no conflicts.

```javascript
     $( 'ul' ).click(function() {
          $( this ).siblings().text("My siblings are dorks!");
      });
```

Did it work? What happens if you click on another sibling? (Oh, does your medicine taste bitter...)

# CONGRATS! YOU NOW KNOW (A LITTLE) JQUERY AND THE DOM!

## Play around in the sandbox!

Nice work - you're picking up the basics so far, but the jQuery library is vast! Why not try some more complicated tasks:

- Add `<ul>` elements so that your list doesn't disappear when you change the content
- Create a form to submit values directly to the page
- Add an image and modify its height and width
- Make an element disappear.... slowly...

Here are some solid resources for you to explore and tinker around:

- [Learn jQuery](https://learn.jquery.com/)
- [Codecademy](https://www.codecademy.com/tracks/jquery)
- [W3Schools](http://www.w3schools.com/jquery/)

Want to code more the best instructors? Check out Galvanize's Full Stack Immersive Program!

- 24 Week Full-Time Program
- 97% Job Placement Rate within six months
- Average starting salary: $77,000 per annum
- Scholarships available for those who qualify
- Learn more at http://galvanize.com/courses/fullstack/

#### About the Author

[Lee Ngo](http://linkedin.com/in/leengo) is an evangelist for Galvanize based in Seattle. Previously he worked for UP Global (now Techstars) and founded his own ed-tech company in Pittsburgh, PA. Lee believes in learning by doing, engaging and sharing, and he teaches code through a combination of visual communication, teamwork, and project-oriented learning.

You can email him at lee.ngo@galvanize.com for any further questions.
