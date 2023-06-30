/* Componente principal da Aplicação */
/* Normalmente este componemte traz todas as rotas da aplicação */
/* Neste caso sera criado a tela aqui mesmo */
/* interrogação indica que pode ser um defined */

import './App.css';
import { useState } from 'react';
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './create-modal/create-modal';
import { ModalDelete } from './create-modal/create-modal-delete';

function App() {

  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  const handleOpenModalDelete = () => {
    setIsModalOpenDelete(prev => !prev)
  }

  return (
    <div className="container">
      <h2> Restaurante Oliveira </h2>
      <h1> Nosso Cardápio </h1>
      <div className="card-grid">
        {data?.map(foodData => 
          < Card 
            id = {foodData.id} 
            price = {foodData.price} 
            title = {foodData.title}  
            image = {foodData.image}
          />
        )}
      </div> 
      
      {isModalOpenDelete && <ModalDelete closeModal={handleOpenModalDelete}/>}
      <button className='button-ed' onClick={handleOpenModalDelete}> Delete</button>

      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}> Novo</button>
    </div>
  )   
}

export default App
