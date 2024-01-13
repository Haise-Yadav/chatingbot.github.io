// pages/api/chatbot.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { message } = req.body;
  
      // You can implement the logic to communicate with your Python chatbot backend here.
      // For this example, let's simulate a response.
      const chatbotResponse = `This is a response from the chatbot to: ${message}`;
  
      res.status(200).json({ response: chatbotResponse });
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }
  