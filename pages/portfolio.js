import styled from 'styled-components'; 
import Image from 'next/image'
import PortNav from '../components/portfolio_comps/PortNav';
import ProjectThumb from '../components/portfolio_comps/ProjectThumb';



function portfolio() {
    return (
        <div className="relative bg-[url('/assets/mainMenu/tenets-bg.jpg')]">
    
        
        <div className="w-screen h-screen absolute z-[1000] bg-transparent">
            <div className="w-full h-[92%] z-[1000] bg-transparent backdrop-blur-[0px] px-14 pt-14">
               
                
                
            </div>
            
            <PortNav/>

            <div className='w-full h-auto py-20 bg-black grid grid-cols-2 gap-2 px-14'>
                <ProjectThumb bg={"/tda.png"}/>
                <ProjectThumb bg={"/graham.png"}/>
                <ProjectThumb bg={"/dl.png"}/>
                <ProjectThumb bg={"/gungunir.jpg"}/>
                <ProjectThumb bg={"/poma.png"}/>
                <ProjectThumb bg={"/minima.png"}/>
                <ProjectThumb bg={"/walveska.jpg"}/>
                <ProjectThumb bg={"/hulu.png"}/>
                <ProjectThumb bg={"/amazon.png"}/>
           
            </div>


        </div>
        
        
        <div className="h-screen w-screen absolute t-0 z-[1] bg-black">
           <div className='mt-10 px-14'>
                    <h1 className="text-white font-montessart uppercase font-bold text-[30px] tracking-[5px]">Graphic Design </h1>
                    <h1 className='text-white font-montessart uppercase font-bold text-[30px] tracking-[5px]'><span className='text-[#fafafa32]'>+</span> Frontend Engineering</h1>
                </div>

                <div className='px-14 mt-8'>
                
                <div className="w-full h-[500px] px-14" style={{ 
                    "backgroundColor": "rgb(236, 253, 245)",
                    "backgroundImage": "radial-gradient(at 96% 8%, rgb(216, 180, 254) 0, transparent 96%), radial-gradient(at 57% 96%, rgb(240, 253, 250) 0, transparent 38%), radial-gradient(at 37% 71%, rgb(12, 74, 110) 0, transparent 77%), radial-gradient(at 73% 60%, rgb(71, 85, 105) 0, transparent 16%), radial-gradient(at 35% 42%, rgb(74, 222, 128) 0, transparent 40%), radial-gradient(at 41% 66%, rgb(254, 249, 195) 0, transparent 28%), radial-gradient(at 97% 31%, rgb(4, 120, 87) 0, transparent 11%), radial-gradient(at 56% 35%, rgb(20, 184, 166) 0, transparent 23%), radial-gradient(at 92% 45%, rgb(161, 98, 7) 0, transparent 43%), radial-gradient(at 69% 16%, rgb(45, 212, 191) 0, transparent 64%)"
                }}
                ></div>
                </div>
        </div>
            
        </div>
    )
}

export default portfolio


const PageWrapper = styled.div`

    
  
`;