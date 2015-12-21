

var express = require('express');
var router = express.Router();
var GPIOlib = require('gpio-switcher');


var GPIO = new GPIOlib();

router.post('/load', function(req, res) {
  G.load(req.body).then(function(a){
    res.json(a)
  }).catch(function(err){
    res.json(err)
  })

});


// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});


app.post('/:pin/on', function (req, res) {

  G.on(req.params.pin).then(function(a){
    res.json(a)
  }).catch(function(err){
    res.json({error:err})


  })
});
app.post('/:pin/off', function (req, res) {

  G.off(req.params.pin).then(function(a){
    res.json(a)
  }).catch(function(err){
    res.json({error:err})


  })
});

app.get('/:pin', function (req, res) {

  G.switch(req.params.pin).then(function(a){
    res.json(a)
  }).catch(function(err){
    res.json({error:err})


  })
});

app.get('test', function (req, res) {
  var t={
    pin:17,
    direction:'out',
    normal:false,
    label:'u',
    group:'gpio'
  }

  G.set(t).then(function(a){
    console.log(G.pins)


    }).catch(function(err){
      res.json({error:err})


    });

});


module.exports = router;
