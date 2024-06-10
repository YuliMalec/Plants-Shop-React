import SingleBlog from "./SingleBlog";
import './blog.css'

const blogObj = [
    { img:'/../../blog/01.jpg',
    data:'September 12  I Read in 6 minutes',
   title:'Cactus & Succulent Care Tips',
    text:'Cacti are succulents are easy care plants for any home or patio. '
},
{ img:'../../blog/02.jpg',
data:'September 13  I Read in 2 minutes',
title:'Top 10 Succulents for Your Home',
text:'Best in hanging baskets. Prefers medium to high light. '
},
{ img:'../../blog/03.jpg',
data:'September 15  I Read in 3 minutes',
title:'Cacti & Succulent Care Tips',
text:'Cacti and succulents thrive in containers and because most are.. '
},
{ img:'../../blog/04.jpg',
data:'September 15  I Read in 2 minutes',
title:'Best Houseplants Room by Room',
text:'The benefits of houseplants are endless. In addition to..'
},
]

function BlogPost(){



    return <>
    <article className="blog-post">
      <h3 className="blogs-title">Our Blog Posts</h3>
      <div className="blog-sub-title">We are an online plant shop offering a wide range of cheap and trendy plants. </div>
      <div className="blogs">
      {blogObj.map((item,index)=>{
        return <SingleBlog key={index} img={item.img} data={item.data} title={item.title} text={item.text}/>
      })}  
        </div>
    </article>
    </>
}
export default BlogPost;