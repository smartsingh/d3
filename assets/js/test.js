d3.csv("data.csv", function(err, healthData){
    if (err) throw err;

    console.log(healthData);
});