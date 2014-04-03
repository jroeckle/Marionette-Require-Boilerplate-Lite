module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: './public/css/*.css',
                dest: './public/build/css/concat.css'
            }
        },
        requirejs: {
            mainJS: {
                options: {
                    baseUrl: "public/js/app",
                    paths: {
                        "app": "config/Init"
                    },
                    wrap: false,
                    name: "../libs/almond/almond",
                    preserveLicenseComments: false,
                    optimize: "none",
                    mainConfigFile: "public/js/app/config/Init.js",
                    include: ["app"],
                    out: "public/js/app/config/Init.min.js"
                }
            },
            mainCSS: {
                options: {
                    optimizeCss: "standard",
                    cssIn: "./public/build/css/concat.css",
                    out: "./public/css/app.min.css"
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'public/js/app/**/*.js', '!public/js/app/**/*min.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: false,
                    module: true,
                    document: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('build', ['concat:css','requirejs:mainJS', 'requirejs:mainCSS']);
    grunt.registerTask('default', ['build']);

};