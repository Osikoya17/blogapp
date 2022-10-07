import "./Add.css"
import DefaultLayout from "../../Layout/DefaultLayout"
import { useState,useRef} from "react"
import {useNavigate} from "react-router-dom"
const Add = ()=> {
  const title = useRef(null)
  const story = useRef(null)
  const[file,setFile] = useState()
  const navigate = useNavigate()
  const onChange=(e)=>{
    console.log(e.target.files[0])
    setFile(e.target.files[0])} 
    
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const tit = title.current.value
    const dec = story.current.value
    console.log(tit)
    console.log(dec)
    navigate("/")
    // const url = "http://localhost:6000/upload"
    // console.log(file);
    // const formData = new FormData();
    // formData.set("image",file)
    // formData.set("title",title)
    // formData.set("story",desc)
    // formData.set("category",cart)

    //   try { 
    //     const res = await axios.post(url,formData)
    //     console.log(res);
    //   } catch (error) {
    //     console.log(error)
    //   }
    
  }
  return (
    <DefaultLayout>
    <div className="Add">
      {file && (
        <img  src={URL.createObjectURL(file)} alt="" />
      )}
        <form>
            <div className="AddFormGroup">
                <label htmlFor="file">
                <i className="fa-solid fa-plus"></i>
                </label>
                <input type="file" id="file" name="image" style={{display:"none"}} onChange={e=>onChange(e)} />
                <input type="text" placeholder="Title" ref={title}/>
            </div>
            <div className="AddFormGroup">
                <textarea type="text" placeholder="Tell your story..." ref={story}></textarea>
            </div>
            <button className="btnSubmit" onClick={handleSubmit}>Post</button>
        </form>

        
    </div>
    </DefaultLayout>
    
  )
}

export default Add