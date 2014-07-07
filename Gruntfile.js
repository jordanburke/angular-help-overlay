module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		files : {
			src: ['src/angular-help-overlay.js']
		},
		
		jshint: {
			all: {
				src: '<%= files.src %>'
			}
		},
		
		concat: {
			dist: {
				src: '<%= files.src %>',
				dest: 'lib/<%= pkg.name %>.js'
			}
		},
		
		uglify: {
			options: {
				preserveComments: false,
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
				report: 'min',
				compress: {
					drop_console: true
				}
			},
			dist: {
				files: {
					'lib/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		
		watch : {
			js: {
				files: '<%= files.src %>',
				tasks: ['jshint', 'concat']
			}
		},
		
		connect: {
			server: {
				options: {
					port: 8000,
					base: '.',
					keepalive: true
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};