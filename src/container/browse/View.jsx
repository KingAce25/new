import React, { useState } from 'react';
import  Design from './design/Design'
import Marketing from './marketing/Marketing';
import Finance from './finance/Finance';
import Music from './music/Music';
import Education from './education/Education';

const View = () => {
    // Initialize state
    const [activeSection, setActiveSection] = useState('Design');

    // Function to change active section
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div>
            <div id='navigation'>
                <button onClick={() => handleSectionChange('Design')}>Design</button>
                <button onClick={() => handleSectionChange('Marketing')}>Marketing</button>
                <button onClick={() => handleSectionChange('Finance')}>Finance</button>
                <button onClick={() => handleSectionChange('Music')}>Music</button>
                <button onClick={() => handleSectionChange('Education')}>Education</button>
            </div>

            {/* Section content */}
            <div>
                {activeSection === 'Design' && <div><Design/></div>}
                {activeSection === 'Marketing' && <div><Marketing/></div>}
                {activeSection === 'Finance' && <div><Finance/></div>}
                {activeSection === 'Music' && <div><Music/></div>}
                {activeSection === 'Education' && <div><Education/></div>}
            </div>
        </div>
    );
};

export default View;
