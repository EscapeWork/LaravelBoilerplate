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
                    config: 'config.rb',
                    sourcemap: true
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
        },

        fontgen: {
            options: {
                // Task-specific options go here.
            },

            all: {
                options: {
                    path_prefix: 'fonts/',
                    stylesheet: 'public/assets/stylesheets/scss/components/_font-face.scss',
                },

                files: [{
                    src: [
                        'public/assets/stylesheets/css/fonts/*.otf',
                        'public/assets/stylesheets/css/fonts/*.ttf'
                    ],

                    dest: 'public/assets/stylesheets/css/fonts'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-fontgen');
    grunt.loadNpmTasks('grunt-notify');

    // tasks
    grunt.registerTask('default', ['jshint', 'uglify', 'compass', 'watch']);
    grunt.registerTask('generate-font-faces', ['fontgen']);
};
