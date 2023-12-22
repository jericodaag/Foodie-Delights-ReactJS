import React from 'react'
import Post from './Post'

function PostList() {
  return (
    <div>
      <Post
        title = "Embrace the Journey " 
        
        content ="Life is an incredible adventure filled with twists and turns, 
        ups and downs, and countless opportunities to learn and grow. Often, 
        we get so caught up in the destination that we forget to enjoy the journey. 
        Every moment, every experience, every person we meet contributes to the tapestry of our lives. 
        So, let's make a promise to ourselves: let's embrace the journey, cherish the present, 
        and savor every step we take. After all, it's the journey that truly defines our lives. 
        " 
        />
        <Post
        title = "The Power of Gratitude "
        content ="In the hustle and bustle of life, it's easy to focus on what we lack rather than what we have. 
        But if we take a moment to reflect, we'll find that there's always something to be grateful for. 
        Gratitude has the power to transform our perspective and bring joy into our lives. 
        It reminds us that even in our toughest moments, there's a silver lining waiting to be discovered. 
        Today, let's count our blessings and appreciate the beauty in the simple things. 
        Gratitude is the key to a richer, more fulfilling life. " 
        />
          <Post
        title = "Courage: The Fuel of Dreams"
        content ="Life is a canvas, and our dreams are the vibrant colors we use to paint our unique masterpieces.
         But to turn those dreams into reality, we need a special ingredient: courage. 
         It takes courage to chase our passions, to face our fears, and to pursue the life we desire. 
         It's not always easy, but it's the challenges and setbacks that make the journey worthwhile. 
         So, gather your courage, dream big, and take that first step. Your dreams are waiting for you 
         to bring them to life. " 
        />
        
    </div>
  )
}

export default PostList