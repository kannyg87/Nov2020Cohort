import React, { Component } from 'react'
class Forms extends Component {
constructor(){
    super();
    this.State={
        textValue:"hello",
        isValed:false,
        selectValue:''

    }
}

handelChange =(e) =>{

    let targettyple= e.target.type ==="checkbox" ? e.target.checked :e.taget.velue;
    
    let name = e.target.name;


}

// handleChange = (e) => {
//   console.log(e.target.value)
//   this.setState({
//     textValue:e.target.value
//   })
// }
// handleChackebox = (e) => {
//     console.log(e.target.Checked)
//   this.setState({
//     textValue:e.target.checked
//   })
  
// }

// handelDropDown = (e) => {
// this.setState({
//     selectValue: e.target.value
// })
  
// }






  render() {
    return (
      <>
        <h1 className="text-center mt-5">Class Based Forms</h1>
        <div className="row mt-5">
          <div className="col-6 offset-3 formColor p-5 formFont">
           
           <form>
                <input name="extValue" type="text" value={this.state.textValue} onChange={this.handleChange} />
                <br/>
                <input type="checkbox" checked={this.state.isValed} onChange={this.handleChackebox}></input>
                <input type="submit"/>
                <select name="selectValue" onChange={handelDropDown}>
                    <option value="newYork">new York</option>
                    <option value="Houston">Houston</option>
                    <option value="atlanta">Atlanata</option>
                    <option value="Seateal">Seatal</option>
                    <option value="Snatabarbar">Sanatbarbara</option>
                </select>
           </form>


          </div>
        </div>
      </>
    )
  }
}
export default Forms

