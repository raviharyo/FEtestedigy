import React, { Component } from 'react';
import axios from 'axios'
import qs from 'querystring'
// import {Button, table} from 'bootstrap'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      detailsData:{
         id_data: "",
         nama_siswa:"",
        waktu_data:"",
        nilai_akhir: ""

      }

     }
  }

getdata = (datanilai) =>{
  const API_URL = 'http://localhost:5003/'
axios
  .get(`${API_URL}`)
  .then(res => {
    this.setState({
      detailsData: res.data
    })
    console.log(detailsData)
  } )
  .catch(err => console.error(err));
}

componentDidMount(){
  this.getdata()
}
  render() { 
    
    return ( 
      <>
  <table>
  
     <thead>
       <tr>
         <th>ID</th>
              <th>Nama</th>
              <th>Waktu</th>
              <th>Nilai</th>
       </tr>
     </thead>
     <tbody>
       {this.state.detailsData.map(
        
         detailsData=>
         <div>
       <tr key={detailsData.id_data}></tr>
       <td>{detailsData.nama_siswa}</td>
       <td>{detailsData.waktu_data}</td>
       <td>{detailsData.nilai_akhir}</td>
           </div>
       )}
     </tbody>
          
  </table>
      </>
     );
  }
}
 
export default App ;