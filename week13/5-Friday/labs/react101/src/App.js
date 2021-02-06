import React, {Component} from 'react';
import Contacts from './components/Contacts'
import data from 'data/Con'

class App extends Component{
render(){
  let contact = [
    {
    firstName:"Adam" ,
    lastName: "MacKinnon",
    phoneNum: "333-333-3333",
    email: "adam@dc.com"},
    {
      firstName:"Ally" ,
      lastName: "Deeter",
      phoneNum: "222-222-2222",
      email: "ally@dc.com"},
      {
        firstName:"Anrea" ,
        lastName: "Myers",
        phoneNum: "444-444-4444",
        email: "andrea@dc.com"},
  ]
  return (
    <>

    <Contacts firstName ={contact[0].firstName} lastname="mackinaon" />
    <Contacts firstName ="ally" lastname="mackinaon" />
    <Contacts firstName ="andria" lastname="mackinaon" />
    
      <br />
      
    </>
  )

}
}


  
export default App
