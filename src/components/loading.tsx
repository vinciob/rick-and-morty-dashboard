import './loading.css'

function Loading() {
  // Set the number of elements to render
  const elements = new Array(6).fill(1);
  
  return <div className='loading-component wrapper-small'>
    {/* Title Skeleton */}
    <div className='loading__title skeleton'></div>
    
    {/* Items Skeleton */}
    { elements.map( (element, index) => <div key={index} className='loading__single-character skeleton'></div>) }
  </div>
}

export default Loading