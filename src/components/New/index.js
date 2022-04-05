import { useState } from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Input, Button, Row, Col, DatePicker, Select } from 'antd';
import { useDataContext } from '../hooks';
import { v4 as uuidv4 } from 'uuid';
import { dateToday, moment } from './Time';

const { TextArea } = Input;
const { Option } = Select;

const Title = styled.h1`
  padding-top: 20px;
`
const Wrapper = styled.div`
  text-align: center;
  font-family: 'Poppins';
  padding: 20px 50px 20px 50px
`

const Des = styled.p`
  text-align: left;
  margin-top: 20px;
  font-weight: bold;
`
const Split = styled(Row)`
  margin-top: 20px;
`

const Box = styled.div`
  text-align: left;
`

function New() {
  const { dispatch, addTask } = useDataContext();

  const [data, setData] = useState({
    id: null,
    title: '',
    des: '',
    date: dateToday,
    priority: 'normal',
  }) 

  const handleTypeTitle = (e) => {
    setData({...data, title: e.target.value})
  }

  const handleTypeDes = (e) => {
    setData({...data, des: e.target.value})
  }

  const handleAdd = () => {
      dispatch(addTask(data));
      setData({...data, id: uuidv4(), title: '', des: '', date: dateToday, priority: 'normal'})
  }

  const priorityPicker = (value) => {
    setData({...data, priority: value});
  }

  const datePicker = (date, dateString) => {
    if (dateToday < dateString) {
      setData({...data, date: dateString})
    } 
  }

  return (
    <Wrapper>
      <Title>New Task</Title>
      <Input 
        placeholder='Add new task ...'
        style={{marginTop: 30}}
        value={data.title}
        onChange={handleTypeTitle}
        size="large"
      />

      <Des>Description</Des>
      <TextArea
        placeholder="Description"
        style={{height: 200}}
        value={data.des}
        onChange={handleTypeDes}
        size="large"
      />

      <Split>
        <Col span={12}>
          <Box>
            <p style={{fontWeight: 'bold'}}>Due Date</p>          
            <DatePicker 
              picker="day"
              defaultValue={moment(dateToday)}
              value={moment(data.date)}
              style={{width: "100%"}}
              onChange={datePicker}
            />
          </Box>
        </Col>
        <Col span={12}>
          <Box>
            <p style={{fontWeight: 'bold'}}>Priority</p>
            <Select 
              defaultValue="normal" 
              style={{width: "100%"}}
              onChange={priorityPicker}
            >
              <Option value="low">Low</Option>
              <Option value="normal">Normal</Option>
              <Option value="high">High</Option>
            </Select>
          </Box>
        </Col>
      </Split>

      <br/>
      <br/>
      <Button 
        type="primary"
        style={{width: "100%", borderRadius: 5}}
        onClick={handleAdd}
      >Add</Button>
    </Wrapper>
  )
}

export default New;