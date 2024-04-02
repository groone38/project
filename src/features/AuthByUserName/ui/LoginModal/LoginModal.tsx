import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { LoginForm } from '../LoginForm/LoginForm';

interface ILoginModal {
  className?: string;
  isOpen: boolean;
  isClose: () => void;
}

export const LoginModal = ({ className, isClose, isOpen }: ILoginModal) => {
  return (
    <Modal
      className={classNames(cls.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={isClose}
    >
      <LoginForm />
    </Modal>
  );
};
