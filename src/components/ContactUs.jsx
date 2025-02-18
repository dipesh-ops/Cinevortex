import { useNavigate } from "react-router-dom"

const ContactUs = () => {
    document.title = `Cinevortex | Contact Us`
    const navigate = useNavigate();
  return (
    <div className="pl-5 md:pl-10">
        <div className="flex flex-col md:flex-row">
        <div className='flex'>
        <nav className='w-full h-[8vh] flex items-center'>
          <h1 onClick={()=> navigate(-1)}><i className="text-zinc-400 text-2xl ri-arrow-left-line"></i></h1>
        </nav>
      </div>

      <div className="md:mt-[10vh] w-full md:w-[60%]">
      <div className="text-zinc-400 w-[90%] mb-5">
        <h1 className="text-3xl font-bold mb-2">Contact Us - CineVortex</h1>
        <p>Welcome to CineVortex! We’re here to help you with any questions, feedback, or concerns about our movie collection, website features, or your account. Feel free to reach out to us using the form below or through our contact details.</p>
      </div>

      <div className="text-zinc-400 w-[90%] mt-3">
        <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
        <p>Have a question or suggestion? We’d love to hear from you! Fill out the form below, and we’ll get back to you as soon as possible.</p>
      </div>

        <div className="text-zinc-400 mt-10">
            <h1 className="text-3xl font-bold mb-5">Contact Form</h1>
            <form action="">
                <div>
                    <label className="absolute -mt-3 left-20 bg-[#1F1E24]" htmlFor="name">Name</label>
                    <input className="border border-2 rounded w-[70%] p-2" type="text"/>
                </div>

                <div className="mt-3">
                    <label className="absolute -mt-3 left-20 bg-[#1F1E24]" htmlFor="name">Your Email</label>
                    <input className="border border-2 rounded w-[70%] p-2" type="text"/>
                </div>

                <div className="mt-3">
                    <label className="absolute -mt-3 left-20 bg-[#1F1E24]" htmlFor="name">Subject</label>
                    <input className="border border-2 rounded w-[70%] p-2" type="text"/>
                </div>

                <div className="mt-3">
                    <label className="absolute -mt-3 left-20 bg-[#1F1E24]" htmlFor="name">Your Message</label>
                    <input className="border border-2 rounded w-[70%] p-2" type="text"/>
                </div>
                
                <div>
                    <button className="bg-[#6160C4] px-10 p-2 text-white mt-3">Submit</button>
                </div>
            </form>
        </div>
      </div>

      <div className="md:w-[50%] p-2 mt-[10vh] flex flex-col text-zinc-400">
        <div className="mb-5">
            <h1 className="text-3xl font-bold mb-2">Other Ways to Reach Us</h1>
            <p>
            Email: support@cinevortex.com  <br />
            Phone: +1 (123) 456-7890  <br />
            Address: 123 Movie Lane, Hollywood, CA 90210, USA  
            </p>
        </div>

        <div>
            <h1 className="text-3xl font-bold mb-2">Follow Us on Social Media</h1>
            <p>
            Stay updated with the latest movie news, releases, and exclusive content by following us on social media  <br />
            Phone: +1 (123) 456-7890  <br />
            Address: 123 Movie Lane, Hollywood, CA 90210, USA  
            </p>
        </div>

        <div className="mt-10 mb-5">
            <h1 className="text-2xl font-semibold italic">Thank you for visiting CineVortex! We value your feedback and look forward to assisting you.</h1>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ContactUs