module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        coffee : {
            compile : {
                files : {
                    'public/assets/javascripts/js/main.js' : [
                        'public/assets/javascripts/coffee/main.coffee'
                    ]
                }
            }
        },

        uglify : {
            my_target : {
                files : {
                    'public/assets/javascripts/js/main.min.js' : ['public/assets/javascripts/js/main.js']
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

        watch : {
            coffee : {
                files : ['public/assets/javascripts/coffee/**/*.coffee'],
                tasks: ['coffee', 'uglify']
            },

            sass : {
                files : ['public/assets/stylesheets/scss/**/*.scss'],
                tasks: ['compass']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['coffee', 'uglify', 'compass', 'watch']);
}
