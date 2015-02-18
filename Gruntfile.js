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
                    'public/assets/js/vendor/vendor.min.js': [
                        'resources/assets/components/jquery/dist/jquery.js'
                    ]
                }
            },

            app: {
                files: {
                    'public/assets/js/main.min.js': ['resources/assets/javascript/main.js']
                }
            }
        },

        compass: {
            dist: {
                options: {
                    config: 'config.rb',
                    sourcemap: false
                }
            }
        },

        watch: {
            js: {
                files: ['resources/assets/javascript/**/*.js'],
                tasks: ['jshint', 'uglify:app']
            },

            sass: {
                files: ['resources/assets/scss/**/*.scss'],
                tasks: ['compass']
            }
        },

        fontgen: {
            all: {
                options: {
                    path_prefix: 'fonts/',
                    stylesheet: 'resources/assets/scss/components/_font-face.scss',
                },

                files: [{
                    src: [
                        'public/assets/css/fonts/*.otf',
                        'public/assets/css/fonts/*.ttf'
                    ],

                    dest: 'public/assets/css/fonts'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-fontgen');
    grunt.loadNpmTasks('grunt-notify');

    // tasks
    grunt.registerTask('default', ['compass', 'uglify', 'watch']);
    // grunt.registerTask('generate-font-faces', ['fontgen']);
};
