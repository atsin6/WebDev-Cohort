import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [showTimer, setShowTimer] = useState(true)

  // return <div style={{display: "flex", gap: "10px"}}>
  //   <Card>
  //     <h2>Cart Title</h2>
  //     {/* <div style={{color: "yellow"}}>Share your thoughts: <input type="text"></input></div> */}
  //     <p>This is the paragraph</p>
  //   </Card>
  //   <Card>
  //     <h2>Cart Title</h2>
  //     <textarea></textarea>
  //     <p>This is the paragraph</p>
  //   </Card>
  // </div>


    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setModalOpen(true)}>Open Modal</button>
            {isModalOpen && (<Modal onClose={() => setModalOpen(false)}>
                <h2>Modal Title</h2>
                <p>This is some content inside the modal.</p>
            </Modal>)}
        </div>
    );
}

// const Card = ({ children }) => {
//     return (
//         <div style={{
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '20px',
//             margin: '10px',
//             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
//         }}>
//             {children}
//         </div>
//     );
// };

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '5px',
            }}>
                <button onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    );
};


export default App
