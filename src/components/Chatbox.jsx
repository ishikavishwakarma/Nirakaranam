import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

class Chatbox extends Component {
    render() {
        const steps = [
            {
              id: '1',
              message: 'Welcome to our chatbot! Are you a learner or a trainer?',
              trigger: 'userType',
            },
            {
              id: 'userType',
              options: [
                { value: 'learner', label: 'Learner', trigger: 'learnerResponse' },
                { value: 'trainer', label: 'Trainer', trigger: 'trainerResponse' },
              ],
            },
            {
              id: 'learnerResponse',
              message: 'Great! How can we assist you as a learner?',
              end: true,
            },
            {
              id: 'trainerResponse',
              message: 'Sure! What can we help you with as a trainer?',
              end: true,
            },
          ];
  
      return (
        <div className='z-50'>
          <ChatBot  steps={steps} />
        </div>
      );
    }
  }
export default Chatbox