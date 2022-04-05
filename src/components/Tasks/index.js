import Task from './Task';
import Bulk from './Bulk';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Input } from 'antd';
import { useState, useContext } from 'react';
import Context from '../../Context/Context';

const Title = styled.h1`
  padding-top: 20px;
`
const Wrapper = styled.div`
  height: 100vh;
  text-align: center;
  font-family: 'Poppins';
  padding: 20px 50px 20px 50px
`

const TasksContainer = styled.div`
  height: 80%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}
`

function Tasks() {
  const { state } = useContext(Context); 
  const [search, setSearch] = useState(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const showSearchResults = () => {
    const searchList = state.tasks.filter(task => 
      task.title.toLowerCase().includes(search));
    const results = searchList.map((task, index) => 
            <Task
                data={task}
                key={index}
            />)
    return results;
  }

  return (
    <div>
      <Wrapper>
        <Title>Task</Title>
        <Input 
          placeholder='Search ...'
          style={{marginTop: 30}}
          size="large"
          onChange={handleSearch}
          value={search}
        />

        <TasksContainer>
          {search && showSearchResults()}         
          {!search && state.tasks.map((task, index) => 
            <Task
                data={task}
                key={index}
            />
          )}
        </TasksContainer>
      </Wrapper>

      <Bulk/>
    </div>
  )
}

export default Tasks;