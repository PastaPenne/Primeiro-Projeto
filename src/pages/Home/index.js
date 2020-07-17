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
import girassol from "../../assets/girassol.jpeg";
import margarida from "../../assets/margarida.webp";
import rosa from "../../assets/rosa.webp";
import amorPerfeito from "../../assets/amor perfeito.jpg";
import camelia from "../../assets/camelia.webp";
import crisantemo from "../../assets/crisantemo.jpg";
import denteLeao from "../../assets/dente de leao.jpg";
import insta from "../../assets/insta.png";
import bandeira from "../../assets/bandeira.svg";
import br_masc from "../../assets/brasil mascara.jpg";

class Home extends Component {
  render() {
    return (
      <>
        {/*<---Aqui tem o nosso header--->*/}
        <div className="header">

          <div className="logo">

            <img className="logo" src={insta} alt=""></img>

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

        <div className="corpo">

          {/*<---Caixa dos stories--->*/}

          <div className="stories">
            <section className="flores">
              <img className="ft_stories" src={amorPerfeito} alt=""></img>amor_perfeito
            </section>

            <section className="flores">
              <img className="ft_stories" src={camelia} alt=""></img>camelia
            </section>

            <section className="flores">
              <img className="ft_stories" src={crisantemo} alt=""></img>crisantemo
            </section>

            <section className="flores">
              <img className="ft_stories" src={denteLeao} alt=""></img>dente_de_leão
            </section>

            <section className="flores">
              <img className="ft_stories" src={girassol} alt=""></img>girassol
            </section>

            <section className="flores">
              <img className="ft_stories" src={margarida} alt=""></img>margarida
            </section>

            <section className="flores">
              <img className="ft_stories" src={rosa} alt=""></img>rosa
            </section>


          </div>

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
              cavalo<br></br>Segue você
              <img className="img" src={cao} alt=""></img>
              cão<br></br>Segue você
              <img className="img" src={peixe} alt=""></img>
              peixe<br></br>Segue você
              <img className="img" src={tigre} alt=""></img>
              tigre<br></br>Segue você

            </section>

          </div>

        </div>

        {/*<---Fim da caixa de sugestões--->*/}

        {/*<---Fim da primeira parte do corpo--->*/}

        {/*<---Caixa da publicação 2--->*/}

        <div className="publicacao2">

          <section className="cima">
            <img className="bandeira" src={bandeira} alt=""></img>
                brasil_oficial
          </section>

          <img className="br_masc" alt="" src={br_masc}></img>

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

          {/*<---Caixa de comentário--->*/}

          <section className="aba_fim">
            <input className="comentario" type="text" placeholder="Adicione um comentário..."></input>
            <div className="publicar">Publicar</div>
          </section>

          {/*<---Fim da caixa de comentário--->*/}

        </div>

        {/*<---Fim da publicação 2--->*/}

        {/*<---Fim da página--->*/}

      </>

    );

  }

}

export default Home;
