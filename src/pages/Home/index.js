import {
  Container,
  InputSearchContainer,
  Header,
  ListContainer,
  Card,
} from './styles';

import arrow from '../../assets/icons/arrow.svg';
import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <a href="google.com">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Mateus Silva</strong>
            <small>Instragram</small>
          </div>
          <span>mateus@devacademy.com</span>
          <span>(41) 99999-99999</span>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Trash" />
          </button>
        </div>
      </Card>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Mateus Silva</strong>
            <small>Instragram</small>
          </div>
          <span>mateus@devacademy.com</span>
          <span>(41) 99999-99999</span>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Trash" />
          </button>
        </div>
      </Card>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Mateus Silva</strong>
            <small>Instragram</small>
          </div>
          <span>mateus@devacademy.com</span>
          <span>(41) 99999-99999</span>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Trash" />
          </button>
        </div>
      </Card>
    </Container>
  );
}
