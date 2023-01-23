const passport = require('passport');
const User = require("../models/User");
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
});

// local strategy
passport.use(
    new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
        // Match User
        await User.findOne({ email: email })
            .then(user => {
                if(!user) {
                    const newUser = new User();
                    newUser.email = email;
                    newUser.password = password;
                    
                    bcrypt.getSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err) throw err;
                            newUser.password = hash;
                            console.log(hash);
                            newUser.save()
                            .then((user) => {
                                return done(null, user);
                            })
                            .catch((err) => {
                                return done(null, false, {message: err});
                            });
                        });
                    });

                } else {
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if(err) throw err;

                        if(isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, { message: "Wrong password" });
                        }
                    });
                }
            })
            .catch(err => {
                console.log(err);
                return done(null, false, { message: err });
            })
    })
)