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
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="container">
        <h1>Welcome to noQuery!</h1>
    </div>
</body>
<script src="js/script.js"></script>

</html>
```

Open up your page in a browser (or use your text editor's live server extension, or the `lite-server` module, if you're awesome and already have one of those installed). You'll see your web page that says "Welcome to noQuery!", and if you open up your developer console (alt-cmd-j, or View->Developer->Javascript Console), you'll see that our javascript ran, and logged out "Hello, programmer!" to the console. 

Now we're ready to begin!


## Your first task: Ready the Document!

The first thing we want to do is wrap our javascript code in a way that isolates it from any other javascript that might interfere with the correct operation of our code, and so that it doesn't run until the HTML page is fully ready to accept our commands.

If you were using jQuery, you'd do something like this:

```js
$(document).ready(function() {
     // insert the rest of your code here.
});
```

NOPE.

Let's see how we can do that with vanilla javascript. We're actually going to separate out the two concepts: isolating our code, and running it when the document is ready.

First, let's turn our console log into a function. In your `script.js` file, change that part to look like this:

```js
function ready() {
    console.log('Hello, programmer!');
}

```

Then, you can call (or invoke) the function you just wrote like this:

```js
ready();
```

Reload your page, and look at the javascript console to see that it still works. Now, we're going to isolate our function in something called an `IIFE`. (That stands for "[Immediately Invoked Function Expression](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)", but don't worry about exactly how that works for now.) Basically, we're going to put your code in an anonymous function, and call it immediately. It sounds complicated, but it's pretty easy-just change your code to look like this:

```js
(() => {
    function ready() {
        console.log('Hello, programmer!');
    }

    ready();
})();
```

Again, reload your page, and see that it works the same! (Why do this if it works exactly the same? Think about what would happen if someone loaded some other javascript in to the page after your script file, and created another function with the same name as yours. TROUBLE, that's what.) (Side note: you should really do this whether you're using jQuery or not. I just wanted to make sure that you know about it.) (One more note: notice that we're using something called a "[fat-arrow function(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)]" instead of the regular `function` declaration that you might be used to. This is "new" and "fancy" and you should learn it!)

Okay, part two: running your function when the document is loaded. This is also an easy do. Just change your `ready()` line that calls your function to look like this:

```js
    document.addEventListener('DOMContentLoaded', ready);
```

This is doing basically exactly what jQuery's `$(document).ready(function())` is doing, but it comes standard with javascript now, so you don't have to load in a 250k library to make it work. :) The one thing that jQuery does for you here is add support for older browsers like IE (*ugh*), but if you want to do that, it's just one or two more lines of code. (That you can find at the links at the bottom of the page.)

**Remember:** We've set up our page so that our javascript code will be running from its own file, not from a `<script>` tag in our HTML. *Why should we get into the practice of coding this way?*


## Adding functionality: Click Events!

In javascript, events are messages that are sent from one part of the code to another to let it know what's going on. In our case, we want to catch a `click` event that is generated from an HTML button, and grab it with our javascript code to do something with it. This is called "listening" for an event.

(There are *lots* of events that you can throw around and listen for. We're going to stick with click events for now, but don't be afraid to poke around and learn more on your own!)

### Make a Button

First, let's add a button in our HTML file for to click on. Add this button element inside the container `<div>` in your document's `<body>`, after the `<h1>` header element:

First, let's create something in our HTML for the user to click on. Insert the following code somewhere in the `<body>`:

```html
    <button class="button-primary">CLICK ME</button>
```

### Get the Button

This is just a regular html button, with a `button-primary` class for styling. Reload the page in your browser to see it! So, how do we make this button clickable? Well, first we need to grab our button with something called a *selector*. Using jQuery, you'd see this:

```js
    const button = $('button');
```

But we're not using jQuery! In plain old javascript, we can use `querySelector` instead:

```js
    const button = document.querySelector('button');
```

Add that code to your `script.js` file, right after where you log out "Hello, programmer!". Then after that, you can also log out the button element in your console to see that you've gotten the right bit. So now your code inside your `ready()` function should look like this:

```js
    const button = document.querySelector('button');
    console.log(button);
