import { useState } from 'react';
import { useUpdateContactsMutation } from 'redux/contactsSlice';
import { Form, Input, Button, Modal } from 'antd';
import toast from 'react-hot-toast';
import { SpinnerForButton } from 'components/Spinner/Spinner';

export const ModalUpdateContact = ({ contact, close, isOpen }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const [updateContacts, { isLoading }] = useUpdateContactsMutation();

  const onChangeField = evt => {
    const fieldName = evt[0]?.name[0] ?? null;
    switch (fieldName) {
      case 'name':
        setName(evt[0].value);
        // form.setFieldsValue({
        //   note: 'name--',
        // });
        break;
      case 'number':
        setNumber(evt[0].value);
        // form.setFieldsValue({
        //   note: 'number--',
        // });
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    // e.preventDefault();
    console.log(e);
    updateContacts({ id: contact.id, user: { name, number } })
      .then(() => toast.success(`${name} was updated in your phonebook.`))
      .catch(() => toast.error(`Error happend. We can't update the contact.`));
    close();
  };

  return (
    <Modal
      title="Update contact"
      open={isOpen}
      onOk={handleSubmit}
      okText="Update contact"
      // confirmLoading={true}
      onCancel={close}
      centered={true}
    >
      <Form
        layout="vertical"
        name="updateContact"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFieldsChange={onChangeField}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please, input your username' }]}
        >
          <Input
            value={name}
            type="text"
            name="name"
            defaultValue={name}
            // onChange={onChangeField}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces."
          />
        </Form.Item>

        <Form.Item
          label="Number"
          name="number"
          rules={[{ required: true, message: 'Please, input a number' }]}
        >
          <Input
            autoComplete="off"
            type="tel"
            name="number"
            value={number}
            defaultValue={number}
            // onChange={onChangeField}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
{
  /* <Form onSubmit={handleSubmit}>
        <label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit" disabled={isLoading}>
          Update contact
        </Button>
        <Button type="button" onClick={close}>
          Cancel
        </Button>
      </Form> */
}
