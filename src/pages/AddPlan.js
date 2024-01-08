import React, { useState, useEffect } from 'react';
import { getCourses } from '../services/apiServices';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const CourseList = ({ selectedCourses, setSelectedCourses,semester }) => {
  const [courses, setCourses] = useState([]);
  const [inputValue, setInputValue] = useState('');


  useEffect(() => {
      const fetchData = async () => {
          const data = await getCourses(semester);
          setCourses(data);
          console.log(data);
      };
      fetchData();
  }, [semester]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

 const handleCourseSelect = (course) => {
  // if the course is not selected
        if (!selectedCourses.includes(course)) {
          // items inside selectedCourses is stored inside an array and adds to course
            setSelectedCourses([...selectedCourses, course]);
            setInputValue('');
        }
    };

const handleCourseRemove = (courseToRemove) => {
      setSelectedCourses(selectedCourses.filter(course => course !== courseToRemove));
};

  const filteredCourses = inputValue ? courses.filter(course =>
    course.toLowerCase().includes(inputValue.toLowerCase())
) : [];

  return (
<div className="w-full max-w-4xl mx-auto bg-bg-primary text-text-primary p-4 rounded-md shadow-lg">
    <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="w-full p-3 mb-4 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-accent-1"
        placeholder="Search for a course"
    />
    <div className="flex flex-row gap-4">
      <div className="flex-1 overflow-y-auto max-h-96 min-h-96 rounded-md bg-bg-secondary">
            <h2 className="text-lg font-semibold py-2 px-3">Course Results:</h2>
            {filteredCourses.map((course, index) => (
                <div key={index} className="p-3 hover:bg-bg-secondary-light cursor-pointer" onClick={() => handleCourseSelect(course)}>
                    {course}
                </div>
            ))}
        </div>
        <div className="flex-1">
            <h2 className="text-lg font-semibold mb-2">Selected Courses:</h2>
            <div className="flex flex-wrap gap-2">
                {selectedCourses.map((course, index) => (
                    <div key={index} className="flex items-center bg-yellow-button text-black rounded p-2">
                        {course}
                        <button className="ml-2 text-sm text-red-600" onClick={() => handleCourseRemove(course)}>
                            &times;
                        </button>
                    </div>
                ))}
            </div>
        </div>

    </div>
</div>


    );
}

const AddPlan = () => {
  const navigate = useNavigate();
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [semester, setSemester] = useState('2024-SPRG');
  
  const semesters = ['2024-SPRG', '2023-SPRG', '2023-FALL'];
  const handleSemesterChange = (e) => {
      setSemester(e.target.value);
  };
  const editPlan = async () => {
    try {
      const selectedCoursesData = {
        semester: semester,
        courses: selectedCourses, 
      };

      const response = await fetch('http://127.0.0.1:5000/api/users/addplan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedCoursesData),
      });

      if (response.ok) {
        const responseData = await response.json();
        navigate(`/plan/${responseData.planId}`); 
      } else {

        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  return (
    <div className="bg-bg-primary text-text-primary">
      
      <div className="flex flex-col flex-center">
        <div className="text-4xl self-center pt-8">
            <select
                value={semester}
                onChange={handleSemesterChange}
                className="mb-4 p-2 bg-bg-primary text-text-primary "
            >
                {semesters.map((sem, index) => (
                    <option key={index} value={sem}>
                        {sem}
                    </option>
                ))}
            </select>
        </div>
        <div className="flex flex-col ">
          <div className="self-center">

          </div>
          <div>
            <CourseList selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} semester={semester} />
          </div>
          
        </div>
        <div className="self-center pb-10">
          <Button label="Get a Plan" onClick={editPlan} size='lg' variant='Action_' />
        </div>
      </div>
    </div>
  );
};

export default AddPlan;
