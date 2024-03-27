import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation('main');
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem, ipsum dolorsit amet consectetur adipisicing elit. Quae, expedita
        autem labore distinctio voluptatibus non. Repellat cumque vero minima
        inventore aut praesentium illo eum, dolor magnam sapiente enim nostrum
        nemo. Blanditiis neque, vel, aliquid consectetur nulla aspernatur totam
        harum quis laborum officia incidunt laudantium architecto exercitationem
        nesciunt ipsa minus? Ipsam labore facere dolore iure voluptatum quae
        blanditiis eum molestiae eius? Officiis ducimus aperiam laudantium
        voluptatibus, repellendus dolorum sit similique voluptates distinctio ea
        et, ipsa velit nihil inventore maiores perspiciatis tenetur iusto, nam
        illo placeat quaerat accusantium cumque eius! Voluptas, iure? Nihil hic
        consequatur autem fuga inventore quo cumque sunt odio, veritatis labore?
        Libero provident nesciunt similique dolorum voluptate accusamus, quod
        officiis voluptatum, voluptatem, enim et reiciendis fugiat odit illo
        earum. Corrupti est mollitia vel voluptatibus doloremque esse facere
        harum delectus asperiores cupiditate dolore doloribus libero fugiat
        aliquid, reiciendis nam, error recusandae veniam, sint culpa unde
        dolores alias quae at. Rem. Nulla nam fuga ut. Voluptates ut nulla eius
        ipsum magnam quisquam explicabo, quae, voluptatem nostrum aliquid
        corrupti! Esse fugit nobis cumque modi eos delectus consequuntur. Alias
        doloremque illo quae amet! Eveniet enim, animi eligendi tempora
        voluptate eius quo voluptatem debitis quas possimus dolor doloremque
        harum distinctio eum blanditiis ipsam pariatur modi dolores iure
        quibusdam rem dolorum! Eos a ad quidem! Rerum placeat magni aliquam
        possimus? Repudiandae ab, aliquam beatae officiis earum et id nobis
        aliquid, quas debitis eum incidunt optio impedit error sit, explicabo
        voluptatibus molestiae iste ullam natus doloremque. Magni, harum.
        Aperiam id quaerat dolorum eum praesentium cum in quam officiis maiores,
        quae commodi molestiae repellendus minus repellat? Nisi neque dolores
        temporibus. Porro voluptas doloribus inventore asperiores distinctio
        error. Animi dignissimos ducimus suscipit a est, minima eos molestias
        exercitationem ex illo expedita impedit voluptatem debitis omnis esse
        vero itaque asperiores ad quas? Voluptates est suscipit quis,
        consequuntur excepturi natus.
      </Modal>
    </div>
  );
};
