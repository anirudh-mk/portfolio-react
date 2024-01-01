import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProjectScreen.css';
import HeaddingText from '../../Components/HeaddingText/HeaddingText';
import ProjectDetailsCard from '../../Components/ProjectDetailsCard/ProjectDetailsCard';

function ProjectScreen({id, href, username, token }) {
  const [projects, setProjects] = useState([]);
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [totalProjects, setTotalProjects] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Sort projects based on the number of commits
        const sortedProjects = response.data.sort((a, b) => b.commits - a.commits);

        setProjects(sortedProjects);
        setTotalProjects(sortedProjects.length);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        console.log(error.request.status)
      }
    };

    fetchProjects();
  }, [username, token]);

  useEffect(() => {
    // Display only the first 3 projects initially
    setDisplayedProjects(projects.slice(0, 4));
  }, [projects]);

  const handleToggleDisplay = () => {
    if (showAll) {
      // If currently showing all projects, switch to displaying the first 3 projects
      setDisplayedProjects(projects.slice(0, 4));
    } else {
      // If currently showing limited projects, switch to displaying all projects
      setDisplayedProjects(projects);
    }
    // Toggle the showAll state
    setShowAll(!showAll);
  };

  return (
    <div id={id} className='projects' style={{ height: showAll ? 420 * (totalProjects / 4) + 160 : 600 }}>
      <HeaddingText href={href} headding='Projects' color='#000' />
      <div className='project-details-container' style={{ height: showAll ? 420 * (totalProjects / 4) : 420 }}>
        <ul>
          {displayedProjects.map((project) => (
            <ProjectDetailsCard key={project.id} project={project} />
          ))}
        </ul>
      </div>
      {projects.length > 2 && (
        <button
          className='show-more-button'
          onClick={handleToggleDisplay}
          style={{ width: '200px', height: '40px', top: showAll ? 420 * (totalProjects / 4) + 70 : 520 }}
        >
          <p>{showAll ? 'Show Less' : 'Show More'}</p>
        </button>
      )}
    </div>
  );
}

export default ProjectScreen;
