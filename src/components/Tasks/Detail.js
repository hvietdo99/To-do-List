import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Input, Button, Row, Col, DatePicker, Select } from 'antd';
import moment from 'moment';
import { dateToday } from '../New/Time';
import { useState } from 'react';
import { useDataContext } from '../hooks';

const { TextArea } = Input;
const { Option } = Select;

const Wrapper = styled.div`
    text-align: center;
    font-family: 'Poppins';
    background-color: rgb(208, 194, 194);
    width: 100%;
`

const InnerWrapper = styled.div`
    padding: 0px 40px 20px 40px
`

const Title = styled.p`
    padding-top: 20px;
    font-size: 18px;
    font-weight: bold;
`

const Des = styled.p`
    text-align: left;
    margin-top: 10px;
    font-weight: bold;
`
const Split = styled(Row)`
    margin-top: 20px;
`

const Box = styled.div`
    text-align: left;
`

function Detail({id, title, desc, time, priority}) { 
    const { dispatch, updateTask } = useDataContext()

    const [des, setDes] = useState(desc);
    const [date, setDate] = useState(time);
    const [prior, setPrior] = useState(priority);
    const [validDate, setValidDate] = useState(true);

    const handleTypeDes = (e) => {
        setDes(e.target.value);
    }

    const priorityPicker = (value) => {
        setPrior(value);
    }
    
    const datePicker = (date, dateString) => {
        if (dateToday < dateString) {
            setValidDate(true)
            setDate(dateString);
        } else setValidDate(false);
    }

    const handleUpdate = () => {
        dispatch(updateTask({
            id: id,
            title: title,
            des: des,
            date: date,
            priority: prior,
            validDate: validDate
        }))
    }

    return (
        <Wrapper>
            <Title>{title}</Title>

            <InnerWrapper>
                <Des>Description</Des>
                <TextArea
                    placeholder="Description"
                    style={{height: 100}}
                    value={des}
                    onChange={handleTypeDes}
                    size="large"
                />

                <Split>
                    <Col span={12}>
                        <Box>
                            <p style={{fontWeight: 'bold'}}>Due Date</p>          
                            <DatePicker 
                                picker="day"
                                style={{width: "100%"}}
                                onChange={datePicker}
                                defaultValue={moment(time)}
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
                                defaultValue={priority}
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
                    onClick={handleUpdate}
                >Update</Button>
            </InnerWrapper>
        </Wrapper>
    )
}

export default Detail