var Q = require('q');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;

class AuthSrv {
    
    constructor(UserModel) {
        this.user = UserModel;
    }

    LocalAuthenticate() {
        var deferred = Q.defer();
        passport.use(new LocalStrategy(this.user.authenticate()));
        passport.authenticate('local', { session: false }, (err, user, info) => 
            {      
                if (info) {
                    if (info.message == "Missing credentials")
                        deferred.reject({ code: 400, message: info.message });
                }
                if (err) 
                    deferred.reject(err);
                if (!user)
                    deferred.reject({ code: 401, message: "Invalid credential" });
                else
                    deferred.resolve(user);
            }
        );
    }

    JwtCheckAccess() {
        // verifie la validité du jwt
    }

    JwtGenerateToken() {
        
    }

}