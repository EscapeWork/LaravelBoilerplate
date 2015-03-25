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

        copy: {
            vendor: {
                files: [
                    {   // vendor.min.js
                        src: ['resources/assets/components/jquery/dist/jquery.min.js'],
                        dest: 'public/assets/vendor/vendor.min.js'
                    },

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
                files : ['respurces/assets/scss/**/*.scss'],
                tasks: ['compass']
            },

            js: {
                files: ['resources/assets/javascript/**/*.js'],
                tasks: ['jshint', 'uglify:app']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', ['copy', 'jshint', 'uglify', 'compass', 'watch']);
};
