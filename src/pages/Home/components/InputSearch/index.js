import PropTypes from 'prop-types';
import { Container } from './styles';

export default function InputSearch({
  qtyOfContacts,
  value,
  onChange,
}) {
  return (
    qtyOfContacts > 0 && (
      <Container>
        <input
          value={value}
          type="text"
          placeholder="Pesquise pelo nome..."
          onChange={onChange}
        />
      </Container>
    )
  );
}

InputSearch.propTypes = {
  qtyOfContacts: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
