module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        coffee : {
            compile : {
                files : {
                    'public/assets/javascripts/js/main.min.js' : [ 
                        'public/assets/javascripts/coffee/main.coffee'
                    ]
                }
            }
        },

        uglify : {
            my_target : {
                files : { 
                    'public/assets/javascripts/js/main.min.js' : [ 'public/assets/javascripts/js/main.min.js' ]
                }
            }
        },

        sass : {
            dist : {
                files : {
                    'public/assets/stylesheets/css/main.css' : [ 'public/assets/stylesheets/scss/main.scss' ],
                }
            }, options : {
                compass : true,
                style: 'compressed'
            }
        },

        // concat : {
        //     css: {
        //         src: [
        //             'public/assets/css/vendor/modal/jquery.modal.css',
        //             'public/assets/css/vendor/slide/jquery.slide.css',
        //             'public/assets/css/vendor/fancybox/jquery.fancybox.css'
        //         ],
        //         dest: 'public/assets/css/vendor/vendor.min.css'
        //     }
        // },

        watch : {
            coffee : {
                files : [ 'public/assets/javascripts/coffee/**/*.coffee' ],
                tasks: ['coffee', 'uglify']
            },
            sass : {
                files : [ 'public/assets/stylesheets/scss/**/*.scss' ],
                tasks: ['sass']
            }
        }

    });
    
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
   
    grunt.registerTask('default', ['coffee', 'sass', 'uglify', 'watch']);

}