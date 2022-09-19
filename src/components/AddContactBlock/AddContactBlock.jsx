import { useState } from 'react';
import { ContactForm } from 'components/Form/Form';
import { Card, Button, Stack } from 'react-bootstrap';
import { Block } from 'components/App/App.styled';
import { ButtonClose } from 'components/ButtonClose/ButtonClose.styled';

export const AddContactBlock = () => {
  const [isAddFormShown, setIsAddFormShown] = useState(false);

  return isAddFormShown ? (
    <Block>
      <Card.Body>
        <ButtonClose onClick={() => setIsAddFormShown(false)} />
        <h1>Add new contact</h1>
        <ContactForm close={() => setIsAddFormShown(false)} />
      </Card.Body>
    </Block>
  ) : (
    <Block>
      <Card.Body>
        <Stack>
          <Button
            type="button"
            onClick={() => setIsAddFormShown(true)}
            variant="outline-primary"
          >
            Add new contact
          </Button>
        </Stack>
      </Card.Body>
    </Block>
  );
};
