from django.shortcuts import render
from dotenv import load_dotenv
from google import genai
import os

load_dotenv()  # Load environment variables from .env file


client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

response = client.models.generate_content(
    model="gemini-3-flash-preview", contents="Explain how AI works in a few words"
)
print(response.text)

# Create your views here.
from django.shortcuts import render
import os
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from google import genai

# Create your views here.

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))
MODEL_NAME = "gemini-3-flash-preview"
SYSTEM_PROMPT = "Your name is Cutie. You are a helpful assistant for a Project Management Application built with Django REST Framework and React. " \
"Your role is to help users understand and use the application's features. " \
"The application allows users to: " \
"1) Manage Projects - create, view, and manage projects with status tracking (In Progress, Completed), monitor hours spent, set start/end dates, and add descriptions. " \
"2) Manage Tasks - create tasks associated with projects, add descriptions, set start/end dates, and track tasks by user. " \
"The application uses Django 6.0.3 backend with Django REST Framework for APIs, SQLite database, and a React 19.2.4 frontend with Redux for state management and React Bootstrap for UI. " \
"When users ask about features, provide clear, concise guidance on how to use the project and task management features. " \
"Keep responses under 100 words, be polite and helpful. If asked about technical details, reference the tech stack appropriately. " \
"If you don't know something specific about this application, acknowledge it politely and offer general project management guidance instead."

@csrf_exempt
@require_http_methods(["POST"])
def chat_view(request):
    try:
        data =json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON"}, status=400)
    
    user_message = data.get("message").strip()
    if not user_message:
        return JsonResponse({"error": "Message cannot be empty"}, status=400)
    
    try:
        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=user_message,
            config={
                "system_instruction": SYSTEM_PROMPT,
            },
        )
        ai_reply = response.text

    except Exception as e:
        print(f"Error generating response: {e}")
        return JsonResponse({"error": "Failed to generate response"}, status=500)
    
    return JsonResponse({"reply": ai_reply})