// Mock data object used for LineChart and BarChart

const dataPage3 = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
	legend: ["Saudavel", "Nao Saudavel", "Cancelado"],
    datasets: [{
      data: [
        50000,
        20000,
        12000,
        86000
      ],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
    },{
      data: [
        20000,
        10000,
        40000,
        56000
      ],
    },{
      data: [
        30000,
        90000,
        67000,
        54000,
      ],
    }],
  }


const dataPage6 = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
	legend: ["Saudavel", "Nao Saudavel", "Cancelado"],
    datasets: [{
      data: [
        500,
        200,
        120,
        86
      ],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
    },{
      data: [
        200,
        100,
        400,
        560
      ],
	  color: (opacity = 1) => `rgba(104, 185, 204, ${opacity})`, // optional
    },{
      data: [
        300,
        400,
        470,
        340,
      ],
    }],
  }  
  
const dataPage4 = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
    datasets: [{
      data: [
        60000,
        70000,
        82000,
        86000
      ],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
    }],
  }
  

const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      data: [
        50000,
        20000,
        20000,
        86000,
        71000,
        100000,
      ],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
    },{
      data: [
        20000,
        10000,
        4000,
        56000,
        87000,
        90000,
      ],
    },{
      data: [
        30000,
        90000,
        67000,
        54000,
        10000,
        2000,
      ],
    }],
  }

  // Mock data object used for Contribution Graph

  const contributionData = [
    { date: '2016-01-02', count: 1 },
    { date: '2016-01-03', count: 2 },
    { date: '2016-01-04', count: 3 },
    { date: '2016-01-05', count: 4 },
    { date: '2016-01-06', count: 5 },
    { date: '2016-01-30', count: 2 },
    { date: '2016-01-31', count: 3 },
    { date: '2016-03-01', count: 2 },
    { date: '2016-04-02', count: 4 },
    { date: '2016-03-05', count: 2 },
    { date: '2016-02-30', count: 4 },
  ]
  
  
   const contributionData1 = [
    { date: '2019-01-02', count: 1 },
    { date: '2019-01-03', count: 2 },
    { date: '2019-01-04', count: 3 },
    { date: '2019-01-05', count: 4 },
    { date: '2019-01-06', count: 5 },
    { date: '2019-01-30', count: 2 },
    { date: '2019-01-31', count: 3 },
    { date: '2019-03-01', count: 2 },
    { date: '2019-04-02', count: 4 },
    { date: '2019-03-05', count: 2 },
    { date: '2019-02-30', count: 4 },
  ]
  
   const contributionData2 = [
    { date: '2019-05-02', count: 1 },
    { date: '2019-06-03', count: 2 },
    { date: '2019-06-04', count: 3 },
    { date: '2019-07-05', count: 4 },
    { date: '2019-05-06', count: 5 },
    { date: '2019-07-30', count: 2 },
    { date: '2019-05-31', count: 3 },
    { date: '2019-08-01', count: 2 },
    { date: '2019-06-02', count: 4 },
    { date: '2019-05-15', count: 2 },
    { date: '2019-08-30', count: 4 },
  ]
  
   const contributionData3 = [
    { date: '2019-09-02', count: 1 },
    { date: '2019-10-03', count: 2 },
    { date: '2019-11-04', count: 3 },
    { date: '2019-12-05', count: 4 },
    { date: '2019-09-06', count: 5 },
    { date: '2019-10-30', count: 2 },
    { date: '2019-11-18', count: 3 },
    { date: '2019-09-10', count: 2 },
    { date: '2019-10-12', count: 4 },
    { date: '2019-11-05', count: 2 },
    { date: '2019-12-30', count: 4 },
  ]

  // Mock data object for Pie Chart

  const pieChartData = [
    { name: 'Eletrônicos', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Decoração', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Escritório', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Calçados', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Esportivos', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ]

  // Mock data object for Progress

  const progressChartData =  {
	labels: ["Contr", "N/Contr", "Bloq"], // optional
	data: [0.4, 0.6, 0.2]
	};

  export { data, contributionData, contributionData1, contributionData2, contributionData3, pieChartData, progressChartData, dataPage3, dataPage4, dataPage6 }