import { useEffect , useState } from 'react'
import { useFoodDataDelete } from '../hooks/useFoodDataDelete';
import { FoodDataId } from '../interface/FoodDataId';

import "./modal.css";

interface InputProps {
    label: string,
    value: number,
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({label, value, updateValue}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input >
        </>
    )
}

export function ModalDelete({ closeModal }: ModalProps){
    const [id, setId] = useState(0);
    const { mutate, isSuccess, isLoading } = useFoodDataDelete();

    const submit = () => {
        const foodDataId : FoodDataId = {
            id
        }
        mutate(foodDataId)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])
    
    return (
        <div className="modal-overflow">
            <div className="modal-body">
                <h2> Exclua um item </h2>
                <form className="input-container">
                    <Input label="Item id:" value={id} updateValue={ setId } />
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'excluindo...' : 'Excluir'}
                </button>
            </div>
        </div>
    )
}