'use strict';

module.exports = {
  client: {
    lib: {
      css: [
       /* 'public/lib/bootstrap/dist/css/bootstrap.css',
         'public/lib/bootstrap/dist/css/bootstrap-theme.css'*/
          'public/lib/theme/css/bootstrap.min.css',
        'public/lib/theme/css/creative.css',
        'public/lib/theme/css/animate.min.css',
        'public/lib/theme/font-awesome/css/font-awesome.min.css'
      ],
      js: [
        'public/lib/angular/angular.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/angular-ui-utils/ui-utils.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-file-upload/angular-file-upload.js',
        'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
        'public/theme/**/js/*.js',
        'public/lib/ui-grid/ui-grid.min.js',
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'modules/*/client/css/*.css',
      'public/theme/**/css/*.css',
      'public/theme/**/css/font-awesome/**/css/*.css',
      'public/lib/ui-grid/ui-grid.css',
    ],
    less: [
      'modules/*/client/less/*.less',
      'public/theme/**/css/font-awesome/**/less/*.less'
    ],
    sass: [
      'modules/*/client/scss/*.scss'
    ],
    js: [
      'modules/core/client/app/config.js',
      'modules/core/client/app/init.js',
      'modules/*/client/*.js',
      'modules/*/client/**/*.js'
    ],
    views: ['modules/*/client/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: 'gruntfile.js',
    gulpConfig: 'gulpfile.js',
    allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    models: 'modules/*/server/models/**/*.js',
    routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    sockets: 'modules/*/server/sockets/**/*.js',
    config: 'modules/*/server/config/*.js',
    policies: 'modules/*/server/policies/*.js',
    views: 'modules/*/server/views/*.html'
  }
};
