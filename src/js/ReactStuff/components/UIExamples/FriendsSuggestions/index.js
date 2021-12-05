import React from "react";
import {Users} from "./json";
import {func} from "prop-types";

const friendsSuggestionAlgo = (users) => {
    let userMap = {}, alreadyFriendsMap = {}, alreadySuggestedMap = {}, alreadyVisited= {}, suggestionsArray = [];
    for (let user of users) {
       userMap[user.id] = user;
       if (user.id === 1){
           for (let alreadyFriendId of userMap[user.id].friends){
               alreadyFriendsMap[alreadyFriendId] = true;
           }
       }
    }

    let mainUser = userMap[1];

    let suggestFriends = function (user, callingUserId, socialDistance = 0, mutualFriends = 0){
        let { friends, id } = user;
        for (let friendId of friends){
            if (friendId === callingUserId || friendId === 1){
                continue;
            }
            if (!alreadyVisited[friendId]){
                if (!alreadyFriendsMap[friendId] && !alreadySuggestedMap[friendId]){
                    alreadySuggestedMap[friendId] = true;
                    suggestionsArray.push({
                        id: friendId,
                        name: userMap[friendId].name,
                        socialDistance: socialDistance + 1
                    });
                }else{
                    alreadyVisited[friendId] = true;
                    suggestFriends(userMap[friendId], id, ++socialDistance);
                }
            }
        }
    };

    suggestFriends(mainUser, 1);

    return suggestionsArray;
};

export const UserSuggestions = () => {
    let suggestions = friendsSuggestionAlgo(Users);
    return (
        <div className="friend-suggestions container">
            {
                suggestions.map((suggestion) => {
                   return ( <div className="friend" key={suggestion.id}>
                        <p>{suggestion.name} - {suggestion.socialDistance}</p>
                    </div>);
                })
            }
        </div>
    );
};
