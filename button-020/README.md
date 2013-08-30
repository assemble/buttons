# Buttons Example #2

> Basic example, with component externalized.

### index.hbs

* `button` component is externalized to a `buttons.hbs`.
* Demo page, `index.hbs`, lists out each button modifier as a separate "include".
* [layout](), `default.hbs`, is used to "wrap" the demo page with a common head and footer. This layout is defined in the Gruntfile, in Assemble's task-level options.
* Each `button` "modifier" is listed in full, versus externalizing the modifiers into "includes" or partial views.
* Extraneous information about the demo is also embedded in the HTML with the component examples.