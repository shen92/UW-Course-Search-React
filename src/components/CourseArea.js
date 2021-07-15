import React from 'react';
import PropTypes from 'prop-types';

import { CourseCard } from '../components';

import '../styles/components.scss'

function CourseArea(props) {
    const { filteredCourses, cart, setCart } = props;

    return (
        <div className="courseArea">
            {filteredCourses.map(course =>  
                <CourseCard 
                    key={course.key}
                    course={course}
                    cart={cart}
                    setCart={setCart}
                />
            )}
        </div>
    )
}

CourseArea.props = {
    filteredCourses: PropTypes.array.isRequired,
}

export default CourseArea;