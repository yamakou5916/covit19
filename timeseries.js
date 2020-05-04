var chart = c3.generate({
    data: {
        x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 340, 200, 500, 250, 350]
        ]

        colors: {
            data1: function(d) {
                var color = '#000000';
                switch (d.index){
                    case 0:
                        color = 'rgb(255, 40, 0)';
                        break;
                    case 1:
                        color = 'rgb(0, 65, 255)';
                        break;
                    case 2:
                        color = 'rgb(250, 153, 0)';
                        break;
                    case 3:
                        color = 'rgb(53, 161, 107)';
                        break;
                    case 4:
                        color = 'rgb(255 ,153 ,160)';
                        break;
                    case 5:
                        color = 'rgb(102, 51, 0)';
                        break;
                } 
                return  color;
            }
        }
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
            }
        }
    }
});

setTimeout(function () {
    chart.load({
        columns: [
            ['data3', 400, 500, 450, 700, 600, 500]
        ]
    });
}, 1000);

