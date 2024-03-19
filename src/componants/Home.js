import React from 'react'
import mission from './mission.png'
import team from './team.png'
import './contact.css'
export default function Home() {
  return (
    <div>
      <div className='emp-logo'>
        <div className='heading'>
       <h1>Employee Management System</h1></div>
      </div>
<br></br>

<br></br>
<br></br>
     <div className='about'>
        <div><h2>Welcome to Employee Management System</h2></div>
        <div className='para'><p>we understand the pivotal role that employees play in the success of any organization. 
          That's why we've developed a
           cutting-edge Employee Management System designed 
           to streamline and optimize every aspect of managing your workforce.</p></div>
     </div>
    <br></br>

     <div className='abt-cont'>
        <div className='about1'>
          <div><img src={mission} width='140px' height='100px'/></div>
            <div><h2>Our Mission</h2></div>
            <div className='par'><p>Our mission is to empower businesses of all sizes to efficiently manage their employees,
              from recruitment to retirement. We strive to provide intuitive, reliable, and scalable solutions that simplify
                the complexities of workforce management, allowing organizations to focus on what truly matters: their people.</p></div>
        </div>
        <div className='about1'>
        <div><img src={team} width='140px' height='100px'/></div>
            <div><h2>Our Team</h2></div>
            <div className='par'><p>Behind every great product is a team of dedicated individuals committed to excellence. 
              we're proud to have assembled a team of talented developers, 
              designers, and customer support specialists who are passionate about delivering the 
              best possible solutions to our clients.</p></div>
        </div>
     </div>
     
<br></br>
     <hr/>


<br></br>
     <div class="container">
      <h1>Contact</h1>
    <div className='contact'>
		<p class ='p1'>"Facing issues? Reach out to us anytime for prompt assistance. Contact us via [provide contact details]  we're here to help!"</p>
		<form>
			<label for="name">Name:</label>
			<input type="text" id="name" name="name" required/>
			<label for="email">Email:</label>
			<input type="email" id="email" name="email" required/>
			<label for="message">Message:</label>
			<textarea id="message" name="message" required></textarea>
			<button type="submit">Submit</button>
		</form>
		<p class ='p1'>Connect with us:</p>
		<ul>
			<li>Employee@gmail.com</li>
			<li>+91 7865******</li>
			<li> 123 Anna Salai,<br></br>
            Chennai, Tamil Nadu 600002,<br></br>
            India<br /></li>
		</ul>
	</div>
  </div>


      <div class="footer">
        
        <div class="content">
          <div class="social-media">
            <h4>Social</h4>
            <p>
              <a href="">
                <i class="fab fa-linkedin"></i> Linkedin</a>
            </p>
            <p>
              <a href="#"><i class="fab fa-twitter"></i> Twitter</a>
            </p>
            <p>
              <a href="https://github.com/" ><i class="fab fa-github"></i> Github</a >
            </p>
            <p>
              <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i> Facebook</a >
            </p>
            <p>
              <a href="https://www.instagram.com/" target="_blank">
                <i class="fab fa-instagram"></i> Instagram</a>
            </p>
          </div>
          <div class="links">
            <h4>Quick links</h4>
            <p><a href='/'>Home</a></p>
            <p><a href='/'>About</a></p>
          
            <p><a href='/'>Contact</a></p>
          </div>
          <div class="details">
            <h4 class="address">Address</h4>
            <p>
            123 Anna Salai,<br></br>
            Chennai, Tamil Nadu 600002,<br></br>
            India<br />
             
            </p>
            <h4 class="mobile">Mobile</h4>
            <p><a href='/'>+91 72225*****</a></p>
            <h4 class="mail">Email</h4>
            <p><a href='/'>Employee@gmail.com</a></p>
          </div>
        </div>
        <footer>
          <hr />
         copyright © 2024 Employee. All rights reserved.

        </footer>
      </div>

    </div>
  )
}
