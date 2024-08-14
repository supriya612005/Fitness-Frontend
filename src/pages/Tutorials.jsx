import React from "react";
import styled from "styled-components";

// Styled-components for styling the tutorial section
const TutorialsWrapper = styled.div`
  display: grid;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  overflow-y: auto; 
  
  background: linear-gradient(to right, #a8c0ff, #3f2b96); 
  /* Allow vertical scrolling if needed */
`;

const CategoryTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

// Main Tutorials Component
const Tutorials = () => {
  // Array of categories with their titles and video sources
  const categories = [
    {
      title: "Full Body Workouts",
      videos: [
        "https://www.youtube.com/embed/L_xrDAtykMI",
        "https://www.youtube.com/embed/IT94xC35u6k",
        "https://www.youtube.com/embed/l9_SoClAO5g",
        "https://www.youtube.com/embed/cbKkB3POqaY",
      ]
    },
    {
      title: "Leg Workouts",
      videos: [
        "https://www.youtube.com/embed/Jg61m0DwURs",
        "https://www.youtube.com/embed/1IQGtcv3eRY",
        // Add more leg workout videos here
      ]
    },
    {
      title: "Upper Body Workouts",
      videos: [
        "https://www.youtube.com/embed/SZaggsg2zUY",
        "https://www.youtube.com/embed/h8WTMvVHXW0",
        // Add more upper body workout videos here
      ]
    }
    // Add more categories as needed
  ];

  return (
    <TutorialsWrapper>
      {categories.map((category, index) => (
        <div key={index}>
          <CategoryTitle>{category.title}</CategoryTitle>
          <VideoGrid>
            {category.videos.map((src, idx) => (
              <VideoWrapper key={idx}>
                <iframe
                  src={src}
                  title={`Video ${idx + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </VideoWrapper>
            ))}
          </VideoGrid>
        </div>
      ))}
    </TutorialsWrapper>
  );
};

export default Tutorials;
