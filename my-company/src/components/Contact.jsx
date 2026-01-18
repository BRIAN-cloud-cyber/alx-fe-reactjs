import { useState } from "react";

function contact() { 
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {   
        e.preventDefault();
        alert('Form submitted!');
        // Here you can also handle form submission, e.g., send data to a server
    };

    return (
        <div style={{ padding: '20px' }}>3. Build a Simple Company Website with React
        mandatory
        Objective: Create a four-page company website using React. The website should have a homepage, an about page, a services page, and a contact page.
        
        Requirements:
        
        Set Up the Project:
        
        Use vite to set up a new project called my-company
        Install React Router for routing: npm install react-router-dom.
        Create Basic Page Components:
        
        Create four components: Home.jsx, About.jsx, Services.jsx, and Contact.jsx. Each component should return a simple JSX layout representing the respective page.
        Implement Routing:
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                name="name" 
                placeholder="Your name" 
                value={formData.name} 
                onChange={handleChange}  
                style={{ display:'block',margin:'10px 0' }} />


                <input type="email" 
                name="email" 
                placeholder="Your email" 
                value={formData.email} 
                onChange={handleChange}
                 style={{ display:'block',margin:'10px 0' }} />

                 
                <textarea name="message" 
                placeholder="Your message" 
                value={formData.message} 
                onChange={handleChange} 
                style={{ display:'block',margin:'10px 0' }}></textarea>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default contact;