
  /*
 if (typeof adobe != 'undefined' && adobe.target && typeof adobe.target.triggerView === 'function') {
    console.log('adobe is ready');
  }

  document.addEventListener(adobe.target.event.REQUEST_SUCCEEDED, function(event) {
    console.log(event)
   const tokens = event.detail.responseTokens;
   console.log(tokens)


if (areTokensEmpty(tokens)) {
    return;
}
        let activityNames = [];
        let experienceNames = [];
        let uniqueTokens = distinct(tokens);

        uniqueTokens.forEach((token)=>{
            activityNames = [...activityNames,token["activity.name"]];
            experienceNames = [...experienceNames,token["experience.name"]];
        })

        // uniqueTokens.forEach(function(token) {
        //     activityNames.push(token["activity.name"]);
        //     experienceNames.push(token["experience.name"]);
        // });

console.log(uniqueTokens)


})

 const areTokensEmpty = (tokens) => {
    return tokens === undefined || tokens === null ||tokens.length <= 0;
    // return (tokens === undefined || tokens === null ||tokens.length <= 0) ? true : false;
}

    const key = (obj) => {
        return Object.keys(obj)
        .map(function(k) { return k + "" + obj[k]; })
        .join("");
    }

    const distinct = (arr) => {
       const result = arr.reduce(function(acc, e) {
            acc[key(e)] = e;
            return acc;
        }, {});

        return Object.keys(result)
        .map(function(k) { return result[k]; });
    }
    */
