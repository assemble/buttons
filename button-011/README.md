# Buttons Example #011

> Each button style has its own include dedicated include.

In the scope of this example:
* Our markup stays relatively simple and consistent across button modifiers
* We use `<a href=""></a>` tags for all modifiers, no `<input></input>` tags or `<button></button>` tags
* CSS modifier classes and button text are the only points of change across button variants.

## demo
### markup
* Our demo markup is included in the same template as our button components.
* All demo markup for the component is constrained to a single page.
* [layout](), `default.hbs`, is used to "wrap" the demo page with a common head and footer. This layout is defined in the Gruntfile, in Assemble's task-level options.

As important as the demo information is, having extraneous information about the demo embedded in the same template as our actual component might be distracting during development. Really, the primary focus should be our buttons. We should look for a way to externalize info about the demo.

### data
_NA_

## component
### markup
* Each `button` "modifier" is listed in full, versus externalizing the modifiers into "includes" or partial views.
* A total of 10 button includes were created, one for each modifier.

There is little advantage in repeating the same markup over and over again, we should try to look for ways to consolidate these partials into a single file. Considering this is just a button, 10 partials is a lot of "shelf space" to take up in a project. Since buttons will probably be amongst the simplest of components in your projects imagine how much this might compound with a more complicated and varied components.

### data
_NA_


