
function getData() {
    console.log('getting data');
    fetch("./data/data.json")
        .then(response => response.json())
        .then(data => {
            console.log('got the data');
            console.log(data);
            //console.log('this is under 15 years');
            //console.log(data.data[0].under15);
            //state.data = data;
            // React way of setting state:
            // this.setState({
            //    data: data,
            //});
        });

}


function renderData(item) {
    let chart = document.querySelector(".BarChart")
    for (let item of data.data[0].under15) {
        console.log('look at this!', item);

    }
    let height = item['avg'];
    let bar = document.createElement("div");
    bar.classList.add("Bar");
    bar.style.height = height + "%";
    chart.appendChild(bar);
}
getData();

function selectYear() {
    console.log('select button worked!');
    let year_selected = document.querySelector('#yearSelect').value
    for (let item of data.data.item[0]) {
        console.log('is it run?', value);
    }
}

