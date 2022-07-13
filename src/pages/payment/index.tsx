import { useState } from "react";
import Modal from 'react-modal';
import images from "../../constants/images";
import { Container, ModalContainer } from './styles';

interface PaymentProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const Payment: React.FC<PaymentProps> = ({ isOpen, onRequestClose }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (

        <>

            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
                style={{
                    content: {
                        maxWidth: "1200px",
                    }
                }}
            >
                <ModalContainer>
                    <main>
                        <div className="img-pacote">
                            PACOTE
                        </div>
                        <div className="conteudo">

                            <div className="titulo">Selecione a forma de pagamento:</div>
                            <div className="opcoes-img">
                                <div className="img-marmita">
                                    img-marmita
                                </div>
                                <div className="opcoes-marmita">

                                    <label>1x arroz</label>
                                    <label>1x feijão</label>
                                    <label>1x farofa</label>
                                    <label>1x parmegiana de frango</label>
                                </div>
                            </div>

                            <div className="opcao-pagamento">
                                <p>
                                    <input type="radio" name="pagamento" className="radio-pagamento"></input>
                                    <label htmlFor="cartao">cartão</label>

                                    <input type="radio" name="pagamento" className="radio-pagamento"></input>
                                    <label htmlFor="dinheiro">dinheiro</label>

                                </p>
                                <p>
                                    <input type="radio" name="pagamento" className="radio-pagamento"></input>
                                    <label htmlFor="pix">pix</label>

                                    <input type="radio" name="pagamento" className="radio-pagamento"></input>
                                    <label htmlFor="outro">outro</label>

                                </p>
                            </div>

                            <div className="valor">
                                <label>valor:</label>
                                <label>R$15,00</label>
                            </div>

                            <div className="botoes">
                                <button
                                    className='voltar' onClick={() => onRequestClose()} >
                                    &lt; voltar
                                </button>
                                <button
                                    className='avancar'>
                                    avançar &gt;
                                </button>
                            </div>

                        </div>

                    </main>
                </ModalContainer>

            </Modal>

        </>


    )
}