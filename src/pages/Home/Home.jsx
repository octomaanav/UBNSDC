import  { useEffect, useState } from 'react'
import { getBoardMembers } from '../../components/services/apiBoard_Members';
import "./Home.module.css"
import { database } from '../../../firebaseConfig';
import { getDoc, collection } from 'firebase/firestore';


// async function fetchDataFromFirestore(){
//   const query = await getDoc(collection(database,"Board_Members"))

// const data = []
// query.forEach((doc) => {
//   data.push({id : doc.id, ...doc.data()});

// });
//   return data

// } 

// <div>
//     {member.map((member) => (
//       <div>
//         <img src={member.image} alt="" />
//         <p>{member.name}</p>
//         <p>{member.pronouns}</p>
//         <p>{member.title}</p>
//       </div>
//     ))  

//     }

//   </div>



function Home() {

  // const [member,setMember] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore()
      setMember(data)
    }
    fetchData()
  },[])

  return (
    <div className='home-container'>
  
      <h3 className='heading'>
        Welcome to NSDC at the University at Buffalo!
        </h3>

    <p className='QIS'>
    Greetings, drama enthusiasts! We are thrilled to welcome you to the newest branch of the National Student Drama Competition right here at the University at Buffalo. As an extension of the prestigious NSDC UCLA, our mission is to ignite the passion for drama and the performing arts within the vibrant community of Buffalo.
  </p>
 
    </div>
  )
}

export default Home

/*
About NSDC UCLA:

For decades, NSDC UCLA has been a beacon of creativity, fostering the talents of aspiring performers, writers, and directors. With a rich history of groundbreaking productions and a commitment to excellence, NSDC UCLA has set the stage for countless success stories. Now, we are proud to bring that legacy to the University at Buffalo.

Our Mission:

At NSDC UB, our mission is clear - to create a dynamic and inclusive space for students to explore and celebrate their love for drama. We believe in the power of storytelling, the magic of the stage, and the transformative impact of the performing arts. Through workshops, competitions, and performances, we aim to inspire and empower the next generation of theatrical visionaries.

Meet Our Leadership:

Get to know the passionate individuals leading NSDC UB. Our dedicated team brings a wealth of experience and a shared commitment to nurturing creativity. [Include brief bios and photos of key members.]

Programs and Events:

Discover the exciting programs and events that await you at NSDC UB. From captivating workshops led by industry professionals to thrilling competitions that showcase your talent, there s something for everyone. Explore our calendar to stay updated on upcoming events and opportunities.

Get Involved:

Are you ready to take center stage? NSDC UB offers various ways to get involved, whether you re an actor, director, writer, or simply a drama enthusiast. Learn about auditions, membership details, and volunteer opportunities to become an integral part of our vibrant community.

Collaborations and Partnerships:

We believe in the power of collaboration. NSDC UB is proud to partner with local theaters, organizations, and departments to provide students with a diverse range of opportunities. Together, we create a network that fosters growth and opens doors to exciting possibilities.

Join the Conversation:

Connect with us on social media to stay in the loop. Share your experiences, engage in discussions, and be part of the NSDC UB community. Use #NSDCUB to join the conversation and connect with fellow drama enthusiasts.

Stay Informed:

Keep up with the latest news, updates, and success stories from NSDC UB. Our news section is your go-to source for announcements, achievements, and inspiring stories from our talented community.

Welcome to a world where creativity knows no bounds. Join us on this exciting journey as we bring the magic of drama to the heart of Buffalo. Let the spotlight shine on NSDC UB, where every story deserves to be told, and every performer deserves a stage
*/