import React, { useEffect, useState } from 'react';  

const Inspirational_Quotes = () => {  
  const [quote, setQuote] = useState('');  
  const [author, setAuthor] = useState('');  
  const [displayedQuote, setDisplayedQuote] = useState('');  
  const [isTyping, setIsTyping] = useState(false);  
  const [isRefreshing, setIsRefreshing] = useState(false); // State to handle SVG rotation

  // Function to fetch a random quote  
  const fetchQuote = async () => {  
    setIsRefreshing(true); // Start rotation animation
    try {  
      const response = await fetch('https://quotes-api-self.vercel.app/quote');  
      const data = await response.json();  
      setQuote(data.quote);  
      setAuthor(data.author);  
      setIsTyping(true); // Start typing animation  
    } catch (error) {  
      console.error('Error fetching quote:', error);  
      setQuote('Coding is not just about writing code, it\'s about solving problems.');  
      setAuthor('Anonymous');  
      setIsTyping(true); // Start typing animation  
    } finally {
      setIsRefreshing(false); // Stop rotation animation
    }
  };  

  // Simulate typing effect  
  useEffect(() => {  
    if (isTyping) {  
      let currentIndex = 0;  
      const typingInterval = setInterval(() => {  
        if (currentIndex <= quote.length) {  
          setDisplayedQuote(quote.slice(0, currentIndex));  
          currentIndex++;  
        } else {  
          clearInterval(typingInterval);  
          setIsTyping(false); // Stop typing animation  
        }  
      }, 50); // Adjust typing speed here  
      return () => clearInterval(typingInterval);  
    }  
  }, [isTyping, quote]);  

  // Fetch a quote when the component mounts  
  useEffect(() => {  
    fetchQuote();  
  }, []);  

  return (  
    <div className="py-24 my-12 px-4 sm:px-6 lg:px-8 animate__animated animate__fadeInUp">  
      <div className="max-w-4xl mx-auto text-center">  
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl mb-10">  
           <span className="main-text-color">Inspirational</span> Quote  
        </h2> 
        <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 sm:p-12 hover:shadow-3xl transition-shadow duration-300">  
          <blockquote className="text-[18px]  font-medium text-gray-800 italic">  
            "{displayedQuote}"  
            {isTyping && <span className="typing-cursor">|</span>}  
          </blockquote>  
          {!isTyping && author && ( // Display author only after typing is complete
            <p className="mt-6 text-[20px]  font-semibold text-gray-700">— {author}</p>  
          )}
          {/* Refresh Arrow SVG */}  
          <div  
            onClick={fetchQuote}  
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 rounded-full p-3 cursor-pointer transition-all duration-300"  
            style={{ backgroundColor: '#5956e9' }}  
          >  
            <svg  
              xmlns="http://www.w3.org/2000/svg"  
              className={`h-8 w-8 text-white ${isRefreshing ? 'rotate' : ''}`}  
              fill="none"  
              viewBox="0 0 24 24"  
              stroke="currentColor"  
            >  
              <path  
                strokeLinecap="round"  
                strokeLinejoin="round"  
                strokeWidth={2}  
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"  
              />  
            </svg>  
          </div>  
        </div>  
      </div>    
    </div>  
  );  
};  

export default Inspirational_Quotes;  