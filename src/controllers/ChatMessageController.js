class ChatMessageController {
  get(request, response) {
    let data = 0;

    setInterval(() => {
      data++;

      console.log(data);
    }, 3000);

    return response.status(200).json({ message: 'running' });
  }
}

export default new ChatMessageController();
