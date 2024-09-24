import React, { useEffect, useRef } from 'react';
import TagCloud from 'tagcloud';

const SkillsSphere: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const myTags = ['PHP', 'FIGMA', 'WordPress', 'Node.js', 'Express.js', 'Python', 'Java', 'GIT', 'IntelliJ', 'MySQL', 'REACT', 'Sass', 'TypeScript'];

        const options = {
            radius: 200,
            // maxSpeed: 'fast',
            // initSpeed: 'fast',
            keep: true,
        };

        if (container) {
            TagCloud(container, myTags, options);
            container.style.color = "#59D9BB";
        } else {
            console.error('Element with ref "containerRef" not found');
        }

        return( () =>{
                if (container) {
                    container.innerHTML = ''
                }
        }
        )
    }, []);
    return (
        <div className="skills-sphere" ref={containerRef}></div>
    );
};

export default SkillsSphere;
