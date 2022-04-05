import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import New from './components/New';
import Tasks from './components/Tasks';

const SolidCol = styled(Col)`
  border-style: solid;
  height: 100vh;
  border-width: 1px;
`

function App() {
  return (
    <Row>
      <SolidCol span={10}>
        <New/>
      </SolidCol>
      <SolidCol span={14}>
        <Tasks/>
      </SolidCol>
    </Row>
  );
}

export default App;
