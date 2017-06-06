import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';

export default class PCIndex extends React.Component{
  constructor() {
        super();
        this.state = {
            user:{name:"chaney",age:18}
        }
    }
  render(){
    return (
      <div>
        <PCHeader user={this.state.user}></PCHeader>
        <PCFooter></PCFooter>
      </div>
    );
  };
}
