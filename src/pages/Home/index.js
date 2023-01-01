import Loader from '../../components/Loader';

import Modal from '../../components/Modal';

import useHome from './useHome';
import InputSearch from './components/InputSearch';
import Header from './components/Header';
import ErrorStatus from './components/Error';
import EmptyList from './components/EmptyList';
import SearchNotFound from './components/SearchNotFound';
import ContactsList from './components/ContactsList';

import {
  Container,
} from './styles';

export default function Home() {
  const {
    isPending,
    isLoading,
    hasError,
    isDeleteModalVisible,
    isLoadingDelete,
    filteredContacts,
    contacts,
    contactBeingDeleted,
    searchTerm,
    orderBy,
    handleToggleOrderBy,
    handleChangeSearchTerm,
    handleTryAgain,
    handleDeleteContact,
    handleConfirmDeleteContact,
    handleCloseDeleteModal,
  } = useHome();

  const hasContacts = contacts.length > 0;
  const isListEmpty = !hasError && !isLoading && !hasContacts;
  const isSearchEmpty = !hasError && hasContacts && filteredContacts.length < 1;

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <InputSearch
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      )}

      <Header
        qtyOfContacts={contacts.length}
        qtyFilteredContacts={filteredContacts.length}
        hasError={hasError}
      />

      {hasError && (<ErrorStatus onTryAgain={handleTryAgain} />)}

      {(isListEmpty) && (<EmptyList />)}

      {(isSearchEmpty) && (<SearchNotFound value={searchTerm} />)}

      {hasContacts && (
        <>
          {isPending && <h1>carregando</h1>}
          <ContactsList
            filteredContacts={filteredContacts}
            orderBy={orderBy}
            onToggleOrderBy={handleToggleOrderBy}
            onDeleteContact={handleDeleteContact}
          />

          <Modal
            danger
            visible={isDeleteModalVisible}
            isLoading={isLoadingDelete}
            title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"?`}
            confirmLabel="Deletar"
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmDeleteContact}
          >
            <p>Esta ação não poderá ser desfeita!</p>
          </Modal>
        </>
      )}
    </Container>
  );
}
