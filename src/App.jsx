import React, { useState } from 'react';
import './App.css'
import Banner from './components/Banner';
import Formulario from './components/formulario';
import Time from './components/time';
import Colaborador from './components/colaborador';

function App() {

  const [colaboradores, setColaboradores] = useState([])
  const time = [
    {
      nome: "programação",
      fundo: "#D9F7E9",
      card: "#57c278",

    },

    {
      nome: "FrontEnd",
      fundo: "#E8F8FF",
      card: "#82CFFA",

    },

    {
      nome: "DataScience",
      fundo: "#F0F8E2",
      card: "#A6D157",

    },

    {
      nome: "Devops",
      fundo: "#FDE7E8",
      card: "#E06B69",

    },

    {
      nome: "Ux e Design",
      fundo: "#FAE9F5",
      card: "#DB6EBF",

    },

    {
      nome: "Mobile",
      fundo: "#FFF5D9",
      card: "#FFBA05",

    },


    {
      nome: "Inovação e Gestão",
      fundo: "#FFEEDF",
      card: "#FF8A29",

    }



  ]

  const AddColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }


  return (

    <div >
      <Banner />
      <div className='container'>
        <Formulario times={time.map(time => time.nome)} novoColaborador={colaborador => AddColaborador(colaborador)} />

        {time.map(time =>

          <Time
            key={time.nome}
            nome={time.nome}
            fundo={time.fundo}
            card={time.card}
            colaboradores={colaboradores.filter(Colaborador => Colaborador.time === time.nome)}
          />)}

      </div>


    </div>
  )
}

export default App;
