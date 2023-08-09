import "./App.css";
import MainLayout from "./MainLayout";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage"; 
import About from "./About";
import Missing from "./Missing";
import Api from './API/Posts' 
import { useState, useEffect } from "react";
import { format } from "date-fns";
import {useHistory} from "use-history"
import { Route, Routes, useNavigate} from "react-router-dom";


function App() {
   const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const navigate = useNavigate();
  const history = useHistory();

  useEffect(() =>{
   const fetchPosts = async () => {
    try{
      const response  = await Api.get('/posts')
      setPosts(response.data)
    }catch(err){
       
    }

   }
   fetchPosts()
  },[])

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try{
   
    const allPosts = [...posts, response.data];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
    navigate("/");
    history.push('/');
    }catch(err){
       console.log(`Error:${err.message}`);
    }
  };


  

  const handleDelete =  async (id) => {
    try{
      await Api.delete(`/posts/${id}`)
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    navigate("/");
    history.push('/');
    }catch(err){
      console.log(`Error:${err.message}`);
   }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayout search={search} setSearch={setSearch} />}
      >
        <Route index element={<Home posts={searchResults} />} />
        <Route path="post">
          <Route
            index
            element={
              <NewPost
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
              />
            }
          />
          <Route
            path=":id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;


// const [posts, setPosts] = useState([
//   {
//     id: 1,
//     title: "Love as Bonding",
//     datetime: "July 01, 2021 11:17:36 AM",
//     body: `Our first experience of love is usually from our mother and, 
//         or other caregivers who nurture us when we are too young to fend for ourselves. Mothers 
//         produce extremely high levels of the neurochemical ‘oxytocin’ both in giving birth and through breast-feeding. 
//         This helps mothers and babies bond with each other. The oxytocin a mother produces in these early stages comes
//          from another part of the brain than that produced in friendships and sexual encounters. This love as 
//          bonding later supports the development of sexual love. Oxytocin is responsible for the feeling of safety, 
//          security and trust. It has other functions too, some of them less ‘cuddly’, such as the feeling of 
//          ‘schadenfreude’, or gloating at someone’s failure. Generally with high levels of oxytocin, we flourish. 
//          It lets us develop the neural receptors that help us bond with other people too. The more oxytocin receptors
//           we have, the more oxytocin we produce.Imagine a gazelle separated from the flock and how frightened it
//            becomes. It is easy meat for predators. Humans are tribal by nature too. There is safety in numbers.In 
//            the past, exile, being cast away from family and friends, was one of the worst punishments a person 
//            could receive. Solitary confinement is the same.   Oxytocin has other functions. It helps reduce levels 
//            of the stress neurochemical cortisol. It can also diminish cravings for sugar or other addictive substances. 
//            For instance it can inhibit the voluntary intake of alcohol.Lots of behaviours promote the release of 
//            oxytocin in our brains, such as: hanging out with pals; being helpful to others; spending time in nature; 
//            painting or drawing; singing; relaxing to soothing music; stroking an animal; holding hands; kissing; 
//            cuddling; and activities likes meditation, yoga, or Pilates. It nurtures feelings of empathy, caring, 
//            playfulness, and appreciation. We feel safe with those we know and trust.   To that extent, old 
//            fashioned courting allowed a couple to get to know each other before diving into a sexual relationship. 
//            A relationship that focuses on just satisfying sexual desire alone, does not allow the necessary trust, 
//            love and bonding to develop.`,
//   },
//   {
//     id: 2,
//     title: "Health benefits of eating well",
//     datetime: "July 01, 2021 11:17:36 AM",
//     body: `A well-balanced diet provides all of the: energy you need to keep active throughout the day  
//           nutrients you need for growth and repair, helping you to stay strong and healthy and help to prevent
//            diet-related illness, such as some cancers  Keeping active and eating a healthy balanced diet can also help 
//            you to maintain a healthy weight.  Deficiencies in some key nutrients - such as vitamin A, B, C and E, and 
//            zinc, iron and selenium - can weaken parts of your immune system.`,
//   },
//   {
//     id: 3,
//     title: "10 Tips To Become Successful and Achieve Your Life Goals",
//     datetime: "July 01, 2021 11:17:36 AM",
//     body: `1. Be committed
//         Through commitment, you can gain motivation to pursue success. To begin the process of setting a goal, make a list that includes:
        
//         Your goal
//         Your level of commitment to the goal
//         What you're willing to do to achieve that goal
//         Staying focused on your plan is crucial. It helps to put aside at least 15 minutes daily to think about your plan and work toward it. This will keep your goal fresh and allow you to continue focusing on it.
        
