import Navbar from "@/components/Navbar";


export function getStaticProps({locale}){
  return{
    props:{
      locale
    }
  }
}

function customer(props) {
  


    return(
      <>
       <div className="">
       <Navbar props={props}/>
      </div>
      <div className="bg-red-300 h-screen">
        <div className="text-white capitalize text-center text-2xl font-black">
          this is customer page !!
        </div>
      </div>
      </>
    )
  }
  
  
  export default customer;