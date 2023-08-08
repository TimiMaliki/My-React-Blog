import "./App.css";
import MainLayout from './MainLayout'
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Route, Routes, useNavigate } from 'react-router-dom';


    function App() {
      const [posts, setPosts] = useState([
        {
          id: 1,
          title: "Love as Bonding",
          datetime: "July 01, 2021 11:17:36 AM",
          body: "Our first experience of love is usually from our mother and, or other caregivers who nurture us when we are too young to fend for ourselves. Mothers produce extremely high levels of the neurochemical ‘oxytocin’ both in giving birth and through breast-feeding. This helps mothers and babies bond with each other. The oxytocin a mother produces in these early stages comes from another part of the brain than that produced in friendships and sexual encounters. This love as bonding later supports the development of sexual love. Oxytocin is responsible for the feeling of safety, security and trust. It has other functions too, some of them less ‘cuddly’, such as the feeling of ‘schadenfreude’, or gloating at someone’s failure. Generally with high levels of oxytocin, we flourish. It lets us develop the neural receptors that help us bond with other people too. The more oxytocin receptors we have, the more oxytocin we produce.Imagine a gazelle separated from the flock and how frightened it becomes. It is easy meat for predators. Humans are tribal by nature too. There is safety in numbers.In the past, exile, being cast away from family and friends, was one of the worst punishments a person could receive. Solitary confinement is the same.   Oxytocin has other functions. It helps reduce levels of the stress neurochemical cortisol. It can also diminish cravings for sugar or other addictive substances. For instance it can inhibit the voluntary intake of alcohol.Lots of behaviours promote the release of oxytocin in our brains, such as: hanging out with pals; being helpful to others; spending time in nature; painting or drawing; singing; relaxing to soothing music; stroking an animal; holding hands; kissing; cuddling; and activities likes meditation, yoga, or Pilates. It nurtures feelings of empathy, caring, playfulness, and appreciation. We feel safe with those we know and trust.   To that extent, old fashioned courting allowed a couple to get to know each other before diving into a sexual relationship. A relationship that focuses on just satisfying sexual desire alone, does not allow the necessary trust, love and bonding to develop."
        },
        {
          id: 2,
          title: "My 2nd Post",
          datetime: "July 01, 2021 11:17:36 AM",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
          id: 3,
          title: "My 3rd Post",
          datetime: "July 01, 2021 11:17:36 AM",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
          id: 4,
          title: "My Fourth Post",
          datetime: "July 01, 2021 11:17:36 AM",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        }
      ])
      const [search, setSearch] = useState('');
      const [searchResults, setSearchResults] = useState([]);
      const [postTitle, setPostTitle] = useState('');
      const [postBody, setPostBody] = useState('');
      const navigate = useNavigate();
    
      useEffect(() => {
        const filteredResults = posts.filter((post) =>
          ((post.body).toLowerCase()).includes(search.toLowerCase())
          || ((post.title).toLowerCase()).includes(search.toLowerCase()));
    
        setSearchResults(filteredResults.reverse());
      }, [posts, search])
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = { id, title: postTitle, datetime, body: postBody };
        const allPosts = [...posts, newPost];
        setPosts(allPosts);
        setPostTitle('');
        setPostBody('');
        navigate('/');
      }
    
      const handleDelete = (id) => {
        const postsList = posts.filter(post => post.id !== id);
        setPosts(postsList);
        navigate('/');
      }
    
      return (
        <Routes>
          <Route path="/" element={<MainLayout
            search={search}
            setSearch={setSearch}
          />}>
            <Route index element={<Home posts={searchResults} />} />
            <Route path="post">
              <Route index element={<NewPost
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
              />} />
              <Route path=":id" element={<PostPage
                posts={posts}
                handleDelete={handleDelete}
              />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      );
    }
 

export default App;
