import { useState, useEffect, useCallback } from 'react';

import ToastMessage from '../ToastMessage';

import { toastEventManager } from '../../../utils/toast';

import { Container } from './styles';

export default function ToastContainer() {
  const [messages, setMessages] = useState([]);
  const [pendingRemovalMessagesIds, setPendingRemovalMessagesId] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          type,
          text,
          duration,
        },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, []);

  const handleRemoveMessage = useCallback((id) => {
    setPendingRemovalMessagesId(
      (prevState) => [...prevState, id],
    );
  }, []);

  const handleAnimationEnd = useCallback((id) => {
    setMessages(
      (prevState) => prevState.filter((message) => message.id !== id),
    );
    setPendingRemovalMessagesId(
      (prevState) => prevState.filter((messageId) => messageId !== id),
    );
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
          isLeaving={pendingRemovalMessagesIds.includes(message.id)}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </Container>
  );
}
