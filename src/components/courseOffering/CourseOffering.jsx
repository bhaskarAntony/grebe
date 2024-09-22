import React from 'react';
import './style.css'

const courseOfferingData = [
    {
        title: "Course Materials",
        icon: "bi-book", // Bootstrap icon for book
        description: "Get access to comprehensive course materials that cover all the essential topics."
    },
    {
        title: "Experienced Faculty",
        icon: "bi-person-badge", // Bootstrap icon for experienced professionals
        description: "Learn from industry-experienced instructors with years of practical knowledge."
    },
    {
        title: "Mock Interviews",
        icon: "bi-mic", // Bootstrap icon for interview/mock
        description: "Practice real-world interviews with mock sessions to boost your confidence."
    },
    {
        title: "Class Recordings",
        icon: "bi-camera-video", // Bootstrap icon for video recordings
        description: "Revisit all your classes with recorded sessions available at any time."
    },
    {
        title: "Revision Sessions",
        icon: "bi-arrow-repeat", // Bootstrap icon for revision/repeating
        description: "Attend revision sessions to clear up any doubts and refresh important concepts."
    },
    {
        title: "Free Hackathons",
        icon: "bi-lightbulb", // Bootstrap icon for hackathon/idea
        description: "Participate in free hackathons to apply your learning in practical challenges."
    },
    {
        title: "Marathons",
        icon: "bi-stopwatch", // Bootstrap icon for event/marathon
        description: "Join coding marathons and push your limits with extended problem-solving challenges."
    },
    {
        title: "Doubts Clearing Sessions",
        icon: "bi-question-circle", // Bootstrap icon for doubt/questions
        description: "Get all your queries resolved in dedicated doubt-clearing sessions."
    },
    {
        title: "DSA Sessions",
        icon: "bi-diagram-3", // Bootstrap icon for data structures and algorithms
        description: "Master data structures and algorithms with focused sessions designed for practice."
    },
    {
        title: "Certificate",
        icon: "bi-award", // Bootstrap icon for certificate/achievement
        description: "Earn a certificate on course completion to showcase your skills and knowledge."
    },
    {
        title: "Badging Tests",
        icon: "bi-check-circle", // Bootstrap icon for tests/badges
        description: "Take tests and earn badges as you progress through various stages of learning."
    },
    {
        title: "Projects",
        icon: "bi-kanban", // Bootstrap icon for projects/tasks
        description: "Work on real-world projects to build a strong portfolio and gain practical experience."
    }
];


const CourseOfferings = () => {
    return (
        <div className="container mt-5">
            <span className="fs-6 text-main">Why This Bootcamp Will Transform Your Tech Career</span>
            <h1 className="fs-1 mt-0">Empower <span className="text-green-gradient">your Workforce</span></h1>
            <p className="fs-6 text-secondary fw-bold">Accelerate your path to becoming a full stack developer with our comprehensive, industry-aligned program. We'll equip you with the in-demand skills, practical experience, and personalized support you need to thrive in the fast-paced tech world.</p>
            <div className="row p-3">
                {courseOfferingData.map((item, index) => (
                    <div className="col-md-4 col-6 p-2" key={index}>
                        <div className="card h-100 course-card">
                            <div className="card-body">
                                <i className={`bi ${item.icon} fs-3 mb-3`}></i> {/* Use Bootstrap icon */}
                                <h5 className="card-title fs-4">{item.title}</h5>
                                <p className="fs-6" style={{fontWeight:'500'}}>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseOfferings;
