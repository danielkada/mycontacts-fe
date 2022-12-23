import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { Container } from './styles';

import xCircleIcon from '../../../assets/icons/x-circle.svg';
import xCircleCheckIcon from '../../../assets/icons/check-circle.svg';
import useAnimatedUnmont from '../../../hooks/useAnimatedUnmont';

export default function ToastMessage({ message, onRemoveMessage, isLeaving }) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmont(!isLeaving);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveMessage, isLeaving]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  if (!shouldRender) {
    return null;
  }

  return (
    <Container
      ref={animatedElementRef}
      isLeaving={isLeaving}
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
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
};
