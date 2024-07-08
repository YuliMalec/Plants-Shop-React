import React from 'react';
import Shop from '../shop/Shop';
import MaskGroup from '../maskGroup/MaskGroup';
import BlogPost from '../blogPost/BlogPost';
import Banner from './../main-banner/Banner'

function Home(props) {
    return (
        <div>
    <Banner width={props.width}/>
      <Shop/>
     <MaskGroup/>
     <BlogPost/>
        </div>
    );
}

export default Home;