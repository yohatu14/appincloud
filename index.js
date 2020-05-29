const express = require('express')
const app = express(),
path = require('path'),
cors = require('cors'),
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
var port = (process.env.PORT  || 8000);

// UI
var AssistantV1 = require('watson-developer-cloud/assistant/v1');

//Watson Assistant
var watsonAssistant = new AssistantV1({
  iam_apikey: '',
  version: '2018-02-16',
  url: ""
});

var context2 = {};

app.post('/listen', (req, respuesta) => {
    watsonAssistant.message(
      {
        input: { text: req.body.message },
        context: context2,
        workspace_id: ''
      },
      function (err, response) {
        if (err) {
        } else {    
          console.log(response.output.text)
            var text = {
            "text": response.output.text[response.output.text.length-1]
          }
          respuesta.send({ success: true, text });
        }
      }
    );
  });

app.use(express.static(path.resolve(__dirname, 'front-end/build')));

var server = app.listen(port, function () {
  console.log('Listening on port %d', server.address().port);
});
  

