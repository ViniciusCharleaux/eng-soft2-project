import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, rgba(255, 168, 0, 0.5) -23.56%, rgba(255, 255, 255, 0.5) 28.03%);
  position: relative;

  overflow-x: hidden;

  p {
      color: #FF3030;
      font-family: 'Fredoka One';
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 77px;
      text-align: center;
      text-transform: uppercase;
    }

    a {
      font-family: 'Fredoka One';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 44px;
      text-transform: uppercase;
      color: #000000;
    }

  main{
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 4rem;
    justify-content: space-between;

    .topo{
      width: 100%;
      height: 80px; 
      text-align: center;
      font-family: 'Fredoka One';
      font-style: normal;
      font-weight: 400;
      font-size: 45px;
      color: white;
      background: #FFA800;
      box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);
      border-radius: 50px;
      justify-content: center;
      display: flex;
      align-items: center;
      
  }
    .center{
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;

        margin: 3rem 0;


        .left{
          height: max-content;
          width: 45%;

          display: flex;
          flex-direction: column;
          background: linear-gradient(336.98deg, rgba(134, 123, 123, 0.14) 50.05%, rgba(196, 196, 196, 0) 118.16%);
          border-radius: 50px;
          padding: 1rem 2rem 3rem 2rem;

          .guarnicao-container{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0 2rem;
          }
        }

        .right{
          height: max-content;
          width: 45%;

          display: flex;
          flex-direction: column;
          background: linear-gradient(336.98deg, rgba(134, 123, 123, 0.14) 50.05%, rgba(196, 196, 196, 0) 118.16%);
          border-radius: 50px;
          padding: 1rem 2rem 3rem 2rem;

          .mistura-container{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            padding: 0 2rem;
          }
        }

      }


  .fazer_pedido {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;


    button{
      width: 280px;
      height: 70px;
      background-color: var(--color-red);
      border-radius: 50px;
      color: var(--color-white);
      font-size: 1.9rem;
      font-family: 'Fredoka One';

      &:hover{
        text-decoration: underline;
      }
    }
  }
  }

  .fritas{
    position: absolute;
    top: 30%;
  }
`
