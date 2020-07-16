import React, { Component } from "react";
import "./styles.css";
import casa from "../../assets/casa.svg";
import seta from "../../assets/seta.svg";
import bussola from "../../assets/bussola.svg";
import coracao from "../../assets/coracao.svg";
import timao from "../../assets/timao.jpg";
import comente from "../../assets/comente.svg";
import save from "../../assets/save.svg";

/*acho q é coment */

class Home extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="logo">
            <img
              className="logo"
              src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-4.png"
              alt=""
            />
          </div>
          <input
            className="pesquisa"
            type="text"
            placeholder="Pesquisar"
          ></input>
          <img className="casa" src={casa} alt=""></img>
          <img className="seta" src={seta} alt=""></img>
          <img className="bussola" src={bussola} alt=""></img>
          <img className="coracao" src={coracao} alt=""></img>
          <img className="foto" src={"https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg"} alt=""></img>
        </div>

        <div>
          <section className="corpo">
            <div className="stories">stories</div>
            <div className="publicacao1">
              <section className="cima">
                <img className="timao" src={timao} alt=""></img>
                corinthians
              </section>
              <img
                className="corinthians"
                alt=""
                src="https://http2.mlstatic.com/adesivo-de-porta-geladeira-etc-escudo-corinthians-35cm-a328-D_NQ_NP_323815-MLB25300188994_012017-F.jpg"
              ></img>
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
                <input
                  className="comentario"
                  type="text"
                  placeholder="Adicione um comentário..."
                ></input>
                <div className="publicar">Publicar</div>
              </section>
            </div>
            <div className="sugestoes">
              <section className="cabeca">
                <img
                  className="foto2"
                  src={
                    "https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg"
                  }
                  alt=""
                ></img>
                <section className="nome">leao</section>
                <br></br>leao_bonito arrumar
              </section>

              <section className="sugest">
                Sugestões para você
                <img className="img" src={"https://media.istockphoto.com/photos/cute-brown-striped-cat-satisfied-portrait-square-picture-id1140126272"} alt=""></img>
                gato<br></br>Segue você
                <img className="img" src={"https://coisasdebichoweb.com/wp-content/f15d/uploads/coisasdebichoweb.com/2017/10/os-animais-mais-bonitos-do-mundo-inteiro-cavalo-dourado1.jpg"} alt=""></img>
                <img className="img" src={"https://image.winudf.com/v2/image/Y29tLml3YW5yZXdvay5DdXRlYW5pbWFsd2FsbHBhcGVyc19zY3JlZW5fMF8xNTE2NzczOTk2XzA3NA/screen-0.jpg?fakeurl=1&type=.jpg"} alt=""></img>
                <img className="img" src={"https://imagens.mdig.com.br/bichos/50_animais_exoticos_00.jpg"} alt=""></img>
                <img className="img" src={"https://t2.ea.ltmcdn.com/pt/images/4/5/1/img_os_10_animais_mais_bonitos_do_mundo_21154_paso_1_600.jpg"} alt=""></img>
              </section>
            </div>
          </section>
        </div>

        <div className="publicacao2"></div>
      </>
    );
  }
}

export default Home;
