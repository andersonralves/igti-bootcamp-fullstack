const express = require('express');
const fs = require("fs");
const app = express();
const port = 3000;

const globalAccountFilename = 'accounts.json';

app.use(express.json());

app.post('/account', (req, res) => {
  let account = req.body;

  const globalAccountFilename = "accounts.json";

  //const accountFile =
  fs.readFile(globalAccountFilename, "utf8", (err, data) => {

    if (!err) {
      try {
        let json = JSON.parse(data);
        account = {
          id: json.nextId++,
          ...account
        }
        json.accounts.push(account);

        fs.writeFile(globalAccountFilename, JSON.stringify(json), err => {
          if (err) {
            res.status(400).send({
              error: err.message
            });
          } else {
            res.status(201).end();
          }
        });
      } catch (err) {
        res.status(400).send({
          error: err.message
        });
      }
    } else {
      res.status(400).send({
        error: err.message
      });
    }
  });

  /*
  fs.appendFile(filename, JSON.stringify(params), err => {
    console.log(err);
  });
  */

});

app.listen(port, () => {
  try {
    fs.readFile(globalAccountFilename, "utf8", (err, data) => {

      if (err) {
        const initalJson = {
          nextId: 1,
          accounts: []
        }
        fs.writeFile(globalAccountFilename, JSON.stringify(initalJson), (err, data) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  } catch (err) {
    console.log('ero');
  }
});