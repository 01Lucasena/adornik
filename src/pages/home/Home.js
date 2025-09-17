import React from 'react';
import Produtos from '../../components/produtos/Produtos';
import Destaque from '../../components/destaque/Destaque';
import ProcessoCriativo from '../../components/processo_criativo/ProcessoCriativo';
import Banner from '../../components/banner/Banner'

function Home() {
    return (
        <div className="home-container">
            <Destaque />
            <ProcessoCriativo />
            <Produtos />
            <Banner />
        </div>
    )
}

export default Home;