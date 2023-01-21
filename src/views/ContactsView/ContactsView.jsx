import AddContactForm from '../../components/AddContactForm';
import ContactList from '../../components/ContactList';
import Spinner from '../../components/Spinner';
import Filter from '../../components/Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cats from './cats.jpg';
import Modal from '../../components/Modal';
import {
  Container,
  PhonebookContainer,
  Title,
  Phonebook,
} from './ContactsView.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/filterSlice';
import ContactEditor from '../../components/ContactEditor';
import {
  useFetchContactsQuery,
  useDeleteContactsMutation,
  useCreateContactsMutation,
} from 'redux/itemsSlice';

export default function ContactsView() {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const { data, isFetching } = useFetchContactsQuery();
  console.log(useFetchContactsQuery());
  const [deleteContact] = useDeleteContactsMutation();
  const [newContact] = useCreateContactsMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);
  const addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
    };
    if (data.some(contact => contact.name === name)) {
      return toast.info(`${contact.name} вже такий контакт існує`);
    }
    newContact(contact);
  };
  const [editedContact, setEditedContact] = useState(null);
  const editContact = ({ name, number, id }) => {
    const contact = {
      name,
      number,
      id,
    };
    setEditedContact(contact);
    toggleModal();
  };

  const changeFilter = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = value.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      {/* <ImgContainer> */}
      <img
        src={cats}
        alt="cats"
        width="40%"
        height="40%"
      />
      {/* </ImgContainer> */}
      <PhonebookContainer>
        <Phonebook>Phonebook</Phonebook>
        <AddContactForm onSubmit={addContact} />
        <ToastContainer
          position={'top-center'}
          autoClose={3000}
          theme={'colored'}
        />
        <Title> Contacts : </Title>
        <Filter value={value} onChange={changeFilter} />
        {/* nід час виконання заnиту кpутиться сnінеp */}
        {isFetching && <Spinner />}
        {/*коли npийшли вже дані з бекенду, то pендеимо сnисок контактів */}
        {data && (
          <ContactList
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}
            onEditContact={editContact}
          />
        )}
        {isModalOpen && (
          <Modal onClose={toggleModal}>
            <ContactEditor onClose={toggleModal} data={editedContact} />
          </Modal>
        )}
      </PhonebookContainer>
      {/* )} */}
    </Container>
  );
}
