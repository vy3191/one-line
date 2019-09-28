import React, {useState, useEffect} from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import JournalEntries from './Read_Journals/JournalEntries';
import TenYearEntries from './TenYear';
import SingleJournal from './Update/SingleJournal';
import NewEntry from './Create_Journals/NewEntry';
import SESSION_STORE_KEY from  '../../Constants/constants';
import Image from './Image';
import axios from 'axios';
import  './Journal.scss';


export default function Welcome(props) {
   
    const Logged_in_user = sessionStorage.getItem(SESSION_STORE_KEY);
    const user = JSON.parse(Logged_in_user);
    const token = user.token;
    console.log(token)
    const {id} = user;
    const [journals, setJournals] = useState([]);
    const [isCreating, setIsCreating] = useState(false);
    useEffect( () =>  {       
        getJournals(id);                      
    },[]);

  const getJournals = (userId) => {        
        axios.get(`https://bw-one-line-a-day.herokuapp.com/api/users/${userId}/posts`, {headers: {"authorization": token}})
        .then( response => {
             console.log(response.data);
             setJournals(response.data);
            
        })
        .catch(err => {
            console.log(err);
        })
  }

  const postJournals = (postingJournal, userId) => {
       console.log(postingJournal)
       axios.post(`https://bw-one-line-a-day.herokuapp.com/api/users/${userId}/posts`, postingJournal, {headers: {"authorization": token}})
            .then( response => {    
                console.log(response)
                console.log('working @ line 41');
                setJournals([ response.config.data, ...journals]);
                getJournals(id);
                props.history.push('/loading');
                setTimeout( () =>{
                  return props.history.push('/welcome/journal-entries');
                },1000)
               
            })
            .catch(err => {
               console.log(err);
            })
  }

  const removeJournals = (journalId) => {
       console.log('working', journalId)
       const remove = async () => {
          try {
            const response = await axios.delete(` https://bw-one-line-a-day.herokuapp.com/api/users/posts/${journalId}`,{headers: {"authorization": token}});
            console.log(response)
            const newJournals = journals.filter( journal => journal.id != journalId);
            setJournals(newJournals);
            setTimeout( () =>{
              return props.history.push('/welcome/journal-entries');
            },1000)
          } catch(err) {
            console.log(err)
          }
       }
       remove();
  }
    
  const editJournals = (updatedObj,journalId) => {
      console.log('edit working',updatedObj, journalId);
      const update = async () => {
        try {
          const response = await axios.put(` https://bw-one-line-a-day.herokuapp.com/api/users/posts/${journalId}`, updatedObj, {headers: {"authorization": token}});
          console.log(response);
          if(response.status == 200) {
             getJournals(id);
          }
          props.history.push('/loading');
          setTimeout( () =>{
            return props.history.push('/welcome/journal-entries');
          },1000)

        } catch(err) {
          console.log(err)
        }
     }
     update();
  }
   
  return (
     
      <div className='journal-entries'>
        <h1>Journal Entries Journey</h1>
        <div className='journal-container'>           
          <div className='journal-links'> 
            <h3>Your Actions</h3>  
            <hr style={{width:'100%'}}/>                     
            <ul>
                <li><NavLink to='/welcome/journal-entries'>View Your Recent Entries</NavLink></li>
                <li><NavLink to='/welcome/ten-year-entries'>View Last Ten Years Entries</NavLink></li>
                <li><NavLink to='/welcome/new-entries'>Add New Entries</NavLink></li> 
            </ul>      
          </div>
            <div className='journals'>                   
              <Switch>
                <Route exact path='/welcome/journal-entries' 
                       render={(props) => <JournalEntries {...props} journals={journals}/>} />
                <Route path='/welcome/ten-year-entries' 
                       render={(props) => <TenYearEntries {...props}/>} />
                <Route path='/welcome/new-entries' 
                       render={(props) => <NewEntry {...props} id={id} postJournals={postJournals} /> } />
                <Route path='/welcome/single-journal/:id' 
                       render={(props) => <SingleJournal {...props} 
                                           id={id} journals={journals}
                                           removeJournals={removeJournals}
                                           editJournals={editJournals} />} />      
                <Route render={(props) => <Image {...props} />} />
              </Switch>
            </div>   
        </div>         
      </div>
    )
}
