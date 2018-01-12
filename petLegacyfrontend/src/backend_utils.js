
function getFromBackend(url, doneCb, errorCb) {
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

function postToBackend(url, obj, doneCb, errorCb) {
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

function getCurrentOwnerId(doneCb, errorCb) {
=======

function getCurrentOwnerId(url, obj, doneCb, errorCb) {
>>>>>>> 259c67b0... some new orm stuff
  getFromBackend(
    '/api/getLoggedInOwner',
    (owner) => {
      doneCb(owner.id);
    },
    errorCb
  );
}

module.exports = {
  getFromBackend: getFromBackend,
  postToBackend: postToBackend,
  getCurrentOwnerId: getCurrentOwnerId
};
<<<<<<< HEAD
>>>>>>> b1022777... Added PetList component and got pet edits working.
=======
>>>>>>> 259c67b0... some new orm stuff
