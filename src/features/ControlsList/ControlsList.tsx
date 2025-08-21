import { useState } from 'react';
import { Modal } from '../../components/Modal/Modal';
import { ClassicForm } from '../ClassicForm/ClassicForm';
import { QuickForm } from '../QuickForm/QuickForm';

export const ControlsList = () => {
  const [isClassicOpen, setIsClassicOpen] = useState(false);
  const [isQuickOpen, setIsQuickOpen] = useState(false);
  return (
    <div>
      <h2>Controls List</h2>
      <div>
        <button onClick={() => setIsClassicOpen(true)}>
          Classic Form: pen
        </button>
        <Modal
          isOpen={isClassicOpen}
          handleClose={() => setIsClassicOpen(false)}
        >
          <ClassicForm />
        </Modal>
        <button onClick={() => setIsQuickOpen(true)}>Quick Form: light</button>
        <Modal isOpen={isQuickOpen} handleClose={() => setIsQuickOpen(false)}>
          <QuickForm />
        </Modal>
      </div>
    </div>
  );
};