//         Madisyn McKee, a digital marketing and social media manager, understands what's important for fostering success. She also have experience with recruiting new talent and initiating efforts to encourage professional development. Here's what she said about achieving success:
        
//         Being successful takes time and a lot of practice. Success does not happen overnight. Often it takes years of performing similar tasks over and over, or even years of failure before you have the opportunity to reap the rewards.
        
//         —Madisyn McKee
        
//         In determining your commitment to your goal, however, ensuring you have realistic expectations of yourself and the outcome is important. If your commitment isn't paying off after a certain time, you should adjust your goal accordingly and revise any necessary steps.
        
//         Tip: Sometimes, it may be helpful to ask a friend or family member for support in helping you stick to your commitments. Having someone to hold you accountable for your shortcomings and praise your success can help you stay committed to your goal.
        
//         Related: Setting Goals To Improve Your Career
//         2. Learn from the journey
//         Rather than focusing strictly on the results of your accomplishments, take notice of the small steps needed to achieve success. If you allow yourself to enjoy small victories along your journey, reaching your goal will become a new adventure each day, and you will be more likely to stay on track. By doing this, you will learn new and exciting things along the way, which can help you grow as a person.
        
//         Related: 5 Areas of Personal Growth (Plus Tips for Development)
//         3. Have fun along the way
//         If the journey to achieve something becomes too tedious, succeeding will be more challenging.
        
//         To be successful, you need to have passion for what you are doing.
        
//         —Madisyn McKee
        
//         Learning what you're capable of can be fun and exciting, so it's essential to keep your goals light and fun to have an emotionally positive experience and keep moving forward without losing perspective.
        
//         Related: 70 Examples of Passions You Can Pursue in Your Life
//         4. Think positively
//         Developing a positive mindset is about trusting yourself and your ability to succeed. It's important to replace any negative thoughts with positive ones to motivate yourself to keep trying no matter what challenges come your way.
        
//         On your path to becoming successful, you're likely to learn new things and think differently than before. Your goals will not happen overnight. They will take practice and discipline to achieve, so it's vital to think about the process positively.
        
//         Related: 7 Tips for Thinking Positively at Work
//         5. Change your perspective
//         Sometimes along the journey, you have to change your perspective to turn a challenging situation into a better one. When you're having a bad day or week, imagine instead that it's a good day or week.
        
//         Give yourself the opportunity and the time to think about your situation using only positive language and see how much your day or week changes. Doing this for an extended period of time could change your entire life.
        
//         Related: Understanding the Bigger Picture and Why It's Important
//         6. Be honest with yourself
//         If your goal is at a standstill, you might need to be honest with yourself about why that is. After you have come to an understanding, try to find a solution to push yourself toward success.
        
//         Tip: Challenge yourself to step out of your comfort zone. This might mean an extra set of squats, having a conversation with a supervisor about a promotion or even signing up for a difficult college class you hadn't considered before.
//         1. Be committed
// Through commitment, you can gain motivation to pursue success. To begin the process of setting a goal, make a list that includes:

// Your goal
// Your level of commitment to the goal
// What you're willing to do to achieve that goal
// Staying focused on your plan is crucial. It helps to put aside at least 15 minutes daily to think about your plan and work toward it. This will keep your goal fresh and allow you to continue focusing on it.

// Madisyn McKee, a digital marketing and social media manager, understands what's important for fostering success. She also have experience with recruiting new talent and initiating efforts to encourage professional development. Here's what she said about achieving success:

// Being successful takes time and a lot of practice. Success does not happen overnight. Often it takes years of performing similar tasks over and over, or even years of failure before you have the opportunity to reap the rewards.

// —Madisyn McKee

// In determining your commitment to your goal, however, ensuring you have realistic expectations of yourself and the outcome is important. If your commitment isn't paying off after a certain time, you should adjust your goal accordingly and revise any necessary steps.

// Tip: Sometimes, it may be helpful to ask a friend or family member for support in helping you stick to your commitments. Having someone to hold you accountable for your shortcomings and praise your success can help you stay committed to your goal.

// Related: Setting Goals To Improve Your Career
// 2. Learn from the journey
// Rather than focusing strictly on the results of your accomplishments, take notice of the small steps needed to achieve success. If you allow yourself to enjoy small victories along your journey, reaching your goal will become a new adventure each day, and you will be more likely to stay on track. By doing this, you will learn new and exciting things along the way, which can help you grow as a person.

