import React, { useState } from 'react';
import { BoardCreateWrap } from './boardStyle';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axiosInterceptor';
import { FormControl, Select, MenuItem } from '@mui/material';

const BoardCreate = () => {
    const [board , setBoard] = useState({
        title : '',
        content : '',
        boardCategory : ''
    });

    const navi = useNavigate();

    const formCreate = e =>{
        const {name , value} = e.target;
        setBoard(data =>({
            ...data, [name]:value}))
        };
    
    const createSubmit = async(e)=>{
        e.preventDefault();
        try {
            const formData = new FormData();
            const data = {
                title : board.title,
                content : board.content,
                category : board.boardCategory
            };
            formData.append("request", new Blob([JSON.stringify(data)],{
                type : "application/json"
            }));
            const response = await api.post(`/boards`,formData);
            console.log("등록 성공",response.data);
            navi('/board');
        } catch (error) {
            console.log("등록 실패", error);
        }
    }

    return (
        <BoardCreateWrap>
                <h2>게시판 작성</h2>
                <form onSubmit={createSubmit} className='boardcreate'>
                    <div className="titleBox">
                    <FormControl sx={{ minWidth: 150 }}>
                        <Select
                            name="boardCategory"
                            value={board.boardCategory}
                            onChange={formCreate}
                            displayEmpty
                            sx={{
                                minWidth:150,
                                minHeight:100,
                                border:1,
                                borderRadius:0,
                                borderRight:0
                            }}
                        >
                            <MenuItem value="" disabled>카테고리 선택</MenuItem>
                            <MenuItem value="NOTICE">공지</MenuItem>
                            <MenuItem value="FREE">자유</MenuItem>
                            <MenuItem value="QNA">질문</MenuItem>
                            <MenuItem value="ETC">기타</MenuItem>
                        </Select>
                    </FormControl>

                    <input
                        className="title"
                        name='title'
                        value={board.title}
                        onChange={formCreate}
                        placeholder="제목"
                    />
                </div>

                <textarea
                    className='content'
                    name='content'
                    value={board.content}
                    onChange={formCreate}
                    placeholder="내용을 입력하세요."
                ></textarea>

                <div className="btns">
                    <button type='button' onClick={() => navi(-1)}>이전</button>
                    <button type='submit'>등록</button>
                </div>
                </form>
        </BoardCreateWrap>
    );
};

export default BoardCreate;