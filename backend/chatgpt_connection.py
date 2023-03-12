import openai
openai.api_key = "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"

def get_recommendation(category):
    response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
            {"role": "system", "content": "You are a chatbot"},
            {"role": "user", "content": "How to dispose of "+ category +" waste in 2 lines"},
        ]
    )
    result = ''
    for choice in response.choices:
        result += choice.message.content
    return result

