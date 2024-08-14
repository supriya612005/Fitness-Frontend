import React from "react";
import styled from "styled-components";
//import "."
//C:\Users\ADMIN\OneDrive\Desktop\FINAL MERN\Fitness\fitnessfrontend\src\mycss\global.css
// Styled-components for styling the blog section
const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  overflow-y: auto; /* Allow vertical scrolling if needed */
  background: linear-gradient(to right, #fbc2eb, #a6c0fe); /* Example gradient */
  width: 100%;
  box-sizing: border-box;
   scroll-behavior: smooth;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px; /* Limit the width of the blog list */
`;

const BlogPost = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const PostDate = styled.p`
  font-size: 0.9rem;
  margin-bottom: 10px;
  color: #888;
`;

const PostExcerpt = styled.p`
  font-size: 1rem;
  color: #666;
`;

// Main Blog Component
const Blogs = () => {
  // Sample blog posts data
  const posts = [
    {
      title: "5 Effective Exercises for a Full Body Workout",
      date: "August 11, 2024",
      excerpt: "Discover five exercises that can help you achieve a comprehensive full-body workout. From strength training to cardio, these exercises will get you results."
    },
    {
      title: "The Ultimate Guide to Healthy Eating for Fitness Enthusiasts",
      date: "August 10, 2024",
      excerpt: "Learn about the best nutrition practices for fitness enthusiasts. This guide covers essential nutrients, meal planning, and tips for maintaining a balanced diet."
    },
    {
      title: "How to Stay Motivated During Your Fitness Journey",
      date: "August 9, 2024",
      excerpt: "Staying motivated can be challenging. Read on for practical tips and strategies to keep yourself on track and motivated throughout your fitness journey."
    },
    {
      title: "Top 10 Home Workouts for Busy Professionals",
      date: "August 8, 2024",
      excerpt: "No time for the gym? These 10 effective home workouts are perfect for busy professionals looking to stay fit without leaving their house."
    },
    {
      title: "The Benefits of Incorporating Yoga into Your Fitness Routine",
      date: "August 7, 2024",
      excerpt: "Explore how adding yoga to your fitness routine can improve flexibility, reduce stress, and enhance overall well-being."
    },
    {
      title: "How to Create a Balanced Workout Plan",
      date: "August 6, 2024",
      excerpt: "Learn how to design a balanced workout plan that includes strength training, cardio, and flexibility exercises to achieve your fitness goals."
    },
    {
      title: "Understanding Macronutrients and Their Role in Fitness",
      date: "August 5, 2024",
      excerpt: "Get a clear understanding of macronutrients—proteins, fats, and carbohydrates—and how they impact your fitness and health."
    },
    {
      title: "The Importance of Rest and Recovery in Your Fitness Regimen",
      date: "August 4, 2024",
      excerpt: "Discover why rest and recovery are crucial components of any fitness program and how to incorporate them effectively."
    },
    {
      title: "Effective Strategies for Weight Loss and Management",
      date: "August 3, 2024",
      excerpt: "Explore proven strategies for weight loss and management that will help you achieve and maintain a healthy weight."
    },
    {
      title: "How to Set Realistic Fitness Goals",
      date: "August 2, 2024",
      excerpt: "Setting achievable fitness goals is key to staying motivated. Learn how to set realistic goals that will keep you on track."
    },
    {
      title: "Exploring Different Types of Cardio Workouts",
      date: "August 1, 2024",
      excerpt: "From running to cycling, find out about various types of cardio workouts and their benefits for improving cardiovascular health."
    }
  ];

  return (
    <BlogWrapper>
      <BlogTitle>Fitness Blog</BlogTitle>
      <BlogList>
        {posts.map((post, index) => (
          <BlogPost key={index}>
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{post.date}</PostDate>
            <PostExcerpt>{post.excerpt}</PostExcerpt>
          </BlogPost>
        ))}
      </BlogList>
    </BlogWrapper>
  );
};

export default Blogs;
