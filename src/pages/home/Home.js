import React from 'react';
import Produtos from '../../components/produtos/Produtos';
import Destaque from '../../components/destaque/Destaque';
import ProcessoCriativo from '../../components/processo_criativo/ProcessoCriativo';

function Home() {
    return (
        <div className="home-container">
            <Destaque />
            <ProcessoCriativo />
            <Produtos />
        </div>
    )
}

export default Home;