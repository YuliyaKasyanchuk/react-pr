import React, { Component } from 'react';
import {Link} from 'react-router-link';
import Modal from './Modal';


  
class Form extends React.Component {

  constructor(props){
    super(props);

    this.state = {

      fields: {},
      errors: {},
      isOpen: false

    }
     }
    toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

 
  

  handleValidation(){

    let fields = this.state.fields;

    let errors = {};
    let formIsValid = true;


  
     if(!fields["email"]){
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if(typeof fields["email"] !== "undefined"){
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }
  if(!fields["password"]){
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    }
    if(typeof fields["password"] !== "undefined"){
      if (fields["password"].length < 6) {
        formIsValid = false;
        errors["password"] = "6 symbols and more";
      }
  }

    this.setState({errors: errors});


    return formIsValid;
   
  }

  contactSubmit(e){
   
    e.preventDefault();
    if(this.handleValidation()){
      let fields = this.state.fields;
        fields['email'] = '';
        fields['password'] = '';
        this.toggleModal();  
    }else{
    }

  }


  handleChange(field, e){       
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }
    
  render() {
    return (
      <main>
        <form onSubmit= {this.contactSubmit.bind(this)}>
        	<label htmlFor='email'>
            Username
          </label>
            <input type="text" name='email'  onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
            <span>{this.state.errors["email"]}</span>
          <label htmlFor='password'>
            Password
           </label>
            <input type="password" name='password' onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
            <span>{this.state.errors["password"]}</span>
          <div>
            <button type="submit">Отправить</button>
            <Link href='#'>Forgot password?</Link>
          </div>

        </form>
        
        <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>
            Hi!!!
        </Modal>
        </main>

   
    );
  }
}

export default Form;