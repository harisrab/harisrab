import styled from 'styled-components'; 
import Image from 'next/image'
import PortNav from '../components/portfolio_comps/PortNav';
import ProjectThumb from '../components/portfolio_comps/ProjectThumb';



function portfolio() {
    return (
        
    <div className='w-screen'>
    
    
        <div className="w-screen h-screen bg-black ">

            <div className="flex flex-col w-full h-[60%] md:h-[92%]  backdrop-blur-[0px] px-8 md:px-14">
                <div className='w-full h-[140px] mt-10  flex justify-center flex-col'>
                    <h1 className="text-white font-montessart uppercase font-bold text-[12px] md:text-[30px] tracking-[5px]">Graphic Design <span className='text-[#fafafa32]'>+</span> AI</h1>
                    <h1 className='text-white font-montessart uppercase font-bold text-[12px] md:text-[30px] tracking-[5px]'><span className='text-[#fafafa32]'>+</span> Frontend Engineering</h1>
                </div>

              
            <div className="w-full h-full px-14 my-5" style={{ 
                "backgroundColor": "rgb(236, 253, 245)",
                                "backgroundImage": "radial-gradient(at 96% 8%, rgb(216, 180, 254) 0, transparent 96%), radial-gradient(at 57% 96%, rgb(240, 253, 250) 0, transparent 38%), radial-gradient(at 37% 71%, rgb(12, 74, 110) 0, transparent 77%), radial-gradient(at 73% 60%, rgb(71, 85, 105) 0, transparent 16%), radial-gradient(at 35% 42%, rgb(74, 222, 128) 0, transparent 40%), radial-gradient(at 41% 66%, rgb(254, 249, 195) 0, transparent 28%), radial-gradient(at 97% 31%, rgb(4, 120, 87) 0, transparent 11%), radial-gradient(at 56% 35%, rgb(20, 184, 166) 0, transparent 23%), radial-gradient(at 92% 45%, rgb(161, 98, 7) 0, transparent 43%), radial-gradient(at 69% 16%, rgb(45, 212, 191) 0, transparent 64%)"
                            }}
                            >
                            </div>
            

                
            </div>
            
            <PortNav/>
        </div>

<div className='h-auto w-full bg-black flex items-center justify-center py-20 md:py-0'>

<div className='h-auto w-fit py-20 bg-black grid grid-cols-1 2xl:grid-cols-2 gap-2 px-14'>
            <ProjectThumb 
                type={"Web Design · Full Stack"}
                bg={"/tda.png"}
                title={"The Dating Arts"}
                desc={"I designed and developed an E-commerce, landing page, and reactive app that has comprehensive features like Google Login, Stripe Payments, Checkout System, Calendaring System (Event Management), YouTube API, SendGrid integration for email delivery, MailChimp API for newsletter subscriptions, Intercom Live Chat integration, GraphCMS for easy content management"}
                stack={["React", "Next.js", "Node.js", "Express", "MongoDB", "GraphCMS", "SendGrid", "MailChimp", "Intercom", "Stripe", "Google Login", "Calendar System", "YouTube API", "Google Analytics", "Photoshop", "Illustrator", "FramerX"]}
                deployment={"https://thedatingarts.com"}
                github={"https://www.github.com/harisrab/the-dating-arts"}
                />
            <ProjectThumb 
                type={"Web Design · Full Stack"}
                bg={"/graham.png"}
                title={"Graham Labs"}
                desc={"A weekend’s worth project, in a group of friends, I tried building a company for distributing software development services from Pakistan into Hong Kong. In a span of weekend, I designed and developed this website, which features an elegant and responsive design, along with blog feature for SEO performance to better rank it on Google Search."}
                stack={["React", "Next.js", "Node.js", "Express", "Ghost CMS", "GraphCMS", "Stripe", "Google Login", "Ghost CMS", "Google Analytics"]}
                deployment={"https://www.graham-labs.com/"}
                github={"https://www.github.com/harisrab/agency"}
            />
            <ProjectThumb 
                type={"Web Design · Full Stack"}
                bg={"/des-lettres.png"}
                title={"Personal Blog"}
                desc={"Designed in Figma and Illustrator, developed with Next.Js, and deployed with Vercel. It has features like subscriptions, pages for each post, filtering based on latest posts, a division for pages, and comprehensive management for content on Ghost platform."}
                stack={["React", "Next.js", "Node.js", "Ghost CMS", "GraphCMS", "Mailgun", "Google Login", "Inventory System", "YouTube API", "Google Analytics, Illustrator, Figma, Photoshop"]}
                deployment={"https://www.harisrab.com/"}
                github={"https://www.github.com/des-lettres"}
            />
            <ProjectThumb 
                type={"Web Design · Full Stack"}
                bg={"/dormeal.png"}
                title={"Dormeal"}
                desc={"A week’s worth project, as a part of startup, where I designed, developed, and deployed a prototype for grocery delivery app for students in quarantine at University of Hong Kong. I used Next.js, Firebase, GraphCMS, Stripe Payment System for this prototype. This project was ultimately dropped because of no product-market fit. However, it still remains in deployment with partial feature builds."}
                stack={["React", "Next.js", "Node.js", "Express", "Ghost CMS", "GraphCMS", "Stripe", "Google Login", "Inventory System", "YouTube API", "Google Analytics", "Photoshop", "Illustrator", "Figma"]}
                deployment={"https://dormeal.vercel.app/"}
                github={"https://github.com/harisrab/dormeal"}
            />
            <ProjectThumb 
                type={"Web Design · Full Stack"}
                bg={"/hulu.png"}
                title={"Hulu Clone"}
                desc={"Introductory project, as a part of learning React and web development tools, I developed a Hulu clone, which featured Tailwind CSS for design, Server Side Rendering in Next.js, and React as main library for building the website."}
                stack={["React", "Next.js", "Node.js", "Express", "Context API", "Ghost CMS", "GraphCMS", "Stripe", "Google Login", "Inventory System", "YouTube API", "Google Analytics", "Photoshop", "Illustrator", "Figma"]}
                deployment={"http://hulu-clone-harisrab.vercel.app/"}
                github={"https://github.com/harisrab/hulu-clone"}
            />
            <ProjectThumb 
                type={"Web Design · Full Stack"}
                bg={"/amazon.png"}
                title={"Amazon Clone"}
                desc={"Introductory project, as a part of learning React and web development tools, I developed a Amazon clone, which featured standard CSS for design, and React as main library for building the website."}
                stack={["React", "Firebase", "Fake Store API", "React Slider", "Redux", "React Router", "Google Login", "Inventory System", "Google Analytics"]}
                deployment={"https://amazon-clone-nextjs-mauve.vercel.app/"}
                github={"https://github.com/harisrab/amazon-clone-nextjs"}
            />
            <ProjectThumb 
                type={"Web Design"}
                bg={"/gungunir.jpg"}
                title={"Gungunir"}
                desc={"Developed as a part of freelancing project, where the store had to build a website for selling its braclets online. I designed the website considering all typography best practices, grids structures, and graphic design techniques."}
                stack={["Photoshop", "Illustrator", "Figma", "FramerX"]}
            />
            <ProjectThumb 
                type={"Web Design"}
                bg={"/poma2.jpg"}
                title={"Poma Website"}
                desc={"Developed as a part of practice project, where I designed a website that played, in part, with large typography, grids, colors, and picture. This gave me an oppurtunity to learn deeply about how design works and how to use various tools and techniques to achieve that."}
                stack={["Photoshop", "Illustrator", "Figma", "FramerX"]}
            />
            <ProjectThumb 
                type={"Graphic Design"}
                bg={"/poma-gd.jpg"}
                title={"Poma Instagram Posts"}
                desc={"Developed as a part of freelancing project, where I designed a set of posts for an online clothing business. This gave me an initial opportunity to learn tools like Figma, Photoshop, and Illustrator."}
                stack={["Photoshop", "Illustrator", "Figma", "FramerX"]}
            />
            <ProjectThumb 
                type={"Web Design"}
                bg={"/minima.png"}
                title={"Minima Website"}
                desc={"Developed as a part of practice project, where I designed a set of website pages, which demonstrate how simple typography, colors, gradients, and basic shapes like circles and squares can create stunning designs."}
                stack={["Photoshop", "Illustrator", "Figma", "FramerX"]}
            />
            <ProjectThumb 
                type={"Web Design"}
                bg={"/walveska.jpg"}
                title={"Walveska"}
                desc={"Developed as a part of freelancing project, where I designed a set of website pages for a client who required a design for his blog and portfolio."}
                stack={["Photoshop", "Illustrator", "Figma", "FramerX"]}
                />
                <ProjectThumb 
                type={"Graphic Design"}
                bg={"/mavia.png"}
                title={"Mavia Covona"}
                desc={"Developed as a part of freelancing project, where I designed a set of intagram posts and stories for a client who required a modern templates for his business."}
                stack={["Photoshop", "Illustrator", "Figma", "FramerX"]}
                />
            <ProjectThumb 
                type={"Poster Design"}
                bg={"/art-fair-poster.png"}
                title={"Art Fair Contemporary Poster"}
                desc={"Developed as a part of practice project, where I designed a poster to learn grid structures, typography with typeface Helvetica, as well as colors, images, and shadows."}
                stack={["Photoshop", "Illustrator", "Figma", "FramerX"]}
            />
            <ProjectThumb 
                type={"Poster Design"}
                bg={"/cobra-poster2-01.png"}
                title={"Cobra"}
                desc={"Developed as a part of practice project, where I designed a poster to learn grid structures, typography with typeface Futura, as well as colors black and white, including vector art, which tested my design tool skills in Illustrator."}
                stack={["Photoshop", "Illustrator", "Figma"]}
                />
               
        
        </div>


        </div>

    </div>

        
    )
}

export default portfolio


const PageWrapper = styled.div`

    
  
`;