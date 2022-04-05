import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Button } from 'antd';
import { useDataContext } from '../hooks';

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto;
    margin-bottom: 0;
    padding: 20px;
    color: #black;
    background: rgb(208, 194, 194);

    width: 100%;
    height: 65px;
    position: absolute;
    bottom: 0;
`

const Group = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
`

function Bulk() {
    const { state, dispatch, removeTaskBulk, deleteRemoveList } = useDataContext();

    const handleRemove = () => {
        state.removeList.forEach(item => {
            dispatch(deleteRemoveList(item));
            dispatch(removeTaskBulk(item));
        });
    }

    return (
        <Card>
            <Group>
                Bulk Action:
            </Group>

            <Group>
                <Button
                    type="primary"
                    style={{marginRight: 20, width: 90, height: 40}}
                >Done</Button>
                <Button 
                    type="primary"
                    style={{height: 40}}
                    onClick={handleRemove}
                    danger
                >Remove</Button>
            </Group>
        </Card>
    )
}

export default Bulk