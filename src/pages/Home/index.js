import React, { Component } from "react";
import "./styles.css";
import casa from "../../assets/casa.svg";
import seta from "../../assets/seta.svg";
import bussola from "../../assets/bussola.svg";
import coracao from "../../assets/coracao.svg";
import timao from "../../assets/timao.jpg";
import comente from "../../assets/comente.svg";
import save from "../../assets/save.svg";
import escudo from "../../assets/escudo.jpg";
import leao from "../../assets/leao.webp";
import cavalo from "../../assets/cavalo.jpg";
import cao from "../../assets/cao.jpg";
import peixe from "../../assets/peixe.jpg";
import tigre from "../../assets/tigre.jpg";
import gato from "../../assets/gato.jpg";


class Home extends Component {
  render() {
    return (
      <>
        {/*<---Aqui tem o nosso header--->*/}
        <div className="header">

          <div className="logo">

            <img className="logo" src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-4.png" alt=""></img>

          </div>

          {/*<---Caixa de pesquisa e ícones--->*/}

          <input className="pesquisa" type="text" placeholder="Pesquisar"></input>
          <img className="casa" src={casa} alt=""></img>
          <img className="seta" src={seta} alt=""></img>
          <img className="bussola" src={bussola} alt=""></img>
          <img className="coracao" src={coracao} alt=""></img>
          <img className="foto" src={leao} alt=""></img>

        </div>

        {/*<---Fim do header--->*/}

        {/*<---Stories, publicação 1 e sugestões de amigos--->*/}

        <div>

          <section className="corpo">

            {/*<---Caixa dos stories--->*/}

            <div className="stories">stories</div>

            {/*<---Fim da caida dos stories--->*/}

            {/*<---Caixa da publicação 1--->*/}

            <div className="publicacao1">

              <section className="cima">
                <img className="timao" src={escudo} alt=""></img>
                corinthians
              </section>

              <img className="corinthians" alt="" src={timao}></img>

              <section className="baixo">

                <img className="coracao" src={coracao} alt=""></img>
                <img className="comente" src={comente} alt=""></img>
                <img className="seta" src={seta} alt=""></img>
                <img className="save" src={save} alt=""></img>
                <section className="nome">corinthians</section>
                <section className="texto">
                  Melhor time do Brasil inteiro. Fiel sofredor até o fim.
                </section>

              </section>

              <section className="aba_fim">
                <input className="comentario" type="text" placeholder="Adicione um comentário..."></input>
                <div className="publicar">Publicar</div>

              </section>

            </div>

            {/*<---Fim da publicação 1--->*/}



            {/*<---Caixa de sugestões de amigos--->*/}

            <div className="sugestoes">

              <section className="cabeca">

                <img className="foto2" src={leao} alt="" ></img>
                <section className="nome">leao</section>
                <br></br>leao_bonito arrumar

              </section>

              <section className="sugest">
                Sugestões para você
                <img className="img" src={gato} alt=""></img>
                gato<br></br>Segue você
                <img className="img" src={cavalo} alt=""></img>
                <img className="img" src={cao} alt=""></img>
                <img className="img" src={peixe} alt=""></img>
                <img className="img" src={tigre} alt=""></img>
              </section>
            </div>
          </section>
        </div>
        {/*<---Fim da primeira parte do corpo--->*/}

        <div className="publicacao2">
          <section className="cima">
            <img className="bandeira" src={"https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"} alt=""></img>
                brasil_oficial
              </section>
          <img
            className="br_masc"
            alt=""
            src="https://files.metropoles.com/static/especiais/pe-dados-corona-virus/assets/images/components/featured/logo-brasil.jpg"
          ></img>
          <section className="baixo">
            <img className="coracao" src={coracao} alt=""></img>
            <img className="comente" src={comente} alt=""></img>
            <img className="seta" src={seta} alt=""></img>
            <img className="save" src={save} alt=""></img>
            <section className="nome">brasil_oficial</section>
            <section className="texto">
              Melhor país do mundo inteiro. Use máscara, por favor.
                </section>
          </section>
          <section className="aba_fim">
            <input
              className="comentario"
              type="text"
              placeholder="Adicione um comentário..."
            ></input>
            <div className="publicar">Publicar</div>
          </section>
        </div>
      </>
    );
  }
}

export default Home;
