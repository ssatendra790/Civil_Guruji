import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MostPopular from './MostPopular'
import Starred from './Starred';
import NewCourses from './NewCourses';

function Categories() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='NewCourses' element={<NewCourses/>}> New </Route>
            <Route path='MostPopular' element={<MostPopular/>}> Most Popular </Route>
            <Route path='Starred' element={<Starred/>}> Starred </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Categories
