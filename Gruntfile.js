module.exports = function(grunt){
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			'default': {
				files: ['Gruntfile.js', 'sass/*.scss'],
				tasks: ['sass:dev', 'autoprefixer']
			}
		},
		sass: {
			options:{
				sourceMap: true,
				outFile: "stylesheets/styles.css",
			},

			dev: {
				files: {
					'stylesheets/styles.css': 'sass/styles.scss'
				},
				options:{
					style: 'expanded',
				},
			},
		},
		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'Android >= 2.1', 'iOS >= 7'],
				map: {
					annotation: 'stylesheets/styles.css.map',
				}
				
			},
			prefix: {
				src: 'stylesheets/styles.css',
				dest: 'stylesheets/styles.css'
			},

		},
	});
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
}