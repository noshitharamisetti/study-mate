import openai from "../openai.js";

export const chatWithAI = async (req, res) => {
  const { message } = req.body;

  try {
    // Try real OpenAI response
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are StudyMate AI, an academic tutor.
Explain concepts clearly.
Use step-by-step explanations.
Give examples.
Avoid generic replies.
          `,
        },
        { role: "user", content: message },
      ],
      temperature: 0.3,
    });

    return res.json({
      reply: completion.choices[0].message.content,
    });

  } catch (error) {
    console.error("⚠️ OpenAI unavailable:", error.message);

    // 🔁 FALLBACK RESPONSE (SMART MODE)
    const fallbackReply = generateFallback(message);

    return res.json({
      reply: fallbackReply,
    });
  }
};

// 🧠 SMART FALLBACK LOGIC
const generateFallback = (question) => {
  const q = question.toLowerCase();

  if (q.includes("binary search")) {
    return `
Binary Search is an efficient searching algorithm used on sorted arrays.

Steps:
1. Find the middle element
2. Compare it with the target
3. If target is smaller, search left half
4. If target is larger, search right half

Time Complexity: O(log n)
    `;
  }

  if (q.includes("stack")) {
    return `
A Stack follows the LIFO principle (Last In First Out).

Example:
Plates stacked on a table.

Operations:
• Push – insert element
• Pop – remove element
• Peek – view top element
    `;
  }

  if (q.includes("dbms")) {
    return `
DBMS (Database Management System) is used to store, manage, and retrieve data efficiently.

Examples:
• MySQL
• MongoDB
• Oracle
    `;
  }

  if (q.includes("study plan")) {
    return `
Sample Study Plan:
• Morning: Learn new concepts
• Afternoon: Practice problems
• Evening: Revise notes
• Night: Short tests
    `;
  }

  return `
AI service is temporarily unavailable due to usage limits.

Please try again later.
(This fallback response is part of system design.)
  `;
};

export const summarizeNote = async (req, res) => {
  const { content } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are StudyMate AI.
Summarize the given academic notes.
Use short bullet points.
Keep it exam-oriented.
          `,
        },
        {
          role: "user",
          content: content,
        },
      ],
      temperature: 0.3,
    });

    return res.json({
      summary: completion.choices[0].message.content,
    });

  } catch (error) {
    console.error("⚠️ AI summarization unavailable:", error.message);

    // 🔁 FALLBACK SUMMARY
    return res.json({
      summary: fallbackSummary(content),
    });
  }
};

// 🧠 FALLBACK LOGIC
const fallbackSummary = (text) => {
  return `
Summary:
• This note explains key academic concepts.
• Important definitions and steps are highlighted.
• Suitable for quick revision before exams.
• Use this summary along with detailed notes.
  `;
};

