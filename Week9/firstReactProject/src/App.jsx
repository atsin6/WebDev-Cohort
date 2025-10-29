import { useState } from 'react'
import { PostComponent } from './Post'
import './App.css'
import Navbar from '../Componenets/Navbar/Navbar.jsx';

function App() {
  const [posts, setPosts] = useState(
    [
      {
        title: "100xDevs",
        subtitle: "28.3M",
        time: "3m ago",
        image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
        description: "Want to know how to win big? Check out how these folks won $6000 in bounties.",
      },
      {
        title: "AI Trends",
        subtitle: "12.4M",
        time: "15m ago",
        image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
        description: "The future of AI is here. Explore how businesses are leveraging AI in 2025.",
      },
      {
        title: "Startup Hacks",
        subtitle: "9.8M",
        time: "30m ago",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        description: "Top 10 growth hacks that every startup founder should know this year.",
      },
      {
        title: "Tech Conference",
        subtitle: "18.6M",
        time: "1h ago",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        description: "Highlights from the biggest tech conference of the year. Don’t miss out!",
      },
      {
        title: "Remote Work",
        subtitle: "22.1M",
        time: "2h ago",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        description: "How remote work is changing productivity and lifestyle in 2025.",
      }
    ]
  );

  const postComponents = posts.map(post => <PostComponent 
      title={post.title}
      subtitle={post.subtitle}
      time={post.time}
      image={post.image}
      description={post.description}
    />
  )

  function addPost(){
    setPosts([...posts, 
      {
        title: "Atul Pal",
        subtitle: "21",
        time: "2h ago",
        image: "https://plus.unsplash.com/premium_photo-1738740635261-b4b6f49ac680?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Today I started learning React. And this is what I built today.",
      }
    ]);
  }

  return (
    <div >
      <Navbar />
      <div id='mainArea'>
        <div id='postArea'>
          <div>
            <button onClick={addPost}>Add Post</button>
          </div>
          <div className='posts'>
            {postComponents}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
