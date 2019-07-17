
export default {
    query,
    getById,
    addMsg,
    add
}

var chatRooms;

async function query(userId) {
    if (!userId) {
        chatRooms = await defaultChatRooms;
        return chatRooms;
    } else {
        chatRooms = await defaultChatRooms.filter(chatRoom => chatRoom.usersIds.includes(userId))
        return chatRooms;
    }
}

async function getById(chatId) {    
    const chatRoom = await chatRooms.find(chat => chat._id === chatId)
    return chatRoom;
}

async function addMsg(addedMsg, chatId) {
   addedMsg._id = makeId();
   let updatedChatroom = await getById(chatId);
   updatedChatroom.msgs.push(addedMsg);
   return updatedChatroom;
}

function makeId(length=5) {
   var text = '';
   var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

   for (var i = 0; i < length; i++)
       text += possible.charAt(Math.floor(Math.random() * possible.length));

   return text;
}

async function add(usersIds, msg) {
   var newChat = {
      _id: makeId(),
      usersIds: usersIds,
      msgs: [msg]
   }
   chatRooms.push(newChat)
   return newChat;
}

const defaultChatRooms = [
    {
        _id: "u1001",
        usersIds: ["5d2da4841b871768838cbf76","5d2da4841b871768838cbf77"],
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
        usersIds: ["5d2da4841b871768838cbf76","5d2da4841b871768838cbf78"],
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
        usersIds: ["5d2da4841b871768838cbf76","5d2da4841b871768838cbf79"],
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
        usersIds: ["5d2da4841b871768838cbf76","5d2da4841b871768838cbf7a"],
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
    },
    {
        "_id": "u1006",
        "usersIds": ["5d2da4841b871768838cbf7b","5d2da4841b871768838cbf7c"],
        "msgs": [
           {  "_id": "msg234",
              "txt": "Okay",
              "type": "txt",
              "sentAt": 1563021898186,
              "addedBy": "u2",
              "isRead": true
           },
           {  "_id": "msg233",
              "txt": "How about this date?",
              "type": "dateReq",
              "reqDetails": {"suggested": "Jul 25th 2019, 4:00 pm", "responseState": "pending"},
              "sentAt": 1563021549563,
              "addedBy": "u3",
              "isRead": true
           }
        ]
    }
]
