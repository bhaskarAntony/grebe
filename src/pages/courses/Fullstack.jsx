import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Hero from './sections/hero/Hero'
import { formatDate } from '../../utils/formateDate';
import Graph from './sections/graph/Graph';
import Why from './sections/why/Why';
import CourseOfferings from '../../components/courseOffering/CourseOffering';

function Fullstack() {
    const [courseData, setCourseData] = useState({})
    const handleWhatsappShare = () => {
        const messageContent = `
        *Hello!*
        _This message is from the software development training program._
        *${courseData.courseName}*
        *${courseData.seo?.description}*
        *New Batch Starting:* ${formatDate(courseData.details?.admisionStart)}

        [Click Here to Explore This Course](https://be-practical.com)

        *You may also like these courses:*
        - Mern Fullstack Development
        - Python Fullstack Development
        - Java Fullstack Development
        - Cloud Computing
        - Digital Marketing
        - Job Oriented Courses
        - ...and more

        [Explore More Courses](https://be-practical.com)

        _Thank You_
        `;
        const encodedMessage = encodeURIComponent(messageContent);
        window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    };

    useEffect(()=>{
        const fetchData = async() =>{
            const responce = await axios.get('https://api.be-practical.com/api/allcourses/65dadc5506b37e8fa5684e3b');
            if(responce.status == 200){
                setCourseData(responce.data)
                console.log(responce);
                
            } 
        }
        fetchData()
    }, [])
  return (
    <div>
        <Hero courseData={courseData} share={handleWhatsappShare}/>
        <Why courseData={courseData}/>
        <CourseOfferings/>
    </div>
  )
}

export default Fullstack