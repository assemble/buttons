# Buttons

> How many ways are there to assemble a button?

This project is an exercise in separation of concerns related to structure, style, content and data. The primary goal is to clearly demonstrate how to construct UI components, all while using buttons as the example,

## Conventions

For the purposes of this project let's agree that, in general:

* "component" refers to a user interface abstraction, such as a navbar, modal dialog, or in the case of this project, a button.
* "style" refers to CSS, including pre-processors (here we use LESS, possibly SASS).
* "structure" refers to HTML, including templates (here we use Handlebars templates).
* "content" refers to any audial (sound), visual (video or images) or textual content that can be experienced directly by the user on a website or web application.
* "data", as distinguished from content, refers to any data that is used for configuration and will not be directly experienced by the user. So while "Click Me!" would be considered the "content" of a button, any "modifier classes" of the button stored in JSON or YAML would be considered "data".

## Approach

Some examples enforce a strong separation of concerns between content, structure and style, other examples show how to leverage JavaScript helpers with advanced templates, while others are simply intended to help non-programmers get started. In general the  starting with "basic" examples that should be approachable for designers who have very little to no programming experience, all to "complex" examples that might appeal to more experienced programmers.

As a rule of thumb, each example in the project demonstrates a different approach to separating concerns and in general each example will build upon the last in order to demonstrate:

* increasing levels of complexity
* progressively higher levels of abstraction
* when applicable, different approaches or conventions for accomplishing the same goal

Also, since the project is expressly intended to be instructive, by necessity some of the examples _should not be idiomatic_, and no judgement is made concerning how much abstraction is necessary, good, bad, idiomatic or otherwise. The driving assumption being that _it is equally instructive to see examples where code is, say, more abstracted than it should be, as it is to see shining examples of perfection_. Especially when the user has the larger perspective of seeing multiple approaches for solving the same problem.

Bottom line, this project will give you examples and leave the opinions to you.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.
Lint and test your code using [grunt][http://gruntjs.com/].


## Author

**[Jon Schlinkert](https://github.com/jonschlinkert)**

+ [http://twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)
+ [http://github.com/jonschlinkert](http://github.com/jonschlinkert)



## Release History

 * 2013-03-06   v0.1.0   First commit.