// Related: 5 Areas of Personal Growth (Plus Tips for Development)
// 3. Have fun along the way
// If the journey to achieve something becomes too tedious, succeeding will be more challenging.

// To be successful, you need to have passion for what you are doing.

// —Madisyn McKee

// Learning what you're capable of can be fun and exciting, so it's essential to keep your goals light and fun to have an emotionally positive experience and keep moving forward without losing perspective.

// Related: 70 Examples of Passions You Can Pursue in Your Life
// 4. Think positively
// Developing a positive mindset is about trusting yourself and your ability to succeed. It's important to replace any negative thoughts with positive ones to motivate yourself to keep trying no matter what challenges come your way.

// On your path to becoming successful, you're likely to learn new things and think differently than before. Your goals will not happen overnight. They will take practice and discipline to achieve, so it's vital to think about the process positively.

// Related: 7 Tips for Thinking Positively at Work
// 5. Change your perspective
// Sometimes along the journey, you have to change your perspective to turn a challenging situation into a better one. When you're having a bad day or week, imagine instead that it's a good day or week.

// Give yourself the opportunity and the time to think about your situation using only positive language and see how much your day or week changes. Doing this for an extended period of time could change your entire life.

// Related: Understanding the Bigger Picture and Why It's Important
// 6. Be honest with yourself
// If your goal is at a standstill, you might need to be honest with yourself about why that is. After you have come to an understanding, try to find a solution to push yourself toward success.

// Tip: Challenge yourself to step out of your comfort zone. This might mean an extra set of squats, having a conversation with a supervisor about a promotion or even signing up for a difficult college class you hadn't considered before.
//         `,
//   },
//   {
//     id: 4,
//     title: "7 health benefits of going to the gym",
//     datetime: "July 01, 2021 11:17:36 AM",
//     body: `
//     1. It helps you stay fit   
// The sedentary lifestyle associated with most white collar jobs and the intake of various foods that are unwholesome has led to an increase in sicknesses in our society today.   

// Working out regularly can also reduce your risk of injury and illness as well as prevent osteoporosis (bone weakness/loss).  

// Your efforts may also lower your risk of heart disease, high blood pressure, high cholesterol, and diabetes (type II).  

// Going to the gym helps keep you fit and healthy as the various exercises help to reduce the impact of a sedentary lifestyle that is prevalent in today’s world.   

// 2. It helps burn calories   
// Going to the gym on regular basis helps burn calories in the body.  

// Engaging in exercises at the gym can help prevent excess weight gain or help maintain weight loss. When you engage in physical activity, you burn calories. The more intense the activity, the more calories you burn.  

// Thus, a visit to the gym not only helps you burn calories but also helps keep the doctor away.   
// 3. Reduces illness or any form of sickness  
// A regular visit to the gym helps prevent or manage many illnesses and health conditions such as:  

// Stroke  
// High blood pressure  
// Type 2 diabetes  
// Depression  
// Anxiety
// Cancer  
// Arthritis  
// Going to the gym also helps improve cognitive function and helps lower the risk of death from all causes.  
// 4. It improves your muscles and boosts endurance   
// Regular involvement in physical activities at the gym can improve your muscle strength and boost your endurance.  

// Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently. And when your heart and lung health improve, you have more energy to tackle daily chores.  

// Activities like weightlifting in the gym can stimulate muscle building when paired with adequate protein intake and also in building and maintaining of strong muscles and bones.  

// 5. Improved physique and posture  
// Looking for ways to improve your physique and posture,  going to the gym is your sure in achieving your dream physique and posture.   

// Regular exercise and strength training at the gym will eventually change your body shape. It will also help you lose weight when combined with a healthy diet and improve your posture.  

// 6. It improves your blood flow  
// Partaking in exercises at the gym helps in the circulation of blood in the body as it increases blood flow, gets the heart pumping blood around your body faster and helps flush the blood through your arteries.  

// When you exercise the blood vessels that supply blood to your muscles and take blood away from your muscle dilate to allow for a massive increase in blood flow to your muscles.  

// 7. It improves your mental health   
// Engaging in exercises at the gym can improve brain function and protect memory and thinking skills. It increases your heart rate, which promotes the flow of blood and oxygen to your brain.   

// It also stimulates the production of hormones that enhance the growth of brain cells. Plus, the ability of exercise to prevent chronic disease can translate into benefits for your brain, since its function can be affected by these conditions.   

// Going to the gym consistently has a lot of health benefits that you can gain from. If you want to stay fit and healthy, you need to pay the price by setting out to the gym.  
 
//     `,
//   },
// ]);