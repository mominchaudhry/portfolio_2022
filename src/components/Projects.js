import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import axios from 'axios'

function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            const data = await axios.get('https://momin-portfolio-data.s3.amazonaws.com/data/projects.json');
            setProjects(data.data);
        }
        getProjects();
    }, []);

    return (
        <section className="feature_area p_120">
        	<div className="container">
        		<div className="main_title">
        			<h2>Projects</h2>
        			<p>Some projects i've worked on, links attached.</p>
        		</div>
        	</div>
            <br />
        	<div className="container">
        		<div className="feature_inner row">
                    {projects.length >= 1 ?
                        projects.map(
                            (project, index) => 
                            <ProjectCard 
                                key={index} 
                                title={project.title} 
                                description={project.description}
                                image={project.image}
                                url={project.url}
                            />
                        ) : <> </>
                    }
        		</div>
			</div>
        </section>
    )
}

export default Projects
