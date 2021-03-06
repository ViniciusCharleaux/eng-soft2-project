import { Container } from './styles';
import { Header } from '../../components/Header'
import { images } from '../../constants';



// procurar remover depois. pagina nao mostra sem. 
export const ShowContact: React.FC = () => {

  return (
    <Container>
      <Header
        title1='cardápio'
        title2='contato'
      />
      <main>

          <div className="topo">FALE CONOSCO!</div>

          <div className="center">
            <div className="left">
              <div className="contact-container">
                <img src={images.contato} alt="contato" className="contato" />
              </div>
            </div>
            <div className="right">
              <div className="food-foto-container">
                <img src={images.caixinha} alt="caixinha de comida" className="caixinha" />
              </div>
              
            </div>
          </div>
      </main>
    </Container>
  )
}