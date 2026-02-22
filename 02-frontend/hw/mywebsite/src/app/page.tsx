import Image from "next/image";

export default function Home() {
  return (
<>


    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ 
        marginTop: "40px", 
        fontSize: "30px" 
        }}>
          Welcome to Rio Quinn's Website!
        </h1>
      <img src="/grad.jpg" alt="Top Image" style={{ width: "300px", marginTop: "40px" }} />
      
        <p style={{
          marginTop: "20px",
          fontSize: "20px",}}>
          My Socials:
        </p>
      <div style={{
      display: "flex",
      flexDirection: "row", // or "column"
      justifyContent: "space-between", // or "center", "flex-start", "flex-end"
      alignItems: "center", // or "flex-start", "flex-end"
      gap: "80px",
      marginTop: "30px"
      }}>
      <a href="https://instagram.com/rquinn_48" target="_blank" rel="noopener noreferrer">
          <img src="/instagram_icon.png" alt="Instagram" style={{ width: "65px", height: "65px" }} />
        </a>
      <a href="https://linkedin.com/in/rioquinn" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin_icon.png" alt="LinkedIn" style={{ width: "65px", height: "65px" }} />
        </a>
      <a href="https://github.com/rioquinn11" target="_blank" rel="noopener noreferrer">
          <img src="/github_icon.png" alt="Github" style={{ width: "65px", height: "65px" }} />
        </a>
    </div>
    <p style={{
      marginLeft: "200px",
      marginRight: "200px",
      marginTop: "40px",
      marginBottom: "100px"
    }}>
      Hello Everyone! My name is Rio Quinn and I am a freshman at Northeastern University. 
      I am majoring in Mathematics and Minoring in Business Administration. This is my first semester on
      campus as I was part of the N.U.in program and studied abroad in Rome last semester. Most of my time on campus is spent
      doing activies related to the student club that I am a part of, TAMID. I currently am in Education and Track Consulting Fundamentals
      and working towards being part of the Tech Consulting Track once I complete Education.I am interested in finance, consulting and 
      entrepreneurship and hope to be involved in those fields after graduation. 
      In my free time, I enjoy hanging out with my friends, going to the gym, and playing sports like soccer, hockey, and lacrosse.
    </p>
    </div>

    

</>
  );
}
