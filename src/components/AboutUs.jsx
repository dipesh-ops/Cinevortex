import { useNavigate } from "react-router-dom"

const AboutUs = () => {
    const navigate = useNavigate();
  return (
    <div className="px-20 bg-[#1F1E24]">
      <div className='flex'>
        <nav className='w-full h-[8vh] flex items-center'>
          <h1 onClick={()=> navigate(-1)}><i className="text-zinc-400 text-2xl ri-arrow-left-line"></i></h1>
        </nav>
      </div>
    <div className="px-20 flex flex-col justify-center items-center">
      <div className="text-zinc-400 w-[60%] mt-5">
        <h1 className="text-3xl font-bold mb-5">ABOUT CINEVORTEX</h1>
        <p>
            Welcome to Cinevortex
            At Cinevortex, we are passionate about movies and the magic of storytelling. Our platform is dedicated to bringing you the best cinematic experiences, from timeless classics to the latest blockbusters. Whether you're a casual viewer or a hardcore cinephile, we’ve got something for everyone.
        </p>
      </div>

      <div className="text-zinc-400 w-[60%] mt-5">
        <h1 className="text-3xl font-bold mb-5">Our Mission</h1>
        <p>
            Our mission is simple: to create a space where movie lovers can explore, discover, and celebrate the art of filmmaking. We believe that movies have the power to inspire, entertain, and bring people together. That’s why we’ve built a platform that’s easy to use, visually stunning, and packed with features to enhance your movie-watching experience.
        </p>
      </div>

      <div className="text-zinc-400 w-[60%] mt-5">
        <h1 className="text-3xl font-bold mb-5">What We Offer</h1>
        <p>
            - Curated Collections: Handpicked movie recommendations tailored to your taste.
            - Exclusive Content: Behind-the-scenes insights, interviews, and trivia about your favorite films.
            - Community Hub: A place to connect with fellow movie enthusiasts, share reviews, and discuss the latest releases.
            - Personalized Experience: Custom watchlists, tailored suggestions, and more to make your journey unique.
        </p>
      </div>

      <div className="text-zinc-400 w-[60%] mt-5">
        <h1 className="text-3xl font-bold mb-5">Our Story</h1>
        <p>
            Cinevortex was born out of a shared love for cinema. Founded in [Year] by [Founder’s Name], our platform started as a small project to help friends find great movies. Over time, it grew into a thriving community of movie lovers from around the world. Today, we’re proud to be a go-to destination for anyone who loves film.
        </p>
      </div>
    </div>
    </div>
  )
}

export default AboutUs