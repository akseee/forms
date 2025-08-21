import { useState } from 'react';
import { Modal } from '../../components/Modal/Modal';
import type { TUserData } from '../../utils/types';
import { ClassicForm } from '../Forms/ClassicForm';
import { QuickForm } from '../Forms/QuickForm';

export const ControlsList = () => {
  const [isClassicOpen, setIsClassicOpen] = useState(false);
  const [isQuickOpen, setIsQuickOpen] = useState(false);

  const handleData = (data: TUserData) => {
    console.log(data);
    setIsClassicOpen(false);
    setIsQuickOpen(false);
  };

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
          <ClassicForm handleSubmitData={handleData} />
        </Modal>
        <button onClick={() => setIsQuickOpen(true)}>Quick Form: light</button>
        <Modal isOpen={isQuickOpen} handleClose={() => setIsQuickOpen(false)}>
          <QuickForm handleSubmitData={handleData} />
        </Modal>
      </div>
    </div>
  );
};
