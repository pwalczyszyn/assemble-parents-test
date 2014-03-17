/*global module:false*/
'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        assemble: {
            options: {
                layoutdir: 'src/layouts'
            },
            test: {
                options: {
                    layout: 'child.hbs',
                    parentLayout: 'parent.hbs'
                },
                files: [{
                    expand: true,
                    cwd: 'src/pages/',
                    src: 'test.hbs',
                    dest: 'dist/test.html'
                }]
            }
        }

    });

    grunt.loadNpmTasks('assemble');

    // Default task.
    grunt.registerTask('default', ['assemble']);

};
