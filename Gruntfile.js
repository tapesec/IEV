module.exports = function(grunt) {


  grunt.initConfig({
      babel: {
        dist: {
            files: {
                'controllers/es5/SignInCtrl.js': 'controllers/es6/SignInCtrl.js',
                'controllers/es5/index.js': 'controllers/es6/index.js',
                'services/es5/AuthSrv.js': 'services/es6/AuthSrv.js'
            }
        }
      },
      watch: {
        files: ['controllers/**/*.js', 'services/**/*.js'],
        tasks: ['babel']
      }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-babel');
  grunt.registerTask('default', ['babel']);

};