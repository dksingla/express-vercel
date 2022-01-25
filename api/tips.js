const express = require("express");
const router = express.Router();
const axios = require('axios');

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    const baseUrl =
    'https://eventsapi.chaturbate.com/events/sloppylucy/uUtootxlHr93SWO8ePcyvROw/';
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  let tokens = getEvents(baseUrl);
    res.json({
      status: 200,
      message: tokens,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

function getEvents(url) {

  axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response);
    let jsonResponse = response.json();
    for (const message of jsonResponse['events']) {
      const method = message['method'];
      const object = message['object'];
      console.log(`Message ID: ${message['id']}`);
      if (method === 'tip') {
        return object.tip.token;
      }
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  
}

module.exports = router;
