
var ctx = document.getElementById("charts");
new Chart(ctx, {
    type: 'bar',
 
    data: {
        labels:['2019/09', '2019/10', '2019/11', '2019/12', '2020/1', '2020/2'],
        datasets:
        [100, -50, 200, 150, 200, 400], 
        [{
            label: 'グラフ',
            backgroundColor: '#20B2AA',
            data: datasets
        }]
    }




/*new Vue({
    el: '#app',
    data: {
        datasets: [
            100, -50, 200, 150, 200, 400
        ],
        graphs: [{
                type: 'line',
                name: '折れ線グラフ'
            },
            {
                type: 'bar',
                name: '棒グラフ'
            },
            {
                type: 'radar',
                name: 'レーダーチャート'
            },
            {
                type: 'pie',
                name: 'パイチャート'
            },
            {
                type: 'polarArea',
                name: 'ポーラチャート'
            }
        ],
        graphSelected: 'line'
    },
    watch: {
        datasets: {
            handler() {
                this.canvas.data.datasets[0].data = this.datasets;
                this.canvas.data.labels = Array(this.datasets.length).fill('');
                this.canvas.update();
            }
        },
        graphSelected: {
            handler() {
                this.canvas.destroy();
                this.chart();
            }
        }

    },
    mounted() {
        this.chart();
    },
    methods: {
        
        toRaw(data) {
            return JSON.stringify(data);
        },
        add(i) {
            this.datasets.splice(i, 0, this.datasets[i]);
        },
        del(i) {
            if (this.datasets.length > 1) {
                this.datasets.splice(i, 1);
            }
        },
        chart() {
            var vm = this;
            var ctx = document.getElementById("charts");
            vm.canvas = new Chart(ctx, {
                type: vm.graphSelected,

                data: {
                    labels: Array(vm.datasets.length).fill(''),
                    datasets: [{
                        label: 'グラフ',
                        backgroundColor: '#20B2AA',
                        data: vm.datasets
                    }]
                }
            });


        },
        randData() {
            var index = Math.floor(Math.random() * (10 - 2) + 2);
            var i = 0;
            var datasets = [];
            while (index > i) {
                datasets.push(Math.floor(Math.random() * (1000) - 500));
                i++;
            }
            this.datasets = datasets;
        }
    }
})
*/

