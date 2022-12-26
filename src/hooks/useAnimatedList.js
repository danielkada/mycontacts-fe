import { useCallback, useState } from 'react';

export default function useAnimatedList(initialValue = []) {
  const [items, setItems] = useState(initialValue);
  const [pendingRemovalItemsIds, setPendingRemovalItemsId] = useState([]);

  const handleRemoveItem = useCallback((id) => {
    setPendingRemovalItemsId(
      (prevState) => [...prevState, id],
    );
  }, []);

  const handleAnimationEnd = useCallback((id) => {
    setItems(
      (prevState) => prevState.filter((message) => message.id !== id),
    );
    setPendingRemovalItemsId(
      (prevState) => prevState.filter((messageId) => messageId !== id),
    );
  }, []);

  const renderList = useCallback((renderItem) => (
    items.map((item) => renderItem(item, {
      isLeaving: pendingRemovalItemsIds.includes(item.id),
    }))
  ), [items, pendingRemovalItemsIds]);

  return {
    items,
    renderList,
    setItems,
    handleRemoveItem,
    handleAnimationEnd,
  };
}
