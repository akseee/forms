import { useState } from 'react';
import { Modal } from '../../components/Modal/Modal';
import type { TUserData } from '../../utils/types';
import { ClassicForm } from '../Forms/ClassicForm';
import { QuickForm } from '../Forms/QuickForm';
import { useDispatch } from '../../app/store/store';
import { characterActions } from '../../app/store/characterSlice';
import styles from './ControlList.module.css';

export const ControlsList = () => {
  const [isClassicOpen, setIsClassicOpen] = useState(false);
  const [isQuickOpen, setIsQuickOpen] = useState(false);

  const dispatch = useDispatch();

  const handleData = (data: TUserData) => {
    console.log(data);
    setIsClassicOpen(false);
    setIsQuickOpen(false);

    dispatch(characterActions.addCharacter(data));
  };

  return (
    <div className={styles.content}>
      <button onClick={() => setIsClassicOpen(true)}>Classic way</button>
      <Modal isOpen={isClassicOpen} handleClose={() => setIsClassicOpen(false)}>
        <ClassicForm handleSubmitData={handleData} />
      </Modal>
      <button onClick={() => setIsQuickOpen(true)}>Quick way</button>
      <Modal isOpen={isQuickOpen} handleClose={() => setIsQuickOpen(false)}>
        <QuickForm handleSubmitData={handleData} />
      </Modal>
    </div>
  );
};
