/* global module */
module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'app/assets/javascripts/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');


  // Default task(s).
  grunt.registerTask('lint', ['jshint']);
};