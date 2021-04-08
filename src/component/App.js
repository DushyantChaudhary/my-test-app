import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';



class App extends React.Component{

    state={result:0}
    onAddSubmit= async (value1,value2)=>{

      
       const addResponse= await axios.get('http://localhost:8080/add',{
           params:{
               a:value1,
               b:value2
           }
         })
         
         this.getMultiple(addResponse.data);

         
         
         
    
    };

    getMultiple= async (value)=>{

        const multipleResponse= await axios.get('http://localhost:8080/multiple',{
            params:{
                a:value ,
                
            }
          });
          this.getSquare(multipleResponse.data);
    }

    getSquare=async (value)=>
    {
        const squareResponse= await axios.get('http://localhost:8080/power',{
            params:{
                a:value,
               
            }
          });

          this.setState({result:squareResponse.data});
    }
    
    render(){
        return (
        <div className="ui conatiner" >
            <SearchBar onInputSubmit={this.onAddSubmit}/>
            <label>The Result is:</label>
            <div className="text">{this.state.result}</div>
            </div>
        )
    }

};

export default App;