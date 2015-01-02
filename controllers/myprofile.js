/**
 * Created by thomasnattestad on 1/1/15.
 */

var User = require('../models/User');

exports.index = function(req, res) {
  res.render('myProfile', {
    title: 'My Profile'
  });
};

/**
 * POST /account/profile
 * Update profile information.
 */

exports.postUpdateProfile = function(req, res, next) {
  User.findById(req.user.id, function(err, user) {
    if (err) return next(err);
    user.email = req.body.email || '';
    user.profile.name = req.body.name || '';
    user.profile.seeking = req.body.seeking || '';
    user.profile.gender = req.body.gender || '';
    user.profile.age = req.body.age || '';
    user.profile.location = req.body.location || '';
    user.profile.profession = req.body.profession || '';
    user.profile.religiousBeliefs = req.body.religiousBeliefs || '';

    user.profile.showName = req.body.showName == 'on';
    user.profile.showSeeking = req.body.showSeeking == 'on';
    user.profile.showGender = req.body.showGender == 'on';
    user.profile.showAge = req.body.showAge == 'on';
    user.profile.showLocation = req.body.showLocation == 'on';
    user.profile.showProfession = req.body.showProfession == 'on';
    user.profile.showReligiousBeliefs = req.body.showReligiousBeliefs == 'on';
    user.profile.showPicture = req.body.showPicture == 'on';

    user.save(function(err) {
      if (err) return next(err);
      req.flash('success', { msg: 'Profile information updated.' });
      res.redirect('/myprofile');
    });
  });
};