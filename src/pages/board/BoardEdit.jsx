import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BoardEditWrap } from './boardStyle';
import api from '../../api/axiosInterceptor';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const BoardEdit = () => {

    const {state} = useLocation();
    const navi = useNavigate();

    const [form , setForm] = useState({
        title: state.title,
        content: state.content,
        category: state.boardCategory
    });

    const formChange = e =>{
        const {name , value} = e.target;
        setForm((data)=>({
            ...data, [name] : value
        }));
    };
    

    const editGo = async(e) =>{
        e.preventDefault();

        try {
            const formData = new FormData();
            const editData = {
                title:form.title,
                content:form.content,
                category:form.category
            };
            formData.append("request", new Blob( [JSON.stringify(editData)],
                { type: "application/json" }
            ));

            const response = await api.patch(`/boards/${state.id}`,formData);
            console.log('수정 성공',response.data);
            navi(`/board/${state.id}`);
        } catch (error) {
            console.log('수정 실패',error)
        }
    };

    return (
        <BoardEditWrap>
                <h2>※ 게시글 수정</h2>
            <form className="editMain" onSubmit={editGo}>

                <div className="titleBox">
                    {/* <select className="category" name='category' value={form.category} onChange={formChange}>
                        <option value="NOTICE">공지</option>
                        <option value="FREE">자유</option>
                        <option value="QNA">질문</option>
                        <option value="ETC">기타</option>
                    </select> */}
                    <FormControl sx={{minWidth:120}}>
                        <Select
                            name="category"
                            value={form.category}
                            onChange={formChange}
                            sx={{minHeight:100,
                                border:1,
                                borderRadius:0,
                                borderRight:0
                            }}
                        >
                            <MenuItem value="NOTICE">공지</MenuItem>
                            <MenuItem value="FREE">자유</MenuItem>
                            <MenuItem value="QNA">질문</MenuItem>
                            <MenuItem value="ETC">기타</MenuItem>
                        </Select>
                    </FormControl>

                    <input className="title" name='title' value={form.title} onChange={formChange} />
                </div>
                
                <textarea className='content' name='content' value={form.content} onChange={formChange} ></textarea>

                <div className="btns">
                    <button onClick={()=> navi(-1)}>이전</button>
                    <button type='submit'>저장</button>
                </div>

            </form>
        </BoardEditWrap>
    );
};

export default BoardEdit;