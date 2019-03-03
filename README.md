# Generative Art with JavaScript

## What I'm trying to achieve with this talk

- Something a bit different, a bit fun. 
- We'll talk about some technical specifics
- But otherwise we'll talk about how a side project like this can be useful for your own technical development. 
    - For example: 
        - Deploying a website
        - Data structures

## How I got here

I used to be into electronic music. 

Before I was a web developer - built this with C#/Java

![waves](./assets/waves_screenshot.jpg)

Fastfoward a few years, I see this picture on Facebook

![earthvenus](./assets/earth_venus.gif)

And I was like, yeah, that's cool, but if you take any two things rotating about a point and draw lines between them, they're going to create something cool looking. 

And doesn't Earth have an elliptical orbit? 

So I quickly created a demo using SVG and JQuery to make the point. 

(demo the Earth Venus Algorithm). 

And then I was like, 'yeah, that's cool, what if I added a third one? What if they orbitted each other?

And from there, I was a bit hooked. 

And this is actually where I started getting into React - I realised that JQuery wasn't going to cut it, so this was a good opportunity to learn a new framework. 

So over the next couple of years I learned: 

- React
- TypeScript (useful for the underlying algorithm)
- How do deploy a website to Heroku and to Firebase
- How to set up the DNS for my own domain name
- API integrations (Social media sharing). 

And a bunch of what not to do: 

- Don't roll your own components. (Use material-ui :thinking:)
    - Making things work for iPhone is difficult.  
- Don't mutate props 😮
- Is Object Oriented Programming still the way to go?

Where this project ultimately ground to a halt was that it was time consuming: 

- The idea I had in mind was that you'd be able to create an algorithm on the weekend, and that would be fun. 
- But where it really is, is not quite being happy with the UX. 
    - The look feel on different devices are different. 
    - I think for a while it didn't even work for iPhone
    - Tweaking the algorithm min/maxes is time consumer. 
    - Just what controls are relevant for the user? 
    - The random button actually takes a bit of the fun out of it. 
         - 'I used to collect stamps'.  
- I got a bit over the 'get big on social media' thing. 
    - A fair bit of the work was getting the social media sharing going. 
    - How would I do this on Instagram? 
    - But now I'm like, I don't know if I want to play that game. 

### Next Project - Tiny Massive

Turns out there are a bunch of generative art groups on Facebook etc. 

In one of them, someone advertised their light show in Iceland - asking for submissions for TinyMassive

![tinymassive](./assets/tinymassive.jpg)

This is a big building, essentially it's a 77x13 pixel array. 

My submission: 

https://tinymassive.herokuapp.com/

This submission was ultimately submitted, but I have no idea what it looked like. 

The idea I had was that people would use their smart phones to create submissions and it would go in a queue. But I had misread the submission guidelines, what they really wanted was for people to use a joy stick to control it. In anycase -the random function works fine. 

Things learned: 

- Entering light shows is a good practise, because it's timeboxed. 
- Using redux is good 
- I learned about using websockets. 

### Next project - White Night

A constant theme I've encounted so far, is the cludgeyness of the controls. 

So what about something that it's a bit more ethereal, so you don't have the users staring at a screen and getting confused. 

So what about physical interactions? 

- Initially I had thought about you could have balls that people throw around, and they have little arduinos in them tracking their XYZ coorderinates to control it. 
- But that's quite a lot of work. What about using the (that library), to trakc their feet? 
 - It's a C++ library - I couldn't get it working. 
- Wait, why not just use my webcam. It doesn't actually matter too much about being accurate. 

So that's what I've done on this submission. 

https://video-geoplanets.herokuapp.com/\

Things learned: 

- Using the webcam API
- Using p5.js
- A more generic redux data structure. 


## Let's get technical

I'm going to mostly focus on two frameworks for creating generative art, but first lets just mention some others and get them out of the way. 

### HTML5 Canvas API

This is one that I'll be talking about. 

Uses the browser native `<canvas>` element - and then we use

```
const context = Document.getElementById("myCanvas").getContext("2d"); 
```

To start interacting with it via JavaScript. 

There are a bunch of libraries that use the Canvas API.

### P5.js

P5.js is the javascript implementation of the processing framework. 

Processing was initially a java framework. Used for creating generative art. 

P5 uses the Canvas API under the hood. It abstracts some of the detail away. We'll get into some of the details later. 

### d3

An SVG based solution. Transforms data into SVG objects. 

### Three.JS

A WebGL based solution - designed for 3d rendering. 

### Unity 

Typically used for making games - but you can compile out to Javascript and Canvas these days. 

### CSS only? 

- See asinglediv.com

### Mechanical

You don't have to use computers to create generative art. 

(instagram video)
(paint drip video)


## Just Quickly - SVG vs Canvas

In one of my older jobs, I was building a node-and-edge graph visualisation tool, and had experimented with both a canvas-based and svg-based framework to do it. 

SVG
 - Better if you need to do mouseover, drag drop kinds of effects. 
 - If objects are discrete things with their own characterisitics
 - Not very good once you're talking about adding thousands of objects. 

Canvas
- Better if you have lots of objects
- If you are just drawing stuff, (or you are not interacting via mouse)


## Let's talk about Canvas

I'm just going to talk about the 2d context. 

