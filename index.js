var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.unsplash.com/photos?client_id=3mUMrQMuaKkKslGCWuKFxWmptUlufGCDW2SjBeTdUmQ", requestOptions)
    .then(response => response.text())
    .then(result => {
        result = JSON.parse(result)
        console.log(result.length)
        if (result.length > 0){
            for (let i = 0; i < 4; i++) {
                console.log(result[i])
                var index = i +1
              document.getElementById("img" + index ).src = result[i].urls.full;
            console.log(result[i].urls.full)
            }
        }
        })
    
    .catch(error => console.log('error', error));

    
    