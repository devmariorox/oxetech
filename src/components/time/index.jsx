import React from 'react';
import Colaborador from '../colaborador';
import './time.css';

function Time(Props) {

    const cssFundo = { backgroundColor: Props.fundo }
    const cssCard = { borderColor: Props.cssCard }

    return (

        <section className='time' style={cssFundo}>

            <h2 style={cssCard}>{Props.nome}</h2>
            <div className='cards'>

            {Props.colaboradores.map(
                colaborador =>
                    <Colaborador
                        key={colaborador.nome}
                        corCard={Props.card}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}


                    />)}


            </div>
        </section>

    )

}

export default Time;