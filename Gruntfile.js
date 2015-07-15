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
            }
        },

        concat: {
            vendors: {   // vendor.min.js
                src: [
                    'resources/assets/components/jquery/dist/jquery.min.js',
                    'resources/assets/components/bootstrap/modal.js'
                ],
                dest: 'public/assets/vendor/vendor.min.js'
            }
        },

        copy: {
            vendor: {
                files: [
                    {   // jquery inputmask
                        src: ['resources/assets/components/jquery.inputmask/dist/jquery.inputmask.bundle.min.js'],
                        dest: 'public/assets/vendor/jquery.inputmask.min.js'
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
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-fontgen');

    grunt.registerTask('default', ['copy', 'concat', 'jshint', 'uglify', 'compass', 'watch']);
    // grunt.registerTask('generate-font-faces', ['fontgen']);
};
