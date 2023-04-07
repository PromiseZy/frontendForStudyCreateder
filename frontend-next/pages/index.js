import Navbar from "@/components/Navbar";


export function getStaticProps({locale}){
  return{
    props:{
      locale
    }
  }
}

function index(props){



  return(
    <div>
      <div className="">
        <Navbar props={props}/>
      </div>
      <div className="bg-red-300 h-screen">
        <div className="text-white capitalize text-center text-2xl font-black">
          <p>hello world</p>
          {props.locale}
        </div>
      </div>
    </div>
  )
}

export default index;

