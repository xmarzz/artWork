

export default function Home() {
     




  return (
    <div>
       <div className="upload-image"> 
        <h1>upload Images</h1>
        <label id='upload-image'></label>
        <input id='upload-image' type="file" accept='image/jpeg, image/jpg'/>
        </div>

        <div>
          <h2>saved in the server</h2>
          <label id="saved-image"></label>
          <input id='saved-image' type="file" className='file'  accept='image/jpeg, image/jpg'/>
        
       </div>

    
    </div>
  )
}
