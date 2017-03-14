import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

const examenes = [
  {
    "codigo": "123",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "27/11/2012",
    "materia": "Arquitectura de Computadoras",
    "nota": "siete",
    "plan": "2008"
  },
  {
    "codigo": "122",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "28/11/2012",
    "materia": "Algoritmos y Estructuras de Datos",
    "nota": "dos",
    "plan": "2008"
  },
  {
    "codigo": "110",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "10/12/2012",
    "materia": "Ingenier\u00eda y Sociedad",
    "nota": "nueve",
    "plan": "2008"
  },
  {
    "codigo": "122",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "12/12/2012",
    "materia": "Algoritmos y Estructuras de Datos",
    "nota": "nueve",
    "plan": "2008"
  },
  {
    "codigo": "126",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "18/12/2012",
    "materia": "F\u00edsica I",
    "nota": "siete",
    "plan": "2008"
  },
  {
    "codigo": "102",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "20/12/2012",
    "materia": "An\u00e1lisis Matem\u00e1tico I",
    "nota": "ocho",
    "plan": "2008"
  },
  {
    "codigo": "101",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "13/02/2013",
    "materia": "\u00c1lgebra y Geometr\u00eda Anal\u00edtica",
    "nota": "diez",
    "plan": "2008"
  },
  {
    "codigo": "121",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "25/02/2013",
    "materia": "Matem\u00e1tica Discreta",
    "nota": "ocho",
    "plan": "2008"
  },
  {
    "codigo": "125",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "27/02/2013",
    "materia": "Sistemas y Organizaciones",
    "nota": "nueve",
    "plan": "2008"
  },
  {
    "codigo": "228",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "08/08/2013",
    "materia": "Sintaxis y Sem\u00e1ntica de los Lenguajes",
    "nota": "seis",
    "plan": "2008"
  },
  {
    "codigo": "111",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "26/08/2013",
    "materia": "Ingl\u00e9s I",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "111",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "23/09/2013",
    "materia": "Ingl\u00e9s I",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "124",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "24/09/2013",
    "materia": "Qu\u00edmica",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "111",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "20/11/2013",
    "materia": "Ingl\u00e9s I",
    "nota": "nueve",
    "plan": "2008"
  },
  {
    "codigo": "115",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "02/12/2013",
    "materia": "Sistemas de Representaci\u00f3n",
    "nota": "nueve",
    "plan": "2008"
  },
  {
    "codigo": "229",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "02/12/2013",
    "materia": "Paradigmas de Programaci\u00f3n",
    "nota": "seis",
    "plan": "2008"
  },
  {
    "codigo": "124",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "04/12/2013",
    "materia": "Qu\u00edmica",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "124",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "18/12/2013",
    "materia": "Qu\u00edmica",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "203",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "18/12/2013",
    "materia": "An\u00e1lisis Matem\u00e1tico II",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "230",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "18/12/2013",
    "materia": "Sistemas Operativos",
    "nota": "dos",
    "plan": "2008"
  },
  {
    "codigo": "203",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "12/02/2014",
    "materia": "An\u00e1lisis Matem\u00e1tico II",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "203",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "26/02/2014",
    "materia": "An\u00e1lisis Matem\u00e1tico II",
    "nota": "ocho",
    "plan": "2008"
  },
  {
    "codigo": "124",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "12/03/2014",
    "materia": "Qu\u00edmica",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "212",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "20/05/2014",
    "materia": "Ingl\u00e9s II",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "226",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "21/05/2014",
    "materia": "F\u00edsica II",
    "nota": "dos",
    "plan": "2008"
  },
  {
    "codigo": "227",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "28/07/2014",
    "materia": "An\u00e1lisis de Sistemas",
    "nota": "dos",
    "plan": "2008"
  },
  {
    "codigo": "227",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "22/09/2014",
    "materia": "An\u00e1lisis de Sistemas",
    "nota": "ocho",
    "plan": "2008"
  },
  {
    "codigo": "212",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "23/09/2014",
    "materia": "Ingl\u00e9s II",
    "nota": "siete",
    "plan": "2008"
  },
  {
    "codigo": "226",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "24/09/2014",
    "materia": "F\u00edsica II",
    "nota": "cinco",
    "plan": "2008"
  },
  {
    "codigo": "124",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "19/11/2014",
    "materia": "Qu\u00edmica",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "391",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "01/12/2014",
    "materia": "Gesti\u00f3n Ingenieril (Elec.)",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "124",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "03/12/2014",
    "materia": "Qu\u00edmica",
    "nota": "seis",
    "plan": "2008"
  },
  {
    "codigo": "332",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "05/12/2014",
    "materia": "Comunicaciones",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "331",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "15/12/2014",
    "materia": "Dise\u00f1o de Sistemas",
    "nota": "dos",
    "plan": "2008"
  },
  {
    "codigo": "333",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "16/12/2014",
    "materia": "Gesti\u00f3n de Datos",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "336",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "18/12/2014",
    "materia": "Matem\u00e1tica Superior",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "204",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "10/02/2015",
    "materia": "Probabilidades y Estad\u00edsticas",
    "nota": "siete",
    "plan": "2008"
  },
  {
    "codigo": "331",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "23/02/2015",
    "materia": "Dise\u00f1o de Sistemas",
    "nota": "seis",
    "plan": "2008"
  },
  {
    "codigo": "745",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "24/02/2015",
    "materia": "Formaci\u00f3n de Emprendedores(Elec.)",
    "nota": "ocho",
    "plan": "2008"
  },
  {
    "codigo": "336",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "26/02/2015",
    "materia": "Matem\u00e1tica Superior",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "230",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "20/05/2015",
    "materia": "Sistemas Operativos",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "308",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "07/08/2015",
    "materia": "Econom\u00eda",
    "nota": "siete",
    "plan": "2008"
  },
  {
    "codigo": "409",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "25/09/2015",
    "materia": "Legislaci\u00f3n",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "336",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "17/12/2015",
    "materia": "Matem\u00e1tica Superior",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "336",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "11/02/2016",
    "materia": "Matem\u00e1tica Superior",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "336",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "25/02/2016",
    "materia": "Matem\u00e1tica Superior",
    "nota": "dos",
    "plan": "2008"
  },
  {
    "codigo": "336",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "10/03/2016",
    "materia": "Matem\u00e1tica Superior",
    "nota": "nueve",
    "plan": "2008"
  },
  {
    "codigo": "230",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "18/05/2016",
    "materia": "Sistemas Operativos",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "333",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "24/05/2016",
    "materia": "Gesti\u00f3n de Datos",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "391",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "30/05/2016",
    "materia": "Gesti\u00f3n Ingenieril (Elec.)",
    "nota": "dos",
    "plan": "2008"
  },
  {
    "codigo": "695",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "18/08/2016",
    "materia": "Lenguaje de Programaci\u00f3n Java(Elec.)",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "695",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "02/09/2016",
    "materia": "Lenguaje de Programaci\u00f3n Java(Elec.)",
    "nota": "diez",
    "plan": "2008"
  },
  {
    "codigo": "230",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "14/09/2016",
    "materia": "Sistemas Operativos",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "333",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "20/09/2016",
    "materia": "Gesti\u00f3n de Datos",
    "nota": "ocho",
    "plan": "2008"
  },
  {
    "codigo": "332",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "25/11/2016",
    "materia": "Comunicaciones",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "332",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "02/12/2016",
    "materia": "Comunicaciones",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "332",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "16/12/2016",
    "materia": "Comunicaciones",
    "nota": "Ausen.",
    "plan": "2008"
  },
  {
    "codigo": "697",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "19/12/2016",
    "materia": "Tecnolog\u00edas de Desarrollo de Software ID",
    "nota": "nueve",
    "plan": "2008"
  },
  {
    "codigo": "757",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "24/02/2017",
    "materia": "Entornos Gr\u00e1ficos(Elec.)",
    "nota": "seis",
    "plan": "2008"
  },
  {
    "codigo": "332",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "24/02/2017",
    "materia": "Comunicaciones",
    "nota": "dos",
    "plan": "2008"
  },
  {
    "codigo": "332",
    "especialidad": "Ing. Sist. Inf.",
    "fecha": "10/03/2017",
    "materia": "Comunicaciones",
    "nota": "seis",
    "plan": "2008"
  }
]

ReactDOM.render(
  <App examenes={examenes} />,
  document.getElementById('root')
);
