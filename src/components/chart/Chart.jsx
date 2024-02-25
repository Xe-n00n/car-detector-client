import  Chart  from "react-apexcharts";

const PieChart = (props)=> {
    return (
        <div>
                <h2 className="mt-3"> Piechart </h2>
                <Chart 
                type="pie"
                width={500}
                height={550}
                series={props.series}                
                options={{
                        title:{ text:"Overall Vehicule Number"
                        } ,                  
                 }}
                >
                </Chart>
        </div>
    );
}

export default PieChart;