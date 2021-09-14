import React, { Component } from 'react';
import axios from 'axios'
import qs from 'querystring'
// import {Button, table} from 'bootstrap'
import { Button } from 'react-bootstrap';
import {Table} from 'antd'
import 'antd/dist/antd.css';

const API_URL = 'http://localhost:5003/'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      datah: [],

     }
  }



componentDidMount(){
 
  axios
    .get(`${API_URL}`)
    .then(res => {
      this.setState({
        datah: res.data
      })
     
    })
    .catch(err => console.error(err));
}
  render() { 
    

    let nilaitertinggi = Math.max(...this.state.datah.map(value => parseFloat(value.nilai_akhir)))
    let nilaiterendah = Math.min(...this.state.datah.map(value => parseFloat(value.nilai_akhir)))
    
    let avnum = 0 
    this.state.datah.forEach(value=> avnum += parseFloat(value.nilai_akhir))
    avnum = avnum / this.state.datah.length
    
    const datasource = this.state.datah
    const column = [
      {
      title: 'Id',
      dataIndex: 'id_data',
      sorter:{
        compare: (a,b) =>a.id_data - b.id_data,
        multiple: 3
      }
    },
    {
      title: 'Nama Siswa',
      dataIndex: 'nama_siswa',
      
    },
    {
    title: 'Waktu',
    dataIndex: 'waktu_data',
    key: 'waktu',
    sorter: {
        compare: (a, b) => a.waktu_data - b.waktu_data,
        multiple: 3
      }
    },
    {
      title: 'Nilai',
      dataIndex: 'nilai_akhir',
      sorter: {
        compare: (a, b) => a.nilai_akhir - b.nilai_akhir,
        multiple: 3
      }
}
  ]
    function onChange(pagination, filters, sorter, extra) {
      console.log('params', pagination, filters, sorter, extra);
    }
    return ( 

      <div>
      <Table small dataSource={datasource} columns={column} onChange={onChange}/>
      
  <div>
    <p>Nilai Tertinggi: {nilaitertinggi}</p>
          <p>Nilai Terendah: {nilaiterendah}</p>
          <p>Nilai Average: {avnum}</p>
  </div>
      </div>
     
      );
    }
  }

 
export default App ;