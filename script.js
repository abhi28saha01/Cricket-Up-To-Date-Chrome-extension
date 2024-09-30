async function getMatchData() {
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=afe943d8-0f0d-4e1c-9566-28f3d15700ce&offset=0")
        .then(data => data.json())
        .then(data => {

            // console.log(data);
            
            if(data.status !== "success")return;

            const matchDataList = data.data;

            if(!matchDataList)return [];

            const matchData = matchDataList.map(match => `${match.name} , ${match.status}`);
            console.log("match data Recived");
            
            console.log({matchData});

            document.getElementById("matches").innerHTML = matchData.map(match => `<li>${match}</li>`).join('');

            return matchData;
        })
        .catch(e => console.log(e))
}

getMatchData();