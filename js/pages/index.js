$(function () {
    //Widgets count
    $('.count-to').countTo();

    //Sales count to
    $('.sales-count-to').countTo({
        formatter: function (value, options) {
            return '$' + value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, ' ').replace('.', ',');
        }
    });

    initDonutChart();
});

var realtime = 'on';
function initRealTimeChart() {
    //Real time ==========================================================================================
    var plot = $.plot('#real_time_chart', [getRandomData()], {
        series: {
            shadowSize: 0,
            color: 'rgb(0, 188, 212)'
        },
        grid: {
            borderColor: '#f3f3f3',
            borderWidth: 1,
            tickColor: '#f3f3f3'
        },
        lines: {
            fill: true
        },
        yaxis: {
            min: 0,
            max: 100
        },
        xaxis: {
            min: 0,
            max: 100
        }
    });

    function updateRealTime() {
        plot.setData([getRandomData()]);
        plot.draw();

        var timeout;
        if (realtime === 'on') {
            timeout = setTimeout(updateRealTime, 320);
        } else {
            clearTimeout(timeout);
        }
    }

    updateRealTime();

    $('#realtime').on('change', function () {
        realtime = this.checked ? 'on' : 'off';
        updateRealTime();
    });
    //====================================================================================================
}

function initSparkline() {
    $(".sparkline").each(function () {
        var $this = $(this);
        $this.sparkline('html', $this.data());
    });
}

function initDonutChart() {
    Morris.Donut({
        element: 'donut_chart-categories',
        data: [{
            label: 'Santé',
            value: 345
        }, {
            label: 'Transport',
            value: 450
        }, {
            label: 'Art',
            value: 11
        }, {
            label: 'Biotech',
            value: 105
        },
        {
            label: 'IT',
            value: 146
        }],
        colors: ['rgb(233, 30, 99)', 'rgb(0, 188, 212)', 'rgb(255, 152, 0)', 'rgb(0, 150, 136)', 'rgb(96, 125, 139)'],
        formatter: function (y) {
            return y 
        }
    });

    Morris.Donut({
        element: 'donut_chart-status',
        data: [{
            label: 'Brouillon',
            value: 263
        }, {
            label: 'Publié',
            value: 230
        }, {
            label: 'Non sélectionné',
            value: 20
        }, {
            label: 'Soumis',
            value: 150
        }, {
            label: 'A l\'étude',
            value: 134
        }, {
            label: 'En attente',
            value: 150
        }, {
            label: 'Selectionné',
            value: 110
        }],
        colors: ['rgb(255, 195, 76)', 'rgb(65, 88, 244)', 'rgb(244, 65, 65)', 'rgb(66, 244, 66)', 'rgb(211, 65, 244)', 'rgb(0, 229, 255)', 'rgb(0, 255, 208)'],
        formatter: function (y) {
            return y 
        }
    });
}

var data = [], totalPoints = 110;
function getRandomData() {
    if (data.length > 0) data = data.slice(1);

    while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : 50, y = prev + Math.random() * 10 - 5;
        if (y < 0) { y = 0; } else if (y > 100) { y = 100; }

        data.push(y);
    }

    var res = [];
    for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]]);
    }

    return res;
}