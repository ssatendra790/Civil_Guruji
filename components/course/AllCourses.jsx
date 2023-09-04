import React from "react";

const AllCourses = ({ courses }) => {
  return (
    <div>
      <h1>All Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course}>Course {course}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllCourses;
