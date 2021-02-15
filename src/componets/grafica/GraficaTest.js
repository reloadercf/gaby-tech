import React from "react";

// librerias
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataMexico from "../../data/mx-all";

// Load Highcharts modules
require('highcharts/modules/map')(Highcharts);

export const GraficaTest = () => {
 
  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "My chart",
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
      },
    ],
  };

  return (
    <div id="container">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
