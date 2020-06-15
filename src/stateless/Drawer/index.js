import React, { useState, useRef } from 'react';
import { FiArrowLeftCircle } from 'react-icons/fi';
// import { useDispatch, useSelector } from 'react-redux';
//
import './styles.scss';
// import { openDrawer, closeDrawer } from '../../store/modules/drawer/actions';


export default function Drawer({ children, title, footer, viewName }) {
  const container = useRef(null);
  const [show, setShow] = useState(false)

  // const dispatch = useDispatch();
  // const showDrawer = useSelector((state) => state.drawer.showDrawer);
  // const view = useSelector((state) => state.drawer.view);

  // function handleOpenDrawer() {
  //   if (showDrawer) {
  //     drawerContainer.current.classList.toggle('drawer_container--open');
  //     setTimeout(() => {
  //       dispatch(closeDrawer());
  //     }, 500);
  //   } else {
  //     dispatch(openDrawer());
  //   }
  // }

  return show ? (
      <div className="drawer">
        <div ref={container} className="drawer__container drawer_container--open">
          <div className="drawer__header">
            <button onClick={() => {
              setShow(false)
              setTimeout(() => {
                setShow(true)
              }, 2000);
            }}>
            <FiArrowLeftCircle size="1.5rem"/>
            </button>
            <div className="drawer__header__title__container">
              <h4 className="drawer__header__title">title</h4>
            </div>
          </div>
          <div className="drawer__body">{children}</div>
          {footer && <div className="drawer__footer">{footer}</div>}
        </div>
      </div>
    ) : null
}