```

And when you reload your page, you should see this in your console:

```
Hello, programmer!
<button class=​"button-primary">​CLICK ME​</button>​
```

### Click the Button

Now that we've got the button, let's tell our javascript to do something with it. When someone clicks the button, it will send a `click` event that we can catch and do something with. In jQuery, you'd just do something like:

```js
    $('button').click(function(event) { /* do stuff here */ });
```

But we're not using jQuery! Instead, we explicitly catch the event, and give it a callback function like so:

```js
    button.addEventListener('click', function(event) { /* do stuff here */ });
```

So let's do that. Add this to your code, inside the `ready()` function:

```js
    button.addEventListener('click', () => console.log('YOU CLICK GOOD'));
```

Reload your page, and give it a few clicks to see what happens in your javascript console! (Again, we're using the fat arrow function notation here. You could use `function() {console.log('etc')}` here just as well, but doesn't it look nice this way?)

**YOU DID IT!** You added a loader and click function to your web page using just regular old vanilla javascript, without a lick of jQuery. Don't you feel awesome? You should. Let's do more!


## Adding and Removing Classes 

So, our button already looks nice (thank you, [Skeleton](http://getskeleton.com/)!), but let's make it BIGGER AND BETTER. To that end, we're going to three things:

1. Create a link that will add a new style to our button  
2. Create a link that will remove the new style from our button
3. Create a link that will toggle between the two different styles

Fortunately, there's already a class defined in your CSS file called `.button-super` that will make it big and beautiful:

```css
.button-super {
  padding: 1em;
  font-size: 2em;
  line-height: 0;
}
```

### Create the first link: Add Class

We're going to add a link with text to your HTML file, and give it an `id` attribute so we can grab it with our javascript code. Put this in the `<body>` of your HTML, right above your button:

```html
    <div>
        <a href="#" id="add-class">Make it big!</a>
    </div>
```

(*Question: what does that `href="#"` do?*) Now we can select that element and add a click handler to it. In jQuery, we'd do:

```js
    $('#add-class').click(function() { /* ... */ });
```

But.... that's right. Instead, we're going to do it with regular javascript. We're going to select our link element with `getElementById`, and attach the a function to it to handle the click event:

```js
    document.getElementById('add-class').addEventListener('click', () => { /* ... */ });
```

Notice that we've combined the two steps that we did above for our button: we're grabbing the element (this time with `getElementById` instead of `querySelector` because we have an explicit, unique id assigned, but we could use either) and then right away adding the event listener, without assigning it to an intermediary variable in between. You can still do it the other way, if you like!

So let's complete our function by adding the class to our button. Someone using jQuery would say:

```js
    $('#add-class').click(function() {
        $('button').addClass('button-super');
    });
```

But we're not that guy, right? Since we've already grabbed the button above, we can refer to it in our new function, too. We're just going to use `.classList.add(myClass)` to add our new class to the existing button element, so our new `ready()` function will look like this:

```js
    function ready() {
        const button = document.querySelector('button');
        button.addEventListener('click', () => console.log('YOU CLICK GOOD'));

        const bigClass = 'button-super';
        document.getElementById('add-class').addEventListener('click', () =>
            button.classList.add(bigClass));
    }
```

Notice that we're saving the name of our new class, "button-super" in a variable (constant, really, but that's fine), so we can use it in the rest of the functions that are coming up!

Go ahead and save all of your new code and refresh your browser to see the new stuff. Click on the "Make it big!" link to see if it works. Does it work? It does? YES! Let's keep going. 

#### Create the second link: Remove Class

To add our second link to remove the class we just added, we're going to do very much the same as before. Add the following HTML to your page, below the first link:

```html
    <div>
        <a href="#" id="remove-class">Make it small!</a>
    </div>
```

Back to our javascript file, let's add a click handler and a function to remove the class from our button. Our poor, sad jQuery developer would be writing:

```js
    $('#add-class').click(function() {
        $('button').removeClass('button-super');
    });
