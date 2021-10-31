import React from 'react'

function ProjectCard({title, description, image, url}) {

    const handleClick = () => {
        window.open(url)
    }


    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="feature_item" onClick={handleClick}>
                <div className="g_img_item">
                    <img className="project_imgs" src={image} alt=""></img>
                </div>
                <div className="g_item_text">
                    <h4>{title}</h4>
                    <a href={url}><p className="github_links">{url}</p></a>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
