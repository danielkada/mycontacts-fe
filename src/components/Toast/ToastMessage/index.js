import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { Container } from './styles';

import xCircleIcon from '../../../assets/icons/x-circle.svg';
import xCircleCheckIcon from '../../../assets/icons/check-circle.svg';

export default function ToastMessage({
  message, onRemoveMessage, isLeaving, animatedRef,
}) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Container
      onClick={handleRemoveToast}
      isLeaving={isLeaving}
      type={message.type}
      tabIndex={0}
      role="button"
      ref={animatedRef}
    >
      {message.type === 'danger' && <img src={xCircleIcon} alt="X" />}
      {message.type === 'success' && <img src={xCircleCheckIcon} alt="Check" />}
      <strong>{message.text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number,
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
  isLeaving: PropTypes.bool.isRequired,
  animatedRef: PropTypes.shape().isRequired,
};
