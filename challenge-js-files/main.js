const table = document.getElementById("table1");
const years = [];
const countries = [];
const data = [];

//these 3 just for info
console.log(table.rows.length);
//gives the length of all the rows in the table
console.log(table.rows[1].cells.length);
//gives the length of column in row 1
console.log(table.tBodies[0].rows.length);
//gives the length of the rows in body section of the table

for (let i = 2; i < table.rows[1].cells.length; i++) {
  years.push(table.rows[1].cells[i].innerHTML);
}
//console.log(JSON.stringify(years));

//The JSON.stringify() method converts a JavaScript object or value to a JSON string

//index start at 0 but we want infor from row 2 not 0
//0= country, 1= empty space, 2= Belgium
//there is error with the html table
//it jumps from 4 to 7 
for (let i = 2; i < table.rows.length; i++) {
  countries.push(table.rows[i].cells[1].innerHTML);
}
//console.log(JSON.stringify(countries));

for (let i = 2; i < table.rows.length; i++) {
  let countryData = [];
  for (let j = 2; j < table.rows[i].cells.length; j++) {
    let oneData = table.rows[i].cells[j].innerHTML;
    let replacedData = oneData.replace(",", ".");
    countryData.push(replacedData);
  }
  data.push(countryData);
}
//convert json to valid json
//console.log(JSON.stringify(data,null, 2));

//random color generator
let randomArray = [];
for (i = 0; i < countries.length; i++) {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  randomArray.push(randomColor);
}
console.log(randomArray);
//creating an object
let datasetsObj = Object.assign(countries.map((country, index) => (
  {
    label: country,
    data: data[index],
    backgroundColor: randomArray[index],
    borderColor: randomArray[index],
    borderWidth: 1
  }
)));
// data=key name for datasets , data[index]= from the data I created
console.log(JSON.stringify(datasetsObj));


//for chart.js
const div = document.getElementById("mw-content-text");
// const table = document.getElementById("table1");
const canvas = document.createElement("canvas");
div.insertBefore(canvas, table);
const ctx = canvas.getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: years,
    datasets: datasetsObj,
  },
  options: {
    responsive: true,
  }
});
//-----------------------------
//chart number2
const table2 = document.getElementById("table2");
const yearRange = [];
const allCountries = [];
const prisonPopn1 = [];
const prisonPopn2 = [];
for (let i = 2; i < table2.rows[0].cells.length; i++) {
  yearRange.push(table2.rows[0].cells[i].innerHTML);
}
console.log(JSON.stringify(yearRange));

for (let i = 1; i < table2.rows.length; i++) {
  let oneCountry = table2.rows[i].cells[1].innerHTML;
  let replace = oneCountry.replace("\n                      <br>", " ");
  //let replace = oneCountry.replace("England and\n                      <br>Wales(UK)\n", "England and Wales");
  //both works. first is simpler
  let trimmed = replace.trim();
  allCountries.push(trimmed);
    //allCountries.push(oneCountry);
}
console.log(JSON.stringify(allCountries));

for (let i = 1; i < table2.rows.length; i++) {
  prisonPopn1.push(table2.rows[i].cells[2].innerHTML);
}
console.log(JSON.stringify(prisonPopn1));

for (let i = 1; i < table2.rows.length; i++) {
  prisonPopn2.push(table2.rows[i].cells[3].innerHTML);
}
console.log(JSON.stringify(prisonPopn2));
//creating an object
// let dataset1 = Object.assign(prisonPopn.map(x => ({data: x})))
// console.log(JSON.stringify(prisondataObj));

//for chart.js

// const div = document.getElementById("mw-content-text");
// const table2 = document.getElementById("table2");
const canvas2 = document.createElement("canvas");
div.insertBefore(canvas2, table2);
const ctx2 = canvas2.getContext("2d");
const myChart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: allCountries,
    datasets: [
      {
        label: yearRange[0],
        data: prisonPopn1,
        backgroundColor: "#A0D9D9",
        borderColor: "#45858C",
        borderWidth: 1
      },
      {
        label: yearRange[1],
        data: prisonPopn2,
        backgroundColor: "#D9C589",
        borderColor: "#BF9765",
        borderWidth: 1
      },
    ]
  },
  options: {
    responsive: true,
  }
})

//------------------------------------------
//old code (done manually)
// (() => {
//   const labels = [
//     "2002",
//     "2003",
//     "2004",
//     "2005",
//     "2006",
//     "2007",
//     "2008",
//     "2009",
//     "2010",
//     "2011",
//     "2012",
//   ];
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Belgium",
//         data: [1012.8, 1007.8, 1013.7, 999.4, 1022.8, 1034.4, 1043.6, 1067.3, 1072.0, 1111.0, 1073.8],
//         backgroundColor: "#A0D9D9",
//         borderColor: "#45858C",
//       },
//       {
//         label: "Bulgaria",
//         data: [146.9, 143.9, 142.1, 137.8, 136.4, 134.7, 126.7, 138.1, 147.0, 128.6, 120.6],
//         backgroundColor: "#D9C589",
//         borderColor: "#BF9765",
//       },
//   }
//   const config = {
//     type: "line",
//     data: data,
//     options: {
//       responsive: true,
//     }
//   }
//   const myChart = new Chart(ctx, config);
// })();
