module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		webpack: {
			build: {
				devtool: 'source-map',
				entry: './index.js',
				output: {
					library: 'CurrencyResolver',
					path: 'dist/',
					filename: 'CurrencyResolver.js'
				}
			}
		},

		uglify: {
			build: {
				files: {
					'dist/CurrencyResolver-min.js': ['dist/CurrencyResolver.js']
				}
			}
		},

		banner: '/**\n * CurrencyResolver.js v<%= pkg.version %>\n */',
		usebanner: {
			dist: {
				options: {
					position: 'top',
					banner: '<%= banner %>'
				},
				files: {
					'dist/CurrencyResolver.js': ['dist/CurrencyResolver.js'],
					'dist/CurrencyResolver-min.js': ['dist/CurrencyResolver-min.js']
				}
			}
		},

		jshint: {
			options: {
				jshintrc: true
			},
			all: ['./*.js', './test/*.js']
		},

		jasmine_node: {
			options: {
				specs: 'test/*.spec.js'
			},
			src: ['./index.js']
		},
		watch: {
			jasmine: {
				files: ['test/*.js'],
				tasks: ['test']
			}
		}
	});

	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jasmine-node');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['jshint', 'webpack', 'uglify', 'usebanner']);
	grunt.registerTask('test', ['jshint', 'jasmine_node']);
};