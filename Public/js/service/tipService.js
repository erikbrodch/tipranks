app.service('tipService', function () {

    var tipService = {
        allStocks: [],

        getStocks: function () {
                $.ajax({
                    method: "GET",
                    url: 'http://trautocomplete.azurewebsites.net/api/Autocomplete/GetAutocomplete?name=M',
                    dataType: "json",
                    success: function (data) {
                        for (var i = 0; i < 8; i++) {
                            tipService.allStocks.push(data[i]);
                        }
                        // var stock = {
                        //     ticker: data.ticker,
                        //     label: data.label,
                        //     uid: data.uid,
                        //     value: data.value
                        // }
                        

                    },
                    error: function () {
                        console.log("error");
                    }
                });
        }
    }

    return tipService;
})