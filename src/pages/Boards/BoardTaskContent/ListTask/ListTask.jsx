import React from 'react'
import BoardContent from './BoardContent/BoardContent'
import BoardContentShort from './BoardContent/BoardContentShort'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

function ListTask({ tasks, users, documents }) {

  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#fff'),
      width: '100%',
      // height: (theme) => theme.trello.boardContentHeight,
      display: 'flex',
      // p: '10px 0'
    }}>

      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}
        sx={{
          flexGrow: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#fff'),
          width: '100%',
          // height: (theme) => theme.trello.boardContentHeight,
          // p: '10px 0'
        }}>
        {/* {tasks?.map(board => (<BoardContent key={board._id} board={board} Item={Item} />))} */}
        {/* <BoardContentShort key={tasks[0]._id} board={tasks[0]} /> */}
        {tasks?.map(board => (<BoardContentShort key={board._id} board={board} users={users} documents={documents} />))}
      </Box>
    </Box>
  )
}

export default ListTask