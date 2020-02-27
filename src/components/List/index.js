import React, { useState} from 'react';
import {  Button} from 'react-bootstrap';
import Card from '../Card';
import AddCardModal from '../AddCardModal';




export default function List ({data, index: listIndex, addCard, removeCard, editCard, addInterviewQuestion}){
 
    const [modalShow, setModalShow] = useState(false);
   
    return (
        <>
       
            <header>
                <h2 className="list-title">{data.title}</h2>
                    
            </header>
            <ul>
                
                {data.cards.map((card, index) => <Card key={index} listIndex= {listIndex} index={index} data={card} removeCard={removeCard} editCard ={editCard} addInterviewQuestion={addInterviewQuestion}/>)}
            </ul>
            {data.creatable && (
                    <>
                        <Button size="sm" block onClick = {()=> setModalShow(true)}>
                           <i className="fa fa-plus" aria-hidden="true"></i>
                        </Button>
                        <AddCardModal
                             show = {modalShow}
                             onHide= {()=>setModalShow(false)}
                             addCard={addCard}
                        />
                   </> )
                }
        </>
    );
    
}
