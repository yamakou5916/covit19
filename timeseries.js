var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
        ]
    }
});

data: {
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
}


