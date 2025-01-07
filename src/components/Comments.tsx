import React, { useState } from 'react';

const Comments = () => {
  // State to store the list of comments
  const [comments, setComments] = useState<string[]>([]);
  
  // State to store the new comment input
  const [newComment, setNewComment] = useState<string>('');

  // Function to handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]); // Add the new comment to the list
      setNewComment(''); // Clear the input field
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Comments</h3>

      {/* Input field for new comment */}
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)} // Update newComment state
        placeholder="Add a comment..."
        rows={3}
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      {/* Button to add comment */}
      <button
        onClick={handleAddComment}
        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Add Comment
      </button>

      {/* Display list of comments */}
      <div className="mt-6">
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
        
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
