module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: [
                'Gruntfile.js',
                'resources/assets/javascript/**/*.js'
            ]
        },

        uglify: {
            app: {
                files: [{
                    expand: true,
                    src: '**/*.js',
                    dest: 'public/assets/js',
                    cwd: 'resources/assets/javascript',
                    ext: '.min.js'
                }]
            },

            vendors: {
                files: {
                    'public/assets/js/vendor/vendor.min.js': [
                        'resources/assets/components/jquery/dist/jquery.js',
                        'resources/assets/components/bootstrap-sass/assets/javascripts/bootstrap/modal.js'
                    ]
                }
            }

        },

        copy: {
            vendor: {
                files: [
                    {   // jquery inputmask
                        src: ['resources/assets/components/jquery.inputmask/dist/jquery.inputmask.bundle.min.js'],
                        dest: 'public/assets/js/vendor/jquery.inputmask.min.js'
                    }
                ]
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
            sass: {
                files : ['resources/assets/scss/**/*.scss'],
                tasks: ['compass'],
                options: {port: 62076, livereload: true}
            },

            js: {
                files: ['resources/assets/javascript/**/*.js'],
                tasks: ['jshint', 'uglify:app'],
                options: {port: 62076, livereload: true}
            },

            views: {
                files: ['resources/views/**'],
                options: {port: 62076, livereload: true}
            }
        },

        favicons: {
            options: {
                trueColor: true,
                precomposed: true,
                appleTouchBackgroundColor: "#fff",
                coast: true,
                windowsTile: true,
                tileBlackWhite: false,
                tileColor: "auto",
                html: 'resources/views/app/inc/favicons.blade.php',
                HTMLPrefix: "/assets/images/icons/"
            },
            icons: {
                src: 'public/assets/images/icons/favicon.png',
                dest: 'public/assets/images/icons'
            }
        },

        fontgen: {
            options: {
                // Task-specific options go here.
            },

            all: {
                options: {
                    path_prefix: 'fonts/',
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
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-favicons');
    grunt.loadNpmTasks('grunt-fontgen');

    grunt.registerTask('default', ['copy', 'jshint', 'uglify', 'compass', 'watch']);
};
