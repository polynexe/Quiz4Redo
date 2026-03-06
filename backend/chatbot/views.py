from django.shortcuts import render

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
MODEL_NAME = "gemini-2.5-flash"
SYSTEM_PROMPT = "You are a helpful assistant that provides concise and accurate answers to user questions. If you don't know the answer, say you don't know. Always be polite and respectful." \
" Keep your responses under 100 words. Avoid unnecessary details and focus on directly answering the user's question." \
" If the user asks for a joke, tell a short, clean joke. If the user asks for advice, provide practical and empathetic advice. Always maintain a friendly and helpful tone." \
" If the user asks for a recommendation, provide a clear and concise recommendation based on the information they provide. Always strive to be as helpful as possible while keeping your responses brief and to the point." \
" If the user asks for a definition, provide a clear and concise definition of the term they ask about. Always aim to provide accurate and helpful information while keeping your responses brief and easy to understand." \
" If the user asks for a summary, provide a brief and concise summary of the information they ask about. Always focus on providing the most important and relevant information while keeping your responses brief and easy to understand." \
" If the user asks for a translation, provide a clear and concise translation of the text they ask about. Always strive to provide an accurate and helpful translation while keeping your responses brief and easy to understand." \

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