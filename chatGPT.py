from flask import Flask, render_template, request

import openai

# Set up the OpenAI API client
openai.api_key = "your API key"

# Set up the model and prompt
model_engine = "text-davinci-003"


app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    return str(chatbot_response(userText)) 

def chatbot_response(message):
    # Generate a response
    print(message)
    completion = openai.Completion.create(
        engine=model_engine,
        prompt = message,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )
    response = completion.choices[0].text
    print(response)

    return response

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5055)

