app.service('tipService', function () {

    var tipService = {
        allStocks: [],
        singleStock: [],

        getStocks: function () {
            $.ajax({
                method: "GET",
                url: 'http://trautocomplete.azurewebsites.net/api/Autocomplete/GetAutocomplete?name=M',
                dataType: "json",
                success: function (data) {
                    console.log(data)
                    for (var i = 0; i < 8; i++) {
                        tipService.allStocks.push(data[i]);
                    }
                },
                error: function () {
                    console.log("error");
                }
            });
        },

        submitLabel: function (newLabel) {
            $.ajax({
                method: "GET",
                url: 'http://trautocomplete.azurewebsites.net/api/Autocomplete/GetAutocomplete?name='+ newLabel.stock_label,
                dataType: "json",
                success: function (data) {
                    console.log(data);
                        tipService.singleStock.push(data[0]);
                },
                error: function () {
                    console.log("error");
                }
            });

        }
    }

    return tipService;
})