module.exports = function(grunt) {
    // Load NPM tasks here...

    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Application specific tasks
		cssmin: {
		  minify: {
		    expand: true,
		    cwd: 'css/',
		    src: ['*.css', '!*.min.css'],
		    dest: 'css/',
		    ext: '.min.css'
		  }
		},
        less: {
			production: {
				files: {
					'css/matthew.css': 'less/matthew.less',
				}
			}
		},
		watch: {
			options: {
				 livereload: true,
			},
			less: {
				files: [ 
					'less/*.less'
				],
				tasks: [ 'less:production', 'cssmin' ],
				options: {
					nospawn: false,
				}
			}
		}

    });

    // Default task(s).
    grunt.registerTask('default', [ 'less:production', 'cssmin', 'watch' ]);


};
