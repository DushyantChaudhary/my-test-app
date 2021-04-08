import React from 'react';

class SearchBar extends React.Component{

    

    state= {inputVal1:0,inputVal2:0};
    onFormSubmit=(e)=>{
        e.preventDefault();
       this.props.onInputSubmit(this.state.inputVal1,this.state.inputVal2)
       
       
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Check the Square of twice the sum of input numbers</label>
                        <br/>
                        <form  onSubmit={(e)=>this.onFormSubmit(e)} className="ui form">
                        <label>Input 1</label>
                        <input
                         onChange={(e)=>this.setState({inputVal1:e.target.value})}
                         type ="number"
                         value = {this.state.inputVal1}></input>
                         </form>
                         <br/>
                         <form onSubmit={(e)=>this.onFormSubmit(e)} className="ui form">
                          <label>Input 2</label>
                         <input
                         onChange={(e)=>this.setState({inputVal2:e.target.value})}
                         type ="number"
                         value = {this.state.inputVal2}></input>
                         </form>
                    </div>
                    </form>
                    
                
            </div>
            
        )
    }
}

export default SearchBar;