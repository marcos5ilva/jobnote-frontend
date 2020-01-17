import React, { useState,useEffect, useCallback, useReducer} from 'react';
import {loadLists} from '../../services/api';
import List from '../List';
import BoardContext from './context';

import produce from 'immer';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';


//const data = loadLists();




export default function Board(){
    
 // const [lists,setLists] = useState(data);

   
   const [lists,setLists] = useState([]);
   const [firstList,setFirstList] = useState([]);
   //const [lists, listsDispatch] = useReducer(listsReducer, [])

  

    useEffect(() => {
        
       axios.get('http://localhost:5000/lists')
       .then(res => {
           const data = res.data.lists;
           if(data){
           setLists(data);
           console.log(data[0].cards)
           }
       })
     .catch(e =>{
       console.log(e)
     })
       
    },[])

   
    const addCard = async (newCard)=>{
        try{
           const card = await axios.patch('http://localhost:5000/cards/add/5dc7786edce42e2fa6b761f3',newCard)
            const newList = [...lists];
            if(card.data){
                newList[0].cards.push(card.data)               
            }
            setLists(newList)

        } catch(e){
            console.log("error")
        }
    }

    const removeCard = async (card)=>{
        try{
            axios.delete('http://localhost:5000/cards/'+card._id)
            
            console.log('card', card.list)
            lists.forEach(list => {
                if(list._id === card.list){
                    list.cards = list.cards.filter(cardList => {
                        return cardList._id !== card._id;
                    })
                }
            })

            setLists([...lists]);
        } catch(e){
            console.log(e);
        }
    }

    const editCard = async (cardUpdate)=>{
        console.log('editCard');
        try{
            const card = await axios.patch('http://localhost:5000/cards/add/5dc7786edce42e2fa6b761f3',cardUpdate)
             const newList = [...lists];
             if(card.data){
                 newList[0].cards.push(card.data) 
                               
             }
             setLists(newList)
 
         } catch(e){
             console.log("error", e)
         }
    }

    const addInterviewQuestion = async (interviewQuestion, card)=>{
        console.log('Interview question added', interviewQuestion);
        console.log('CardID ', card);

        try{
            const question = await axios.patch('http://localhost:5000/interviewquestions/add/'+card._id, interviewQuestion)
             console.log('question.data ', question.data);
             console.log('newList[0].cards.interviewQuestions', lists[0].cards)
            const newList = [...lists];
             if(question.data){
                 console.log('interviewQuestion obj', interviewQuestion)
                newList.forEach(list => {
                    if(list._id ===card.list){
                        list.cards = list.cards.filter(cardList => {
                            return cardList.interviewQuestions.push({question: interviewQuestion.interviewQuestions[0].question, answer: interviewQuestion.interviewQuestions[0].answer});
                        })
                    }
                })
                }
                console.log('newList updated ', newList);
             setLists(newList);
        }
        catch(e){
            console.log("error", e)
        }
    }
    //const addQuestion = async(questionUpdate) =>{
       // console.log('addAQuestion function')
        // try{
        //     const question = await axios.patch('http://localhost:5000/interviewquestions/add/'+questionUpdate.card._id, questionUpdate)
        //     const newList = [...lists];
        //     console.log("lists questonUpdate ", lists)
        //     if(!question.data){
        //         //newList[0].cards.push(card.data)
        //     }
        //     setLists(newList);

        // }catch(e){
        //    console.log("error", e)
        // }
   // }



    

   

   
    function move(fromList, toList, from, to){
        console.log('fromList: '+ fromList);
        console.log('toList: '+ toList);
        console.log('from: '+ to);

        setLists(produce(lists, draft =>{
            const dragged = draft[fromList].cards[from];
             draft[fromList].cards.splice(from, 1);
             draft[toList].cards.splice(to, 0,dragged);
         }))
     }

    return (
        <BoardContext.Provider value={{lists, move}}>
           
             <Container className="Container board">
                <Row className="text-center">              
                    {lists.map((list, index) =><Col lg={4} sm={12}><List key={list.title} index = {index}  data={list} addCard={addCard} removeCard={removeCard} editCard={editCard} addInterviewQuestion={addInterviewQuestion} /> </Col>)}
                </Row>
            </Container>
        </BoardContext.Provider>
       
    ) 
}