```

But we're not sad! We know javascript! Again, we still have the button element saved in our `button` variable, so that makes it easy for us. Let's throw this in our javascript file, right after our other click handler function:

```js
    document.getElementById('remove-class').addEventListener('click', () =>
        button.classList.remove(bigClass));
```

Like our first click handler, we're just adding that event listener to the link identified by the `remove-class` id, and telling it to remove our big button class from the list of classes on the button. Reload the page, and click on your linkes to embiggen and littleify the button!

(*HEY*, what happens if you click on the "Make it smaller!" link before you click on the "Make it bigger!" one? Does that break anything?)

#### Create one more link: Toggle Class

I bet you know what's coming next. Add our last link to your HTML page:

```html
    <div>
        <a href="#" id="toggle-class">Toggle it!</a>
    </div>
```

Next, we're going to make a function to turn the `button-super` class of the button on if it's off, and off if it's on. We say "toggle the class on the button" instead of that nightmare of a sentence, so let's see how we do that in jQuery:

```js
     $('#toggle-class').click(function(){
          $('button').toggleClass('button-super');
     });
```

Wow, that's easy! Unfortunately, in plain vanilla javascript, we have to write a conditional `if` statement to check and see if the class is on the button or not, and turn it off or on accordingly... *OH WAIT*, no we don't:

```js
    document.getElementById('toggle-class').addEventListener('click', () =>
        button.classList.toggle(bigClass));
```

***BOOM*** IN YOUR FACE, JQUERY!

I mean... Save your changes and refresh your browser to see if it works. It does? Oh, good. I'm glad to hear it.

Moving on.

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

```js
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
```js
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

```js
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

```js
     $( 'ul' ).click(function() {
          $( this ).parent();
      });
```

This time, let's add a method `.text("We just changed the text! Take that, parents!");` to this function.

```js
     $( 'ul' ).click(function() {
          $( this ).parent().text("We just changed the text! Take that, parents!")>;
      });
```

Save your work and refresh your browser. What happened? *and at what cost...?*

#### Play into the sibling rivalry instead!

The `<ul>` elements are siblings of one another. Let's click on one element and change the others! We'll need to modify our current block so that there are no conflicts.

```js
     $( 'ul' ).click(function() {
          $( this ).siblings().text("My siblings are dorks!");
      });
```

Did it work? What happens if you click on another sibling? (Oh, does your medicine taste bitter...)

# CONGRATULATIONS! YOU DID IT!

Nice work! You've got the basics of DOM manipulation with javascript down. Now, try a few more complicated tasks:

- Add some `<ul>` elements so that your list doesn't disappear when you change the content
- Create a form to submit values directly to the page
- Add an image and modify its height and width
- Make an element fade... out... slowly... 

Remember, you can always check out the official javascript documentation on [MDN](https://developer.mozilla.org/en-US/) to learn more, or ask Doctor Google for some help. Everything you need to know is out there—all you need to do is be patient with yourself, ask questions, and look for answers. (Or, as [Sam](https://gfycat.com/wancomfortablearawana) would say, "read the book and follow the instructions".)

***WOULD YOU LIKE TO KNOW MORE?*** 

Check out Galvanize's Full Stack Immersive Program!

- 24 Week Full-Time Program
- 97% Job Placement Rate within six months
- Average starting salary: $77,000 per year
- Scholarships available for those who qualify
- Learn more at https://www.galvanize.com/

### Further Reading

* [You Might Not Need jQuery](http://youmightnotneedjquery.com/)
* [You Truly Don't Need jQuery](https://hackernoon.com/you-truly-dont-need-jquery-5f2132b32dd1)
* [(Now More Than Ever) You Might Not Need jQuery](https://css-tricks.com/now-ever-might-not-need-jquery/)

(I'm sensing a pattern...)

### About the Author

[Marc](https://github.com/marcmajcher/) [Majcher](https://www.linkedin.com/in/marc-majcher-80a2/) is a Lead Instructor for the Galvanize full-stack Web Development Immersive program in Austin, TX. He's been a professional developer since before there was a World Wide Web, so get off his lawn. He also performs, teaches, and directs improvised and immersive theater, and has designed and published several tabletop games.

You can email him at marc.majcher@galvanize.com with questions or comments.

