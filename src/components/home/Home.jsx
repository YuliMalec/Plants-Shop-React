import React from 'react';
import Banner from '../main-banner/Banner'
import Shop from '../shop/Shop';
import MaskGroup from '../maskGroup/MaskGroup';
import BlogPost from '../blogPost/BlogPost';

function Home(props) {
   
    return (
        <div>
    <Banner />
      <Shop {...props}/>
     <MaskGroup/>
     <BlogPost/>
        </div>
    );
}

export default Home;