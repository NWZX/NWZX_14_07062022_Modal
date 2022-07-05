# hr-net-front-modal

This project is a front-end modal manager design for [hr-net-front](https://github.com/NWZX/NWZX_14_07062022).

## How to Install
```bash
    npm install @nwzx/hr-net-front-modal@0.2.3
```	

## How to Use

```TSX
const Demo:  React.FC<Props> = () => {
    // Toggle modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // CSS class name for Modal sub components
    const modalSubClassName = {
        bodyClassName: 'your-css-class-name',
        headerClassName: 'your-css-class-name',
        contentClassName: 'your-css-class-name',
        footerClassName: 'your-css-class-name'
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }
  
    /*
        Exemple :

        <Modal
            // Event handler for closing the modal
            onClose={() => setOpenModal(false)} 

            // Set to true to show modal
            open={openModal} 

            //Title of the modal
            title="Employee Created"

            // CSS class name for the modal element
            className="your-css-class-name"

            // CSS class name for Modal sub components
            styles={modalSubClassName} 
        >
        </Modal>
    */

    return (
        <Modal
            open={isModalOpen}
            title="Employee Created"
            className="your-css-class-name"
            styles={modalSubClassName}
            onClose={handleCloseModal}
        >
            <div className="modal-centent"></div> // Content of the modal
        </Modal>
    );
}
```