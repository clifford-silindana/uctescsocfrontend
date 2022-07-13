import React from 'react';
import Navigation2 from "components/Navigation2";
import "../styles/Team.css";

//team member picture imports
import pic1 from "../images/team/pic1.jpg";
import pic2 from "../images/team/pic2.png";
import pic3 from "../images/team/pic3.png";
import pic4 from "../images/team/pic4.png";
import pic5 from "../images/team/pic5.jpg";
import pic6 from "../images/team/pic6.jpg";
import pic7 from "../images/team/pic7.png";
import pic8 from "../images/team/pic8.png";
import pic9 from "../images/team/pic9.png";
import pic10 from "../images/team/pic10.png";
import pic11 from "../images/team/pic11.jpg";
import PIC0A from "../images/team/PIC0A.jpg";
import PIC1A from "../images/team/PIC1A.jpg";
import PIC2A from "../images/team/PIC2A.jpg";
import PIC3A from "../images/team/PIC3A.jpg";
import PIC4A from "../images/team/PIC4A.jpg";
import PIC5A from "../images/team/PIC5A.jpg";
import PIC6A from "../images/team/PIC6A.jpg";
import PIC8A from "../images/team/PIC8A.jpg";
import PIC9A from "../images/team/pic9.png";
import PIC10A from "../images/team/PIC10A.jpg";
import PIC11A from "../images/team/PIC11A.jpg";


function Team() {
  return (
    <div>
        <Navigation2 />
        <div className = "body-section">
       <div className = "team-members">

         <div className = "executive-members">

            <h1 className = "team-heading">Meet our Executive Team</h1>

            <div className = "row-1">
              <div className = "image-area">
                <img src= {PIC1A} alt="..." />
                <div className = "profile-text">
                  <h1 className = "member-name">Vinayak Panday</h1>
                  <p className = "member-position">President</p>
                </div>
              </div>

              <div className = "image-area">
                <img src= {PIC2A} alt="..." />
                <div className = "profile-text">
                  <h1 className = "member-name">Molatodi Samuel Mahara</h1>
                  <p className = "member-position">Advising President</p>
                </div>
              </div>

              <div className = "image-area">
                <img src= {PIC3A} alt="..." />
                <div className = "profile-text">
                  <h1 className = "member-name">Rowan Cowper</h1>
                  <p className = "member-position">Chief Operations Officer</p>
                </div>
              </div>

          </div>


          <div className = "row-2a">
              <div className = "image-area">
                <img src= {PIC4A} alt="..." />
                <div className = "profile-text">
                  <h1 className = "member-name">Realeboga Lekoma </h1>
                  <p className = "member-position">Secreatry General</p>
                </div>
              </div>

              <div className = "image-area">
                <img src= {PIC5A} alt="..." />
                <div className = "profile-text">
                  <h1 className = "member-name">Kitso Raaf</h1>
                  <p className = "member-position">Treasurer</p>
                </div>
              </div>
          </div>
       </div>

       <div className = "directors-members">

        <h1 className = "team-heading">Say hi to our Directors Team</h1>

        <div className = "row-1">
          <div className = "image-area">
            <img src= {PIC6A} alt="..." />
            <div className = "profile-text">
              <h1 className = "member-name">Nande Mbixwa</h1>
              <p className = "member-position">Marketing Director</p>
            </div>
          </div>

          <div className = "image-area">
            <img src= {PIC0A} alt="..." />
            <div className = "profile-text">
              <h1 className = "member-name">Clifford Silindana</h1>
              <p className = "member-position">Project Manager : Simulation Challenge</p>
            </div>
          </div>

          <div className = "image-area">
            <img src= {PIC8A} alt="..." />
            <div className = "profile-text">
              <h1 className = "member-name">Rebaone Koopalame</h1>
              <p className = "member-position">Project Manager : Leopard's Lair</p>
            </div>
          </div>

        </div>


        <div className = "row-2b">
          <div className = "image-area">
            <img src= {PIC9A} alt="..." />
            <div className = "profile-text">
              <h1 className = "member-name">Siphe Booi</h1>
              <p className = "member-position">Women in Entrepreneurship</p>
            </div>
          </div>

          <div className = "image-area">
            <img src= {PIC10A} alt="..." />
            <div className = "profile-text">
              <h1 className = "member-name">Rebaone Tsele</h1>
              <p className = "member-position">Co-operate Liason</p>
            </div>
          </div>

          <div className = "image-area">
            <img src= {PIC11A} alt="..." />
            <div className = "profile-text">
              <h1 className = "member-name">Bafana Sitole</h1>
              <p className = "member-position">Events</p>
            </div>
          </div>


  
</div>


</div>
</div>
    </div>
    </div>
  )
};

export default Team;