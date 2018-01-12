
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

function getCurrentOwnerId(doneCb, errorCb) {
  getFromBackend(
    '/api/getLoggedInOwner',
    (owner) => {
      doneCb(owner.id);
    },
    errorCb
  );
}

function breedPicsMap() {
  const mediaPath = '/images';
  return {
    "Beagle": `${mediaPath}/beagle.jpg`,
    "Border Collie": `${mediaPath}/border_collie.jpg`,
    "Boxer": `${mediaPath}/boxer.jpg`,
    "Collie - Rough": `${mediaPath}/rough_collie.jpg`,
    "Golden Retriever": `${mediaPath}/golden_retriever.jpg`,
    "Labrador Retriever - black": `${mediaPath}/Black_Labrador_Retriever.jpg`,
    "Labrador Retriever - chocolate": `${mediaPath}/Chocolate_Labrador.png`,
    "Labrador Retriever - yellow": `${mediaPath}/yellow_lab.jpg`,
    "Pit Bull Terrier": `${mediaPath}/pit_bull_terrier.jpg`,
    "Poodle": `${mediaPath}/poodle_standard.jpg`,
    "Pug": `${mediaPath}/pug.jpg`,
    "Sharpei": `${mediaPath}/ChineseSharPei.jpg`,
    "Sheltie - Blue Merle": `${mediaPath}/sheltie_blue_merle.jpg`,
    "Sheltie - Sable": `${mediaPath}/sheltie_sable.jpg`
  }
}

module.exports = {
  getFromBackend: getFromBackend,
  postToBackend: postToBackend,
  getCurrentOwnerId: getCurrentOwnerId,
  breedPicsMap: breedPicsMap,
};

