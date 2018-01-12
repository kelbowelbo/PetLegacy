
module.exports.getFromBackend = function(url, doneCb, errorCb) {
  fetch(
    url,
    {
      mode: 'no-cors',
      credentials: 'include'
    }
  )
  .then(function(resp) {
    if (resp.status >= 400) {
      throw new Error("Bad response from server");
    }
    return resp.json();
  })
  .then(function(data) {
    doneCb(data);
  })
  .catch(function(e) {
    errorCb(e);
  });
}

module.exports.postToBackend = function(url, obj, doneCb, errorCb) {
  fetch(
    url,
    {
      method: 'post',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      dataType: 'application/json',
      body: JSON.stringify(obj)
    }
  )
  .then(function json(resp) {
    return resp.json()
  })
  .then(function (data) {
    doneCb(data);
  })
  .catch(function (error) {
    errorCb(error);
  });
}
