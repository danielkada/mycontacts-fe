import { useCallback, useRef, useState, createRef } from 'react';

export default function useAnimatedList(initialValue = []) {
  const [items, setItems] = useState(initialValue);
  const [pendingRemovalItemsIds, setPendingRemovalItemsId] = useState([]);

  const animatedRefs = useRef(new Map());

  const handleRemoveItem = useCallback((id) => {
    setPendingRemovalItemsId(
      (prevState) => [...prevState, id],
    );
  }, []);

  /*
  const handleAnimationEnd = useCallback((id) => {
    setItems(
      (prevState) => prevState.filter((message) => message.id !== id),
    );
    setPendingRemovalItemsId(
      (prevState) => prevState.filter((messageId) => messageId !== id),
    );
  }, []);

  useEffect(() => {
    function handleAnimationEnd() {
      onAnimationEnd(message.id);
    }

    const elementRef = animatedElementRef.current;
    if (isLeaving) {
      elementRef.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (elementRef) {
        elementRef.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [isLeaving, message.id, onAnimationEnd]);
  */

  const getAnimatedRef = useCallback((itemId) => {
    let animatedRef = animatedRefs.current.get(itemId);

    if (!animatedRef) {
      animatedRef = createRef();
      animatedRefs.current.set(itemId, animatedRef);
    }

    return animatedRef;
  }, []);

  const renderList = useCallback((renderItem) => (
    items.map((item) => {
      const isLeaving = pendingRemovalItemsIds.includes(item.id);
      const animatedRef = getAnimatedRef(item.id);

      return renderItem(item, {
        isLeaving, animatedRef,
      });
    })
  ), [items, pendingRemovalItemsIds, getAnimatedRef]);

  return {
    items,
    setItems,
    renderList,
    handleRemoveItem,
  };
}
