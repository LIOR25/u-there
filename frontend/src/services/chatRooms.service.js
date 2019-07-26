import HttpService from "./HttpService";

export default {
    query,
    getById,
    addMsg,
    add
}

var chatRooms;

async function query() {

    const chatRooms = await HttpService.ajax('api/chatroom', 'get')
    // chatRooms = allChatRooms.filter(chatRoom => chatRoom.usersIds.includes(userId))
    return chatRooms;

}

/*
async function query(filterBy = {}) {
  console.log(filterBy);

  const users = await HttpService.ajax('api/user', 'get', null, filterBy);
  return users;
}

*/

async function getById(chatId) {
    const chatRoom = await HttpService.ajax(`api/chatroom/${chatId}`, 'get');
    return chatRoom;
}

async function addMsg(addedMsg, chatId) {
    addedMsg._id = makeId();
    // let updatedChatroom = await getById(chatId);
    // updatedChatroom.msgs.push(addedMsg);
    // return updatedChatroom;
    const newMsg = {
        msg: addedMsg,
        chatroomId: chatId
    }
    return await HttpService.ajax(`api/chatroom`, 'put', newMsg)
}

function makeId(length = 5) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

async function add(usersIds, msg) {
    msg._id = makeId()
    var newChat = {
        usersIds: usersIds,
        msgs: [msg]
    }
    console.log(newChat);

    // chatRooms.push(newChat)
    const updatedChatroom = await HttpService.ajax('api/chatroom', 'post', newChat);
    return updatedChatroom;
}

// const defaultChatRooms = [
//     {
//         _id: "u1001",
//         usersIds: ["5d2da4841b871768838cbf76","5d2da4841b871768838cbf77"],
//         msgs: [
//            {  _id: "msg234",
//               txt: "Okay",
//               type: "txt",
//               sentAt: 1563021898186,
//               addedBy: "u1",
//               isRead: true
//            },
//            {  _id: "msg233",
//               txt: "How about this date?",
//               type: "dateReq",
//               reqDetails: {suggested: "Jul 25th 2019, 4:00 pm", responseState: "pending"},
//               sentAt: 1563021549563,
//               addedBy: "u2",
//               isRead: true
//            }
//         ]
//     },
//     {
//         _id: "u1002",
//         usersIds: ["5d2da4841b871768838cbf76","5d2da4841b871768838cbf78"],
//         msgs: [
//            {  _id: "msg234",
//               txt: "Okay",
//               type: "txt",
//               sentAt: 1563021898186,
//               addedBy: "u1",
//               isRead: true
//            },
//            {  _id: "msg233",
//               txt: "How about this date?",
//               type: "dateReq",
//               reqDetails: {suggested: "Jul 25th 2019, 4:00 pm", responseState: "pending"},
//               sentAt: 1563021549563,
//               addedBy: "u3",
//               isRead: true
//            }
//         ]
//     },
//     {
//         _id: "u1003",
//         usersIds: ["5d2da4841b871768838cbf76","5d2da4841b871768838cbf79"],
//         msgs: [
//            {  _id: "msg234",
//               txt: "Okay",
//               type: "txt",
//               sentAt: 1563021898186,
//               addedBy: "u1",
//               isRead: true
//            },
//            {  _id: "msg233",
//               txt: "How about this date?",
//               type: "dateReq",
//               reqDetails: {suggested: "Jul 25th 2019, 4:00 pm", responseState: "pending"},
//               sentAt: 1563021549563,
//               addedBy: "u4",
//               isRead: true
//            }
//         ]
//     },
//     {
//         _id: "u1004",
//         usersIds: ["5d2da4841b871768838cbf76","5d2da4841b871768838cbf7a"],
//         msgs: [
//            {  _id: "msg234",
//               txt: "Okay",
//               type: "txt",
//               sentAt: 1563021898186,
//               addedBy: "u1",
//               isRead: true
//            },
//            {  _id: "msg233",
//               txt: "How about this date?",
//               type: "dateReq",
//               reqDetails: {suggested: "Jul 25th 2019, 4:00 pm", responseState: "pending"},
//               sentAt: 1563021549563,
//               addedBy: "u5",
//               isRead: true
//            }
//         ]
//     },
//     {
//         "_id": "u1006",
//         "usersIds": ["5d2da4841b871768838cbf7b","5d2da4841b871768838cbf7c"],
//         "msgs": [
//            {  "_id": "msg234",
//               "txt": "Okay",
//               "type": "txt",
//               "sentAt": 1563021898186,
//               "addedBy": "u2",
//               "isRead": true
//            },
//            {  "_id": "msg233",
//               "txt": "How about this date?",
//               "type": "dateReq",
//               "reqDetails": {"suggested": "Jul 25th 2019, 4:00 pm", "responseState": "pending"},
//               "sentAt": 1563021549563,
//               "addedBy": "u3",
//               "isRead": true
//            }
//         ]
//     }
// ]

function _getQueryString(filterBy) {
    var queryStrings = Object.entries(filterBy).map(entry => {
        return `${entry[0]}=${entry[1]}&`;
    })

    queryStrings.unshift('?');
    return queryStrings.join('');
}