import "./home.css"
import DefaultLayout from '../../Layout/DefaultLayout'
import Header from '../../components/Header'
import Sidebar from '../../components/sidebar'
import Post from "../../components/Posts"
const Home = () => {
  return (
    <DefaultLayout>
      <Header/>
      <div className="home">
        <Post/>
        <div style={{position:"sticky",flex:"3",top:"4%",height:"100vh",zIndex: "1000;"}}>
        <Sidebar className="sidebar"/>
        </div>
      </div>
    </DefaultLayout>
  )
}
export default Home