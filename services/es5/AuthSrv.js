'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Q = require('q');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;

var AuthSrv = (function () {
    function AuthSrv(UserModel) {
        _classCallCheck(this, AuthSrv);

        this.user = UserModel;
    }

    _createClass(AuthSrv, [{
        key: 'LocalAuthenticate',
        value: function LocalAuthenticate() {
            var deferred = Q.defer();
            passport.use(new LocalStrategy(this.user.authenticate()));
            passport.authenticate('local', { session: false }, function (err, user, info) {
                if (info) {
                    if (info.message == 'Missing credentials') deferred.reject({ code: 400, message: info.message });
                }
                if (err) deferred.reject(err);
                if (!user) deferred.reject({ code: 401, message: 'Invalid credential' });else deferred.resolve(user);
            });
        }
    }, {
        key: 'JwtCheckAccess',
        value: function JwtCheckAccess() {}
    }, {
        key: 'JwtGenerateToken',
        value: function JwtGenerateToken() {}
    }]);

    return AuthSrv;
})();

// verifie la validité du jwt
