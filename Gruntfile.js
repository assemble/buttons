/*
 * button-component
 * https://github.com/upstage/button-component
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Values for repeat helper, see example #5.
    repeat: {
      expandright: 50,
      expandleft: 70,
      expandup: 80,
      expanddown: 50,
      slideleft: 25,
      slideright: 50,
      slideup: 25,
      slidedown: 200,
      zoomout: 100,
      zoomin: 25
    },

    assemble: {
      options: {
        prettify: {
          indent: 2
        },
        flatten: true,
        assets: '_demo/assets',
        helpers: 'templates/helpers/*.js',
        partials: 'templates/includes/*.hbs',
        layoutdir: 'templates',
        layout: 'layout.hbs',
      },
      button1: {
        files: {'_demo/button-1/': ['button-1/index.hbs']},
        options: {
          partials: 'button-1/button.hbs'
        }
      },
      button2: {
        files: {'_demo/button-2/': ['button-2/index.hbs']},
        options: {
          partials: 'button-2/button.hbs',
          data: 'button-2/*.json'
        }
      },
      button3: {
        files: {'_demo/button-3/': ['button-3/index.hbs']},
        options: {
          partials: 'button-3/button.hbs',
          data: 'button-3/*.json'
        }
      },
      button4: {
        files: {'_demo/button-4/': ['button-4/index.hbs']},
        options: {
          partials: 'button-4/button.hbs',
          data: 'button-4/*.json'
        }
      },
      button5: {
        files: {'_demo/button-5/': ['button-5/index.hbs']},
        options: {
          partials: 'button-5/button.hbs',
          data: 'button-5/*.json'
        }
      },
      button6: {
        files: {'_demo/button-6/': ['button-6/index.hbs']},
        options: {
          partials: 'button-6/button.hbs',
          data: 'button-6/*.json'
        }
      },
      // Pages collection, array format. Busy busy busy.
      button7_1: {
        files: {'_demo/button-7/': ['button-7/index.hbs']},
        options: {
          data: 'button-7/button.json',
          layout: 'component.hbs',
          partials: 'button-7/button.hbs',
          pages: [
            {
              filename: 'button-7-1.html',
              data: {
                demo: {
                  title: "Example 7-1: Topcoat Buttons + Effeckt.css",
                  component: "buttons",
                  modifier: "effeckt-demo-buttons",
                  source: {name: "Hakim El Hattab", url: "http://lab.hakim.se/effeckt/"}
                }
              },
              // all the buttons...
              content: '\n{{#each button}} <div class="button-demo-wrap"> {{> button }} </div> {{/each}}'
            },
            {
              filename: 'button-7-2.html',
              data: {
                demo: {
                  title: "Example 7-2: Topcoat Buttons + Effeckt.css",
                  component: "buttons",
                  modifier: "effeckt-demo-buttons",
                  source: {name: "Hakim El Hattab", url: "http://lab.hakim.se/effeckt/"}
                }
              },
              // And... one button, repeating itself.
              content: '\n{{#repeat 15}} <div class="button-demo-wrap"> {{> button button.expand-right }} </div> {{/repeat}}'
            },
            {
              filename: 'button-7-3.html',
              data: grunt.file.readJSON('button-7/demo.json'), // just changing it up
              content: '\n{{#repeat 15}} <div class="button-demo-wrap"> {{> button button.expand-right }} </div> {{/repeat}}'
            }
          ]
        }
      },
      // Pages collection, array format. Much cleaner.
      button8_1: {
        files: {'_demo/button-8/': ['button-8/index.hbs']},
        options: {
          data: 'button-8/*.json',
          layout: 'component.hbs',
          partials: 'button-8/button.hbs',
          pages: [
            {filename: 'button-01-expand-right.html', content: '\n<div class="button-demo-wrap"> {{> button button.expand-right }} </div>'},
            {filename: 'button-01-expand-left.html',  content: '\n<div class="button-demo-wrap"> {{> button button.expand-left }} </div>'},
            {filename: 'button-01-expand-up.html',    content: '\n<div class="button-demo-wrap"> {{> button button.expand-up }} </div>'},
            {filename: 'button-01-expand-down.html',  content: '\n<div class="button-demo-wrap"> {{> button button.expand-down }} </div>'},
            {filename: 'button-01-slide-left.html',   content: '\n<div class="button-demo-wrap"> {{> button button.slide-left }} </div>'},
            {filename: 'button-01-slide-right.html',  content: '\n<div class="button-demo-wrap"> {{> button button.slide-right }} </div>'},
            {filename: 'button-01-slide-up.html',     content: '\n<div class="button-demo-wrap"> {{> button button.slide-up }} </div>'},
            {filename: 'button-01-slide-down.html',   content: '\n<div class="button-demo-wrap"> {{> button button.slide-down }} </div>'},
            {filename: 'button-01-zoom-out.html',     content: '\n<div class="button-demo-wrap"> {{> button button.zoom-out }} </div>'},
            {filename: 'button-01-zoom-in.html',      content: '\n<div class="button-demo-wrap"> {{> button button.zoom-in }} </div>'}
          ]
        }
      },
      // Pages collection, object format.
      button8_2: {
        files: {'_demo/button-8/': ['button-8/index.hbs']},
        options: {
          data: 'button-8/*.json',
          layout: 'component.hbs',
          partials: 'button-8/button.hbs',
          pages: {
            'button-02-expand-right.html': {
              content: '\n<div class="button-demo-wrap"> {{> button button.expand-right }} </div>'
            },
            'button-02-expand-left.html': {
              content: '\n<div class="button-demo-wrap"> {{> button button.expand-left }} </div>'
            },
            'button-02-expand-up.html': {
              content: '\n<div class="button-demo-wrap"> {{> button button.expand-up }} </div>'
            },
            'button-02-expand-down.html': {
              content: '\n<div class="button-demo-wrap"> {{> button button.expand-down }} </div>'
            },
            'button-02-slide-left.html': {
              content: '\n<div class="button-demo-wrap"> {{> button button.slide-left }} </div>'
            },
            'button-02-slide-right.html': {
              content: '\n<div class="button-demo-wrap"> {{> button button.slide-right }} </div>'
            },
            'button-02-slide-up.html': {
              content: '\n<div class="button-demo-wrap"> {{> button button.slide-up }} </div>'
            },
            'button-02-slide-down.html': {
              content: '\n<div class="button-demo-wrap"> {{> button button.slide-down }} </div>'
            },
            'button-02-zoom-out.html': {
              content: '\n<div class="button-demo-wrap"> {{> button button.zoom-out }} </div>'
            },
            'button-02-zoom-in.html': {
              content: '\n<div class="button-demo-wrap"> {{> button button.zoom-in }} </div>'
            }
          }
        }
      },
      // Pages collection, array format. Lodash templates, wait omg they're inside the Handlebars templates! Wha?!...
      button9: {
        files: {'_demo/button-9/': ['button-9/index.hbs']},
        options: {
          data: 'button-9/*.json',
          layout: 'component.hbs',
          partials: 'button-9/button.hbs',
          pages: [
            {
              filename: 'button-expandright.html',
              content: '\n{{#repeat <%= repeat.expandright %>}} <div class="button-demo-wrap"> {{> button button.expand-right }} </div> {{/repeat}}'
            },
            {
              filename: 'button-expandleft.html',
              content: '\n{{#repeat <%= repeat.expandleft %>}} <div class="button-demo-wrap"> {{> button button.expand-left }} </div> {{/repeat}}'
            },
            {
              filename: 'button-expandup.html',
              content: '\n{{#repeat <%= repeat.expandup %>}} <div class="button-demo-wrap"> {{> button button.expand-up }} </div> {{/repeat}}'
            },
            {
              filename: 'button-expanddown.html',
              content: '\n{{#repeat <%= repeat.expanddown %>}} <div class="button-demo-wrap"> {{> button button.expand-down }} </div> {{/repeat}}'
            },
            {
              filename: 'button-slideleft.html',
              content: '\n{{#repeat <%= repeat.slideleft %>}} <div class="button-demo-wrap"> {{> button button.slide-left }} </div> {{/repeat}}'
            },
            {
              filename: 'button-slideright.html',
              content: '\n{{#repeat <%= repeat.slideright %>}} <div class="button-demo-wrap"> {{> button button.slide-right }} </div> {{/repeat}}'
            },
            {
              filename: 'button-slideup.html',
              content: '\n{{#repeat <%= repeat.slideup %>}} <div class="button-demo-wrap"> {{> button button.slide-up }} </div> {{/repeat}}'
            },
            {
              filename: 'button-slidedown.html',
              content: '\n{{#repeat <%= repeat.slidedown %>}} <div class="button-demo-wrap"> {{> button button.slide-down }} </div> {{/repeat}}'
            },
            {
              filename: 'button-zoomout.html',
              content: '\n{{#repeat <%= repeat.zoomout %>}} <div class="button-demo-wrap"> {{> button button.zoom-out }} </div> {{/repeat}}'
            },
            {
              filename: 'button-zoomin.html',
              content: '\n{{#repeat <%= repeat.zoomin %>}} <div class="button-demo-wrap"> {{> button button.zoom-in }} </div> {{/repeat}}'
            },
          ]
        }
      },
      // Placeholder for a navigation example.
      // index: {
      //   files: {'_demo/': ['templates/index.hbs']},
      // }
    },

    // Before creating new files, remove files from previous build.
    clean: ['_demo/**/*.html']

  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task to be run.
  grunt.registerTask('default', ['clean', 'assemble']);

};
