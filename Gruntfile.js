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
    benchmarks: grunt.file.readJSON('data/benchmarks.json'),

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
        flatten: true,
        prettify: {
          indent: 2,
          condense: true,
          newlines: true
        },
        assets: '_demo/assets',
        helpers: 'templates/helpers/*.js',
        partials: 'templates/includes/*.hbs',
        layoutdir: 'templates/layouts',
        layout: 'default.hbs',
      },
      button000: {
        files: {'_demo/button-000/': ['button-000/index.html']},
        options: {layout: 'none'}, // override task-level layout
      },
      button010: {
        files: {'_demo/button-010/': ['button-010/index.hbs']}
      },
      button011: {
        files: {'_demo/button-011/': ['button-011/index.hbs']},
        options: {partials: 'button-011/includes/*.hbs'}
      },
      button020: {
        files: {'_demo/button-020/': ['button-020/index.hbs']},
        options: {
          partials: 'button-020/button.hbs',
          data: 'button-020/*.json'
        }
      },
      button021: {
        files: {'_demo/button-021/': ['button-021/index.hbs']},
        options: {
          partials: 'button-021/button.hbs',
          data: 'button-021/*.json'
        }
      },
      button030: {
        files: {'_demo/button-030/': ['button-030/index.hbs']},
        options: {
          partials: 'button-030/button.hbs',
          data: 'button-030/*.json'
        }
      },
      button040: {
        files: {'_demo/button-040/': ['button-040/index.hbs']},
        options: {
          partials: 'button-040/button.hbs',
          data: 'button-040/*.json',
          styles: 'button-040/styles.css'
        }
      },
      button041: {
        files: {'_demo/button-041/': ['button-041/index.hbs']},
        options: {
          partials: 'button-041/button.hbs',
          data: 'button-041/*.json',
          styles: 'button-041/styles.css'
        }
      },
      button050: {
        files: {'_demo/button-050/': ['button-050/index.hbs']},
        options: {
          partials: 'button-050/button.hbs',
          data: 'button-050/*.json'
        }
      },
      button060: {
        files: {'_demo/button-060/': ['button-060/index.hbs']},
        options: {
          partials: 'button-060/button.hbs',
          data: 'button-060/*.json'
        }
      },
      // Pages collection, array format.
      button070: {
        files: {'_demo/button-070/': ['button-070/index.hbs']},
        options: {
          layout: 'component.hbs',
          pages: '<%= benchmarks.pages.one %>',
          partials: 'button-070/button.hbs',
          data: ['button-070/button.json', 'benchmarks.json'],
        }
      },
      // Pages collection, array format.
      button080: {
        files: {'_demo/button-080/': ['button-080/index.hbs']},
        options: {
          layout: 'component.hbs',
          pages: '<%= benchmarks.pages.two %>',
          partials: 'button-080/button.hbs',
          data: 'button-080/*.json',
        }
      },
      // Pages collection, object format.
      button081: {
        files: {'_demo/button-081/': ['button-080/index.hbs']},
        options: {
          layout: 'component.hbs',
          pages: '<%= benchmarks.pages.three %>',
          partials: 'button-080/button.hbs',
          data: 'button-080/*.json',
        }
      },
      button090: {
        files: {'_demo/button-090/': ['button-090/index.hbs']},
        options: {
          layout: 'component.hbs',
          pages: '<%= benchmarks.pages.four %>',
          partials: 'button-090/button.hbs',
          data: 'button-090/*.json',
        }
      },
      buttoni18n: {
        files: {'_demo/button-i18n/': ['button-i18n/index-*.hbs']},
        options: {
            data: 'button-i18n/**/*.json'
        }
      },
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
