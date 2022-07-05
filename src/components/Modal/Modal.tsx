import React from 'react';
import './Modal.css';

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClose?: () => void;
}
interface PropsModal extends Props {
  /** Change the modal State */
  open?: boolean;
  /** Define the modal header title text */
  title?: string;
  /** CSS className of modal container */
  className?: string;
  /** CSS classNames of modal elements */
  styles?: {
    /** CSS className of the modal  */
    contentClassName?: string;
    /** CSS className of the modal header */
    headerClassName?: string;
    /** CSS className of the modal children container */
    bodyClassName?: string;
    /** CSS className of the modal footer */
    footerClassName?: string;
  }
}

const Modal: React.FC<PropsModal> = ({
  children,
  open,
  onClose,
  title,
  className,
  styles,
}) => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    window.onclick = function (event) {
      if (modalRef && modalRef?.current && event.target == modalRef?.current) {
        onClose && onClose();
      }
    };

    return () => {
      window.onclick = null;
    };
  }, []);

  return (
    <div
      ref={modalRef}
      className={'cs-modal' + ` ${className || ''}`}
      style={{ display: open ? 'block' : 'none' }}
    >
      <div
        className={'cs-modal-content' + ` ${styles?.contentClassName || ''}`}
      >
        <ModalHeader onClose={onClose} className={styles?.headerClassName}>{title}</ModalHeader>
        <ModalBody className={styles?.bodyClassName}>{children}</ModalBody>
        <ModalFooter className={styles?.footerClassName} />
      </div>
    </div>
  );
};

const ModalHeader: React.FC<Props> = ({ children, onClose, className }) => {
  return (
    <div className={"cs-modal-header" + ` ${className || ''}`}>
      <h2>{children}</h2>
      {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.*/}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        className="cs-modal-close"
        onClick={onClose}
      >
        <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
      </svg>
    </div>
  );
};
const ModalBody: React.FC<Props> = ({ children, className }) => {
  return children ? <div className={"cs-modal-body" + ` ${className || ''}`}>{children}</div> : null;
};
const ModalFooter: React.FC<Props> = ({ children, className }) => {
  return children ? <div className={"cs-modal-footer" + ` ${className || ''}`}>{children}</div> : null;
};

export default Modal;
