import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SideMenu from './components/SideMenu'
import { RecoilRoot } from 'recoil'
import TaskSummary from './features/tasks/components/TaskSummary'
import TaskList from './features/tasks/components/TaskList/TaskList'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div style={{ display: 'flex' }}>
        <SideMenu /> {/* Ditambahkan */}
        <TaskSummary/>
      </div>
      
    ),
  },
  {
    path: 'task-list',
    element: (
      <div style={{ display: 'flex' }}>
        <SideMenu /> {/* Ditambahkan */}
        <TaskList />
      </div>
    ),
  },
  {
    path: 'task-progress',
    element: (
      <div style={{ display: 'flex' }}>
        <SideMenu /> {/* Ditambahkan */}
       
      </div>
    ),
  },
])

function App(): JSX.Element {
  return (
    // Apit dengan RecoilRoot
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App