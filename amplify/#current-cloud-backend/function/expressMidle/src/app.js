/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const data = require('./cosme_data.json')


// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/item', function(req, res) {
  // Add your code here
  // const data = [
  //   { id: 'abcde001', name: 'ハト麦化粧水', category: '口紅', color: 1, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
  //   { id: 'abcde002', name: 'プロアクティブ', category: 'リップ', color: 2, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
  //   { id: 'abcde003', name: 'ハト麦化粧水', category: '口紅', color: 1, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
  //   { id: 'abcde004', name: 'プロアクティブ', category: 'リップ', color: 2, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
  //   { id: 'abcde005', name: 'ハト麦化粧水', category: '口紅', color: 1, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
  //   { id: 'abcde006', name: 'プロアクティブ', category: 'リップ', color: 2, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
  //   { id: 'abcde007', name: 'ハト麦化粧水', category: '口紅', color: 1, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
  //   { id: 'abcde008', name: 'プロアクティブ', category: 'リップ', color: 2, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
  //   { id: 'abcde009', name: 'ハト麦化粧水', category: '口紅', color: 1, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
  //   { id: 'abcde0010', name: 'プロアクティブ', category: 'リップ', color: 2, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 },
  //   { id: 'abcde0011', name: 'ハト麦化粧水', category: '口紅', color: 1, img: 'https://fitter.cosme.net/media/product/10028/skuimg_817574.jpg', brand: 'コーチ', color_name: 'EX-4 マジカルミッドナイトショー', price: 400, H: 300, S: 50, L: 60 }
  // ]
  res.json(data);
});

app.get('/item/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/item', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/item/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/item', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/item/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/item', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/item/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
