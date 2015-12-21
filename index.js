

var express = require('express');
var router = express.Router();
var GPIOlib = require('gpio-switcher');


var GPIO = new GPIOlib();

router.post('/load', function(req, res) {
  GPIO.load(req.body).then(function(a){
    res.json(a)
  }).catch(function(err){
    res.json(err)
  })

});


// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});


router.post('/:pin/on', function (req, res) {

  GPIO.on(req.params.pin).then(function(a){
    res.json(a)
  }).catch(function(err){
    res.json({error:err})


  })
});
router.post('/:pin/off', function (req, res) {

  GPIO.off(req.params.pin).then(function(a){
    res.json(a)
  }).catch(function(err){
    res.json({error:err})


  })
});

router.get('/:pin/switch', function (req, res) {

  GPIO.switch(req.params.pin).then(function(a){
    res.json(a)
  }).catch(function(err){
    res.json({error:err})


  })
});

router.get('/test', function (req, res) {
  var t={
    pin:17,
    direction:'out',
    normal:false,
    label:'u',
    group:'gpio'
  }
  console.log('locals')
  console.log('locals')

  GPIO.set(t).then(function(a){
    console.log(GPIO.pins)
    GPIO.switch(17).then(function(a){
      res.json(a)
    }).catch(function(err){
      res.json({error:err})


    })

    }).catch(function(err){
      res.json({error:err})


    });

});


module.exports = function(aa){
  console.log(aa)
  return router;
}
