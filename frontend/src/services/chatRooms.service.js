
export default {
    query,
    getByIds,
    getById
}

var chatRooms;

async function query(userId) {
    if (!userId) {
        chatRooms = await defaultChatRooms;
        return chatRooms;
    } else {
        chatRooms = await defaultChatRooms.filter(chatRoom => {chatRoom.userIds.includes(userId)})
        return chatRooms;
    }
}

async function getByIds(userId) {
    const chatRoom = await chatRooms.find(chat => {chat.userIds.includes(userId)}); //
    return chatRoom;
}

async function getById(chatId) {
    const chatRoom = await chatRooms.find(chat => chat._id === chatId)
    return chatRoom;
}

const defaultChatRooms = [
    {
        _id: "u1001",
        usersIds: ["u1","u2"],
        msgs: [
           {  _id: "msg234",
              txt: "Okay",
              type: "txt",
              sentAt: 1563021898186,
              addedBy: "u1",
              isRead: true
           },
           {  _id: "msg233",
              txt: "How about this date?",
              type: "dateReq",
              reqDetails: {suggested: "Jul 25th 2019, 4:00 pm", responseState: "pending"},
              sentAt: 1563021549563,
              addedBy: "u2",
              isRead: true
           }
        ]
    },
    {
        _id: "u1002",
        usersIds: ["u1","u3"],
        msgs: [
           {  _id: "msg234",
              txt: "Okay",
              type: "txt",
              sentAt: 1563021898186,
              addedBy: "u1",
              isRead: true
           },
           {  _id: "msg233",
              txt: "How about this date?",
              type: "dateReq",
              reqDetails: {suggested: "Jul 25th 2019, 4:00 pm", responseState: "pending"},
              sentAt: 1563021549563,
              addedBy: "u3",
              isRead: true
           }
        ]
    },
    {
        _id: "u1003",
        usersIds: ["u1","u4"],
        msgs: [
           {  _id: "msg234",
              txt: "Okay",
              type: "txt",
              sentAt: 1563021898186,
              addedBy: "u1",
              isRead: true
           },
           {  _id: "msg233",
              txt: "How about this date?",
              type: "dateReq",
              reqDetails: {suggested: "Jul 25th 2019, 4:00 pm", responseState: "pending"},
              sentAt: 1563021549563,
              addedBy: "u4",
              isRead: true
           }
        ]
    },
    {
        _id: "u1004",
        usersIds: ["u1","u5"],
        msgs: [
           {  _id: "msg234",
              txt: "Okay",
              type: "txt",
              sentAt: 1563021898186,
              addedBy: "u1",
              isRead: true
           },
           {  _id: "msg233",
              txt: "How about this date?",
              type: "dateReq",
              reqDetails: {suggested: "Jul 25th 2019, 4:00 pm", responseState: "pending"},
              sentAt: 1563021549563,
              addedBy: "u5",
              isRead: true
           }
        ]
    }
]
