/**
 * @method exports
 * @param {} grunt
 * @return 
 */
module.exports = function(grunt) {
  grunt.initConfig ({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        // beautify: true // useful in debugging
        mangle: false,
        sourceMap: true,
        sourceMapName: 'client/js/script.map'
      },
      my_target: {
        files: {
          'client/js/*.js': ['client/modules/*.js']
        } 
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {   
          'public/stylesheets/style.css': 'sass/style.scss' 
        }
      }
    },
    jasmine: {
      src: 'src/**/*.js',
      options: {
        specs: 'spec/**/*.js'
      }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'src/**/*.js',
        'spec/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    wiredep: {
      task: {
        src: [
          'views/*.jade'
        ]
      }
    },
    watch: {
        jade: {
          files: ['views/*.jade'],
          options: {
            livereload: true
          }
        },
        css: {
          files: ['sass/**/*.scss'],
          tasks: ['sass'],
          options: {
            livereload: 1771
            }
          }
        }
  });
  // Load grunt plugin for sass
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

// Default to force:true to keep project running
grunt.option('force', true);

  // Default task
  grunt.registerTask('test', ['jshint','jasmine']);
  grunt.registerTask('default', ['test', 'sass', 'wiredep']);
};


