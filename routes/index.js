var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var randomNumber=Math.random().toString();
  randomNumber=randomNumber.substring(2,randomNumber.length);

  res.cookie('_a',randomNumber, {expires: new Date(Date.now() + 31536000),httpOnly: false, secure: false });
  res.cookie('_b',randomNumber, {expires: new Date(Date.now() + 31536000),httpOnly: true, secure: false });
  res.cookie('_c',randomNumber, {expires: new Date(Date.now() + 31536000),httpOnly: false, secure: true });
  res.cookie('_d',randomNumber, {expires: new Date(Date.now() + 31536000),httpOnly: true, secure: true });
  res.cookie('_e',randomNumber, {expires: new Date(Date.now() + 31536000),httpOnly: false, secure: false, sameSite: 'Lax' });
  res.cookie('_f',randomNumber, {expires: new Date(Date.now() + 31536000),httpOnly: true, secure: false, sameSite: 'Lax' });
  res.cookie('_g',randomNumber, {expires: new Date(Date.now() + 31536000),httpOnly: false, secure: false, sameSite: 'Lax' });
  res.cookie('_h',randomNumber, {expires: new Date(Date.now() + 31536000),httpOnly: true, secure: true, sameSite: 'Lax' });
  res.cookie('_i',randomNumber, {expires: new Date(Date.now() + 31536000),httpOnly: false, secure: false, sameSite: 'Strict' });
  res.cookie('_j',randomNumber, {expires: new Date(Date.now() + 31536000),httpOnly: true, secure: false, sameSite: 'Strict' });
  res.cookie('_k',randomNumber, {expires: new Date(Date.now() + 31536000),httpOnly: false, secure: false, sameSite: 'Strict' });
  res.cookie('_l',randomNumber, {expires: new Date(Date.now() + 31536000),httpOnly: true, secure: true, sameSite: 'Strict' });


  res.render('index', { title: 'Server Side Cookies' });
});

module.exports = router;
