import { BsArrowRight } from "react-icons/bs";





function SingleBlog(prop){
    return <>
    <div className="blog">
        <div className="blog-image">{prop.img}</div>
        <div className="blog-content">
            <div className="data">
            {prop.data}
            </div>
            <div className="blog-title">{prop.title}</div>
            <div className="blog-text">{prop.text}</div>
            <a href="" className="blog-link">Read More <BsArrowRight /></a>
        </div>
    </div>
    </>
}
export default SingleBlog;