You can do 3d rendering, which uses WebGL which will take advantage of your device's graphics processor. But that's not something I've ever got into. 

Something I'm quite interested in - is how the layering of 2d objects can cause 3d effects. 

Once you have a canvas context, then it's just a matter of drawing things on it. 

- Draw lines/shapes
- Draw image from asset
- Transform (rotate/translate/skew)
- Color blend modes

Optimisations: 

- `requestAnimationFrame`
- draw on non-rendered frame
- batch renders

- How to do temp vs perm layer? 

## P5.js

P5.js Takes care of all of these things for you. 

Instead you are just working in the `loop()` function.

Remmember that P5.js was written to be consistent with the processing library. 

ie. 

```
example here

setup - done once. 
loop, each loop. 
```





## Getting it set up. 

The way seems to be written is to applying a bunch of functions to the global scope. 

There is **instance mode**. 

I had difficulty getting it to run as a npm module. 

- p5 also has p5 plugins/libraries, for using sound, etc. 
- I couldn't see any instructions for setting it up with NPM 

So I ended up just importing it from the CDN in the head of my document. 

Show how I've set it up with react. 

### Some p5 specific things

- Use of UInt8 arrays. 

### P5.JS pros and cons

**Pros**

 - Lots of people using it. 

**Cons**

 - Use of global variables is scary/magic. 
 - Hard to get it to work as an NPM module. 
 - The bundle is pretty big. 

**Conclusion**: 

### How I got it working with react

(demo)


## Structuring the code tho. 

For now, we might have an idea of how to get stuff drawing on the screen, but what's the best way to write our code? 

Lets break the problem down to different areas of responsibility: 

- Actually drawing whatever object on. 
- Deciding what objects should be drawn on. 
- Controlling the algorithm that decides what gets drawn on. 

### Attempt 1 - Object Oriented Algorithms

This is what I did for my first attempt: 

We have the concepts of: 

- Algorithm
  - The whole shebang
  - Responsible for giving 'render hints' - (to display the controls)
  - Reponsible for giving a 'draw package' - (Lists of both the temporary and permenant objects)
  - Responsible for randomizing the parameters
  - REponsible for reseting the parameters. 

- Model
 - A 'sub algorithm'
 - More or less does the same things, except they alway shave a parent algoirthm
 - These things are all stateful - ie. they keep track of their own time and position/phase


- Parameter
 - Something that will be rendered to be controlled by the user
 - But also can just be a static thing that is not rendered (Because sometimes we don't want to give the user that much control). 

We have another library responsible for just geometry 

```
export class GradientLine extends DrawableObject {

	cp1: ColorPoint; 
	cp2: ColorPoint;
	size: number; 

	constructor(cp1 : ColorPoint, cp2 : ColorPoint, size = 1) {
		super();
		this.cp1 = cp1;
		this.cp2= cp2;

		this.size = size;
	}


	draw(context : CanvasRenderingContext2D){

		let p1 = adjustPosition(context, this.cp1.position);
		let p2 = adjustPosition(context, this.cp2.position);

		var gradient = context.createLinearGradient(p1.x,p1.y,p2.x,p2.y);

		gradient.addColorStop(0, this.cp1.color.toString());
		gradient.addColorStop(1, this.cp2.color.toString());

		context.strokeStyle = gradient;
		context.lineWidth = this.size;

		context.beginPath();
		context.moveTo(p1.x, p1.y);
		context.lineTo(p2.x, p2.y);
		context.stroke();

	}

}
```

This is pretty straight forward. 

In this case, it's object oriented - but this could just as easily be curried functions. 

### Rendering it to react: 

```
  renderTabPanels() {
    let panels = [];
    let algoParams = this.props.algorithm.getRenderHint();
    let i = 0;

    for (let [key, group] of Object.entries(algoParams)) {
      let rkey = [this.props.algorithm.name, "tab-panel", i++].join("-");

      panels.push(
        <TabPanel key={rkey}>
          {this.genericRender(group, key)}
        </TabPanel>
      );
    }

    this.setState({
      panels: panels    // I have no idea why I'm doing this
    });
  }
  
  
    render() {

    return (
      <div className="algorithmcontrols-component">
        <Tabs >
          <TabList>

            {this.state.tabs}
            {/* {this.renderTabs()} */}
          </TabList>
          {/* {this.renderTabPanels()} */}
          {this.state.panels}
        </Tabs>

      </div>
    );
  }


    genericRender(group, id) {

    return group.params.map(param => {

      switch (param.constructor) {
        case SimpleParameter: return this.renderParameter(param, id);
        case ColorParameter: return this.renderColor(param, id);
        default: return this.renderError(param, id);
      }

    })

  }

    renderColor(color, id) {
    color.id = [id, "color"].join("-");


    return <ComponentColorPicker color={color.getValue()} key={color.id}
      changeEvent={(v) => {

        let newColor = Object.assign(fullClone(color.getValue()), v);
        color.updateValue(newColor);
      }} />;

  
```


So essentially the strategy has been: 

- Define an algorithm as an Object Oriented _thing_, that each time its tick function is called, it looks at its paramenters, and returns the list of drawable objects
- The parameters are fetched directly by the user interface, which decides how they are rendered, and they directly update the parameters. 



There's a lot that scares me with this approach, so lets look at using redux: 

