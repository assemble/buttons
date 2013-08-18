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
    benchmarks: grunt.file.readJSON('benchmarks.json'),

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
        files: {'_demo/button-1/': ['button-1/index.hbs']}
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
      // Pages collection, array format.
      button7_1: {
        files: {'_demo/button-7/': ['button-7/index.hbs']},
        options: {
          data: ['button-7/button.json', 'benchmarks.json'],
          layout: 'component.hbs',
          partials: 'button-7/button.hbs',
          pages: '<%= benchmarks.pages.one %>'
        }
      },
      // Pages collection, array format.
      button8_1: {
        files: {'_demo/button-8/': ['button-8/index.hbs']},
        options: {
          data: 'button-8/*.json',
          layout: 'component.hbs',
          partials: 'button-8/button.hbs',
          pages: '<%= benchmarks.pages.two %>'
        }
      },
      // Pages collection, object format.
      button8_2: {
        files: {'_demo/button-8/': ['button-8/index.hbs']},
        options: {
          data: 'button-8/*.json',
          layout: 'component.hbs',
          partials: 'button-8/button.hbs',
          pages: '<%= benchmarks.pages.three %>'
        }
      },
      button9: {
        files: {'_demo/button-9/': ['button-9/index.hbs']},
        options: {
          data: 'button-9/*.json',
          layout: 'component.hbs',
          partials: 'button-9/button.hbs',
          pages: '<%= benchmarks.pages.four %>'
        }
      }
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
