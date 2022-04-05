import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Button, Checkbox } from 'antd';
import { useState } from 'react';
import Detail from './Detail';
import { useDataContext } from '../hooks';

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto;
    margin-bottom: 0;
    padding: 10px;
    color: #fff;
    background: linear-gradient(
        90deg,
        rgba(93, 12, 255, 1) 0%,
        rgba(155, 0, 250, 1) 100%
    );

    border-radius: 3px;
    width: 100%;
    height: 60px;
`

const Group = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
`

function Task(props) {
    const { dispatch, addRemoveList, deleteRemoveList, removeTask } = useDataContext();
    const data = props.data;

    const [isClick, setClick] = useState(false);

    const handleClick = () => {
        setClick(!isClick);
    }

    const handleRemove = () => {
        dispatch(removeTask(data.id));
    }

    const handleChecked = (e) => {
        if (e.target.checked) {
            dispatch(addRemoveList(data.id));
        } else {
            dispatch(deleteRemoveList(data.id));
        }
    }

    return (
        <div>
            <CardWrapper>
                <Group>
                    <Checkbox
                        style={{marginRight: 20, marginLeft: 10}}
                        onChange={handleChecked}
                    />
                    {data.title}
                </Group>

                <Group>
                    <Button
                        onClick={handleClick}
                        style={{marginRight: 20, width: 80}}
                    >Detail</Button>
                    <Button 
                        type="primary" 
                        style={{marginRight: 10}}
                        onClick={handleRemove}
                        danger
                    >Remove</Button>
                </Group>
            </CardWrapper>
            {isClick && <Detail
                title={data.title}
                desc={data.des}
                time={data.date}
                priority={data.priority}
                id={data.id}
            />}
        </div>
    )
}

export default Task