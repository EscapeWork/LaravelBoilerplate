module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: [
                'Gruntfile.js',
                'public/assets/javascripts/js/**/*.js'
            ]
        },

        uglify: {
            vendors: {
                files: {
                    'public/assets/javascripts/min/vendor.min.js': ['public/assets/components/jquery/dist/jquery.js']
                }
            },

            app: {
                files: {
                    'public/assets/javascripts/min/main.min.js': ['public/assets/javascripts/js/main.js']
                }
            }
        },

        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },

        watch: {
            js: {
                files: ['public/assets/javascripts/js/**/*.js'],
                tasks: ['jshint', 'uglify:app']
            },

            sass: {
                files: ['public/assets/stylesheets/scss/**/*.scss'],
                tasks: ['compass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', ['jshint', 'uglify', 'compass', 'watch']);
};
