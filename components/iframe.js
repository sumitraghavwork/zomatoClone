let iframe=()=>{
    return `<iframe
                id="iframe_video" 
                width="600" 
                height="400" 
                src="https://www.youtube.com/embed/e52IL8zYmaE" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            <div id="recipe"></div>`
}
export {iframe}