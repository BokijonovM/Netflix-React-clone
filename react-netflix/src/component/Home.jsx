
import NavBar from "./Navbar";
import TvShows from "./TvShows";
import Section from "../components/Section";





const Home = () => {
    return ( 

        
        <div className="App">
         
  
          <TvShows />
          
    
  
          <Section title="Harry Potter"></Section>
          <Section title="Lord of the Rings"></Section>
          <Section title="Horror"></Section>
          <Section title="Action"></Section>
        </div>
     );
}
 
export default Home;