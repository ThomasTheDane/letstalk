var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,

  google: String,

  profile: {
    name: { type: String, default: '' },
    showName: {type: Boolean, default: true},

    seeking: {type: String, default: ''},
    showSeeking: {type: Boolean, default: true},

    gender: { type: String, default: '' },
    showGender: {type: Boolean, default:true},

    age: {type: String, default: ''},
    showAge: {type: Boolean, default: true},

    location: { type: String, default: '' },
    showLocation: {type: Boolean, default: true},

    picture: { type: String, default: '' },
    showPicture: {type: Boolean, default:true},

    profession: {type: String, default: ''},
    showProfession: {type: Boolean, default:true},

    religiousBeliefs: {type: String, default: ''},
    showReligiousBeliefs: {type: Boolean, default: false},

    rating: {type: Number, default: 0}
  },

  resetPasswordToken: String,
  resetPasswordExpires: Date
});

/**
 * Password hashing Mongoose middleware.
 */

userSchema.pre('save', function(next) {
  var user = this;

  if (!user.isModified('password')) { return next(); }

  bcrypt.genSalt(5, function(err, salt) {
    if (err) { return next(err); }

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

/**
 * Helper method for validationg user's password.
 */

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return cb(err); }
    cb(null, isMatch);
  });
};

/**
 * Helper method for getting user's gravatar.
 */

userSchema.methods.gravatar = function(size) {
  if (!size) { size = 200; }

  if (!this.email) {
    return 'https://gravatar.com/avatar/?s=' + size + '&d=retro';
  }

  var md5 = crypto.createHash('md5').update(this.email).digest('hex');
  return 'https://gravatar.com/avatar/' + md5 + '?s=' + size + '&d=retro';
};

module.exports = mongoose.model('User', userSchema);
