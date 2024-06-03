import './mask-group.css'


function MaskGroup(){

    return <>
    <div className="mask-group">
    <div className="mask-group item">
        <div className="item-image">
            <img src='house/image 7.png'/>
        </div>
        
        <div className="item-content">
            <div className='sub-title'>Summer cactus
& succulents</div>
            <div className='text'>We are an online plant shop offering a wide range of cheap and trendy plants</div>
            <button className='mask-group-button main-button'>Find more</button>
        </div>
    </div>
    <div className="mask-group item">
    <div className="item-image">
            <img src='house/image 2.png'/>
        </div>
       
        <div className="item-content">
            <div className='sub-title'>Styling Trends
& much more</div>
            <div className='text'>We are an online plant shop offering a wide range of cheap and trendy plants</div>
            <button className='mask-group-button main-button'>Find more</button>
        </div>
    </div>
</div>
</>
}
export default MaskGroup;